
import os
import sys
sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from pelicanconf import *

# disable root index
TEMPLATE_PAGES = {}
STATIC_PATHS.remove('misc')

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

SITEURL = 'https://blog.cameronblocker.com'
del BLOGSITEURL
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'

DELETE_OUTPUT_DIRECTORY = True

PLUGINS += ['css_html_js_minify']
