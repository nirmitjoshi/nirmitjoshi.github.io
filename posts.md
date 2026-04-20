---
title: Posts
description: All posts
permalink: /posts.html
---

# Posts

<ul class="post-list">
{% for post in collections.posts.pages %}<li><a href="{{ post.permalink }}">{{ post.title }}</a> <span class="date">{{ post.published_date | date: "%d %b, %Y" }}</span></li>{% endfor %}
</ul>
