from .base import *

DEBUG = False

ALLOWED_HOSTS = ['*']

DATABASES = {

    'default': env.db(),
}