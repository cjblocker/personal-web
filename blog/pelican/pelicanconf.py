#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import time

AUTHOR = "Cameron Blocker"
SITENAME = "Cameron Blocker"
SITEURL = ""
BLOGSITEURL = ""

PATH = "content"

TIMEZONE = "America/Detroit"

DEFAULT_LANG = "en-us"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 10
CURRENT_YEAR = time.strftime("%Y")

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# THEME = '..'
STATIC_PATHS = [
    "images",
    "css",
    "favicon",
    "misc",
    "blog",
]
EXTRA_PATH_METADATA = {
    "favicon/favicon.ico": {"path": "favicon.ico"},
    "favicon/favicon-32x32.png": {"path": "favicon-32x32.png"},
}

DELETE_OUTPUT_DIRECTORY = True
DISPLAY_SEARCH_FORM = True

PUBLICATIONS_SRC = "content/pubs.bib"
PUBLICATIONS_CUSTOM_STYLE = True
PUBLICATIONS_STYLE_ARGS = {"site_author": "Cameron J. Blocker"}
PUBLICATIONS_PLUGIN_PATH = "pelican/plugins"

PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pelican_katex", "pelican_bib"]

ARTICLE_PATHS = ["blog"]
ARTICLE_URL = "blog/{slug}.html"
ARTICLE_SAVE_AS = "blog/{slug}.html"

CATEGORY_URL = "blog/category/{slug}.html"
CATEGORY_SAVE_AS = "blog/category/{slug}.html"
CATEGORIES_SAVE_AS = "blog/categories.html"

TAG_URL = "blog/tag/{slug}.html"
TAG_SAVE_AS = "blog/tag/{slug}.html"
TAGS_SAVE_AS = "blog/tags.html"

INDEX_SAVE_AS = "blog/index.html"
ARCHIVES_SAVE_AS = "blog/archives.html"
AUTHOR_URL = ""
AUTHOR_SAVE_AS = ""
AUTHORS_SAVE_AS = ""

THEME = ""
DIRECT_TEMPLATES = ["index", "categories", "tags", "archives"]
TEMPLATE_PAGES = {"index.html": "index.html"}
THEME_TEMPLATES_OVERRIDES = ["content/templates"]
