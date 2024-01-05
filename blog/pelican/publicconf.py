import os
import sys

sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from pelicanconf import *

BLOGSITEURL = "https://cameronblocker.com"
SITEURL = "https://cameronblocker.com"
RELATIVE_URLS = False

DELETE_OUTPUT_DIRECTORY = True


PLUGINS += ["css_html_js_minify"]
