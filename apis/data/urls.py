"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2021/3/30 14:09
INSTRUCTIONS:   文件简介
"""
from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from apis.data.views import WordViewSet, NameViewSet, NamedView

app_name = 'data'

router = routers.DefaultRouter()

router.register(r'word', WordViewSet, basename='word')
router.register(r'name', NameViewSet, basename='name')


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^named/$', NamedView.as_view(), name='命名')
]