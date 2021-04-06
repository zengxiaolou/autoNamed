import datetime

from django.db import models


class Word(models.Model):
    """单字数据"""
    word = models.CharField(max_length=1, unique=True, verbose_name="单字")
    element = models.CharField(max_length=1, null=True, blank=True, verbose_name="五行")
    pinyin = models.CharField(max_length=50, null=True, blank=True, verbose_name="拼音")
    tone = models.CharField(max_length=50, null=True, blank=True, verbose_name="声调")
    meaning = models.CharField(max_length=255, null=True, blank=True, verbose_name="字义")
    idiom = models.CharField(max_length=100, null=True, blank=True, verbose_name="成语")
    poetry = models.CharField(max_length=255, null=True, blank=True, verbose_name="诗词")
    provenance = models.CharField(max_length=100, null=True, blank=True, verbose_name="出处")
    custom_meaning = models.CharField(max_length=255, null=True, blank=True, verbose_name="自定义字义")
    sex = models.CharField(max_length=1, null=True, blank=True, verbose_name="性别")
    initials = models.CharField(max_length=2, null=True, blank=True, verbose_name="声母")
    created_at = models.DateTimeField(auto_now=True, verbose_name="创建时间")
    updated_at = models.DateTimeField(default=datetime.datetime.now, verbose_name="更新时间")
    is_active = models.BooleanField(default=True, verbose_name='删除')

    def __str__(self):
        return self.word

    class Meta:
        verbose_name = 'word'
        verbose_name_plural = verbose_name


class NameModel(models.Model):
    """名字"""
    name = models.CharField(max_length=1, unique=True, verbose_name="单字")
    element = models.CharField(max_length=1, null=True, blank=True, verbose_name="五行")
    pinyin = models.CharField(max_length=50, null=True, blank=True, verbose_name="拼音")
    tone = models.CharField(max_length=50, null=True, blank=True, verbose_name="声调")
    provenance = models.CharField(max_length=100, null=True, blank=True, verbose_name="出处")
    moral = models.CharField(max_length=255, null=True, blank=True, verbose_name="寓意")
    sex = models.CharField(max_length=1, null=True, blank=True, verbose_name="性别")
    created_at = models.DateTimeField(auto_now=True, verbose_name="创建时间")
    updated_at = models.DateTimeField(default=datetime.datetime.now, verbose_name="更新时间")
    is_active = models.BooleanField(default=True, verbose_name='删除')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'name'
        verbose_name_plural = verbose_name
