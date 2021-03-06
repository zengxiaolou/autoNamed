"""name URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title='自动取名系统',
        default_version="v1",
        description="自动取名系统"
    ),
    public=True,
    url='http://0.0.0.0:8000/',
    permission_classes=(permissions.AllowAny,)
)

urlpatterns = [
    url(r'^jwt/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^api/(?P<version>[v1|2]+)/user/', include('apis.users.urls')),
    url(r'^api/(?P<version>[v1|2]+)/utils/', include('apis.utils.urls')),
    url(r'^api/(?P<version>[v1|2]+)/data/', include('apis.data.urls')),
]