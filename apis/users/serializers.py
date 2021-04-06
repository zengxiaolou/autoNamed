"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2020/8/18-13:09
INSTRUCTIONS:   用户信息序列化
"""
import re
from django.core.cache import cache
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.serializers import raise_errors_on_nested_writes
from rest_framework.utils import model_meta

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """用户信息"""
    id = serializers.IntegerField(read_only=True)
    password = serializers.CharField(max_length=20, min_length=8, required=True, write_only=True)
    username = serializers.CharField(max_length=20, min_length=3, required=True)
    nickname = serializers.CharField(required=False)
    is_superuser = serializers.BooleanField(read_only=True)

    @staticmethod
    def validate_username(username):
        """检查用户名是否合规"""
        print(username)
        if re.match(r"^(?!\d+$)[\da-zA-Z_]+$", username) is None:
            raise serializers.ValidationError('用户名不符合要求')
        if User.objects.filter(username=username).first():
            raise serializers.ValidationError('该用户名已存在')
        return username

    def create(self, validated_data):
        user = super(UserSerializer, self).create(
            validated_data=validated_data)  # user对象是Django中继承的AbstractUser
        # UserProfile-->AbstractUser-->AbstractBaseUser中有个set_password(self, raw_password)方法
        user.set_password(validated_data['password'])  # 取出password密码，进行加密后保存
        user.save()
        # ModelSerializer有一个save()方法，save()里面会调用create()函数，这儿重载了create()函数，加入加密的逻辑
        return user

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'nickname', 'last_login', 'is_superuser')
        depth = 1


