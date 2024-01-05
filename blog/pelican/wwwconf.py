
import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from pelicanconf import *


# disable blog
ARTICLE_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''
INDEX_SAVE_AS = ''
ARCHIVES_SAVE_AS = ''

# move blog to root
ARTICLE_URL = '{slug}.html'
ARTICLE_SAVE_AS = '{slug}.html'

CATEGORY_URL = 'category/{slug}.html'
CATEGORY_SAVE_AS = 'category/{slug}.html'
CATEGORIES_SAVE_AS = 'categories.html'

TAG_URL = 'tag/{slug}.html'
TAG_SAVE_AS = 'tag/{slug}.html'
TAGS_SAVE_AS = 'tags.html'

INDEX_SAVE_AS = 'index.html'
ARCHIVES_SAVE_AS = 'archives.html'

BLOGSITEURL = 'https://blog.cameronblocker.com'
SITEURL = 'https://cameronblocker.com'
RELATIVE_URLS = False

DELETE_OUTPUT_DIRECTORY = True

STATIC_PATHS.remove('css')

PLUGINS += ['css_html_js_minify']
