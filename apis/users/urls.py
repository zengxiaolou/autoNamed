"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2021/3/26 10:41
INSTRUCTIONS:   文件简介
"""

from django.conf.urls import url, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers

from .views import *

app_name = 'users'

router = routers.DefaultRouter()

# 配置用户信息相关url
router.register(r'user', UserViewSet, basename='user')


urlpatterns = [
    url(r'^login/$', obtain_jwt_token),
    url(r'^', include(router.urls))
]
