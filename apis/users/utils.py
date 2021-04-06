"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2021/3/26 10:27
INSTRUCTIONS:   文件简介
"""
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend

User = get_user_model()


def jwt_response_payload_handler(token: str, user=None, request=None):
    """为返回的结果添加用户相关信息"""
    return {'token': token, 'username': user.username, 'id': user.id, 'role': user.is_superuser,
            'nickname': user.nickname}


class CustomBackend(ModelBackend):
    """自定义用户验证"""
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                return user
        except Exception as e:
            return
