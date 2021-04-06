from django.contrib.auth import get_user_model
from rest_framework import mixins, viewsets

from apis.users.serializers import UserSerializer
from apis.utils.permissions import IsOwnerOrReadOnly

User = get_user_model()


class UserViewSet(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin,
                  mixins.DestroyModelMixin, viewsets.GenericViewSet):
    """用户相关"""
    queryset = User.objects.all()
    serializer_class = UserSerializer
