from django.shortcuts import render
from rest_framework import mixins, status
from rest_framework.response import Response
from rest_framework.views import APIView

from apis.utils.utils import get_baidu_access_token, JsonModel, get_word_explain


class BaiDuView(APIView):

    # def get(self, *args, **kwargs):
    #     token = get_baidu_access_token()
    #     return Response(dict(JsonModel(msg='获取token成功', results=token)), status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        token = get_baidu_access_token()
        word = request.data.get('word', '')
        if word:
            pinyin, tone = get_word_explain(token, word + "的拼音")
            element = get_word_explain(token, word + "的五行")
            idiom = get_word_explain(token, word + "的成语")
            poetry = get_word_explain(token, word + "的诗句")
            meaning = get_word_explain(token, word + "的字义")
            res = {
                "pinyin": pinyin,
                "tone": tone,
                "element": element,
                "idiom": idiom,
                "poetry": poetry,
                "meaning": meaning
            }
            return Response(dict(JsonModel(msg='获取解释成功', results=res)), status=status.HTTP_200_OK)
        else:
            return Response(dict(JsonModel(code=1002, success=False, msg='关键词不能为空')))

