from pybtex.database import Person
from pybtex.style.formatting import unsrt, toplevel
from pybtex.style.template import tag
from pybtex.style.template import (
    field,
    first_of,
    href,
    join,
    names,
    optional,
    optional_field,
    sentence,
    tag,
    together,
    words,
)
from pybtex import richtext


class PelicanStyle(unsrt.Style):
    def __init__(self, site_author="", **kwargs):
        super().__init__(**kwargs)
        self.site_author = Person(site_author)

        # Allows to apply special formatting to a specific author.
        # I've cheated here by just replacing abbr with True
        def format(person, abbr=False):
            if person == self.site_author:
                return tag("strong")[self.name_style.format(person, True)]
            else:
                return self.name_style.format(person, True)

        self.format_name = format

    def format_title(self, e, which_field, as_sentence=True):
        formatted_title = field(which_field)
        return tag("u")[join["“", formatted_title, "”"]]

    # def get_inproceedings_template(self, e):
    #     template = toplevel[
    #         sentence[self.format_names("author")],
    #         self.format_title(e, "title"),
    #         words[
    #             "In",
    #             sentence[
    #                 optional[self.format_editor(e, as_sentence=False)],
    #                 self.format_btitle(e, "booktitle", as_sentence=False),
    #                 self.format_volume_and_series(e, as_sentence=False),
    #                 optional[unsrt.pages],
    #             ],
    #             self.format_address_organization_publisher_date(e),
    #         ],
    #         sentence[optional_field("note")],
    #         self.format_web_refs(e),
    #     ]
    #     return template
