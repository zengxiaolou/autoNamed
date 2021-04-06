import random

from django.shortcuts import render
from rest_framework import mixins, viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView

from apis.data.models import Word, NameModel
from apis.data.serializers import WordSerializer, NameSerializer
from apis.utils.utils import JsonModel


class WordViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = WordSerializer
    queryset = Word.objects.filter(is_active=True).all()


class NameViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = NameSerializer
    queryset = NameModel.objects.filter(is_active=True).all()


class NamedView(APIView):
    """命名"""

    def post(self, request, *args, **kwargs):
        source = request.data['source']
        num = request.data['num']
        first_name = Word.objects.filter(word=request.data.get('firstName')).values()
        if not first_name:
            return Response(dict(JsonModel(code=1002, success=False, msg='改姓字库尚未收集，请先收集再取名')),
                            status=status.HTTP_400_BAD_REQUEST)
        if source == 'word':
            query = Word.objects.filter(is_active=True).all()
        else:
            query = NameModel.objects.filter(is_active=True).all()
        if request.data.get('sex', ''):
            query = query.filter(sex=request.data['sex'])
        query_one = query
        query_two = query
        if request.data.get('LastNameOne', "").strip() != '':
            query_one = query_one.filter(word=request.data.get('LastNameOne'))
        if request.data.get('LastNameOnePinyin', "").strip() != '':
            query_one = query_one.filter(pinyin=request.data.get('LastNameOnePinyin'))
        if request.data.get('LastNameOneElement', ""):
            query_one = query_one.filter(element__in=request.data.get('LastNameOneElement'))
        if request.data.get('LastNameOneInitials', "").strip() != '':
            query_one = query_one.filter(initials=request.data.get('LastNameOneInitials'))
        if request.data.get('LastNameOneTone', ""):
            query_one = query_one.filter(tone__in=request.data.get('LastNameOneTone'))
        if request.data.get('LastNameOneForbidden', ""):
            query_one = query_one.filter().exclude(word__in=request.data.get('LastNameOneForbidden'))
        if num == 'two':
            if request.data.get('LastNameTwo', "").strip() != "":
                query_two = query_two.filter(word=request.data.get('LastNameTwo'))
            if request.data.get('LastNameTwoPinyin', ""):
                query_two = query_two.filter(pinyin=request.data.get('LastNameTwoPinyin'))
            if request.data.get('LastNameTwoElement', ""):
                query_two = query_two.filter(element__in=request.data.get('LastNameTwoElement'))
            if request.data.get('LastNameTwoInitials', ""):
                query_two = query.filter(initials=request.data.get('LastNameTwoInitials'))
            if request.data.get('LastNameTwoTone', ""):
                query_two = query_two.filter(tone__in=request.data.get('LastNameTwoTone'))
            if request.data.get('LastNameTwoForbidden', ""):
                query_two = query_two.filter().exclude(word=request.data.get('LastNameTwoForbidden'))
        if num == 'one':
            one_res = query_one.values()
            tmp = []
            if len(one_res) > 4:
                for j in range(0, 4):
                    i = random.randint(0, len(one_res)-1)
                    tmp.append(one_res[i])
                one_res = tmp
            data = {
                "first_name": first_name,
                "one": one_res,
            }
            return Response(dict(JsonModel(results=data)), status=status.HTTP_200_OK)
        else:
            one_res = query_one.values()
            tmp = []
            if len(one_res) > 4:
                for j in range(0, 4):
                    i = random.randint(0, len(one_res) - 1)
                    tmp.append(one_res[i])
                one_res = tmp
            two_res = query_two.values()
            tmp = []
            if len(two_res) > 4:
                for j in range(0, 4):
                    i = random.randint(0, len(two_res) - 1)
                    tmp.append(two_res[i])
                two_res = tmp
            data = {
                "first_name": first_name,
                "one": one_res,
                "two": two_res
            }
            return Response(dict(JsonModel(results=data)), status=status.HTTP_200_OK)
