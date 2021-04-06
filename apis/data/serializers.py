"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2021/3/30 14:02
INSTRUCTIONS:   文件简介
"""
from rest_framework import serializers

from apis.data.models import Word, NameModel


class WordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Word
        exclude = ('created_at', 'updated_at', 'is_active')


class NameSerializer(serializers.ModelSerializer):

    class Meta:
        model = NameModel
        exclude = ('created_at', 'updated_at', 'is_active')
