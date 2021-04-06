"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2021/3/29 13:26
INSTRUCTIONS:   小工具序列化
"""
from rest_framework import serializers


class BaiDuAISerializer(serializers.Serializer):
    access_token = serializers.CharField(max_length=100, min_length=100)
