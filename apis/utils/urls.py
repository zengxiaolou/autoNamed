"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2021/3/29 18:25
INSTRUCTIONS:   文件简介
"""

from django.conf.urls import url, include
from rest_framework import routers

from .views import *

app_name = 'utils'

router = routers.DefaultRouter()

# 配置用户信息相关url


urlpatterns = [
    url(r'^baidu/$', BaiDuView.as_view(), name='baidu'),
]