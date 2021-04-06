from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    """用户信息"""
    nickname = models.CharField(max_length=10, default="", verbose_name='昵称')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __str__(self):
        return self.username
