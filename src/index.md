---
title: "Home page"
description: "Optional for SEO and page summary."
layout: "base.njk"
---

This is the home page by the {{ meta.authorName }}.

<nav aria-label="Primary Navigation">
<ul>
{% for page in collections.pages %}
<li><a href="{{ page.url }}"> {{ page.data.title }} </a></li>
{% endfor %}
</ul>
</nav>
