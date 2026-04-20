---
title: Home
description: nirmit's blog
permalink: /
---

I am Nirmit. This blog is where I document my understanding of information theory, low-level systems and life.

<p>Reach me on <a href="https://x.com/nirmitjoshi_" target="_blank" rel="noopener noreferrer">X</a> (DMs open)</p>
<p>Links: <a href="https://github.com/nirmitjoshi" target="_blank" rel="noopener noreferrer">GitHub</a> <a href="">Mail</a></p>

## Recent Posts

<ul class="post-list">
{% for post in collections.posts.pages limit:5 %}<li><a href="{{ post.permalink }}">{{ post.title }}</a> <span class="date">{{ post.published_date | date: "%d %b, %Y" }}</span></li>{% endfor %}
</ul>
