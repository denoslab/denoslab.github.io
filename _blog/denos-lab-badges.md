---
layout: post
title: DENOS Lab Badges
seo_title: The DENOS Lab badge system | DENOS Lab
date: 2026-09-13
display_date: Sep 13, 2026
author: Steve Drew
categories: [Lab life]
mermaid: true
summary: Every member now carries a row of small discs next to their name. Each disc marks something unlocked, from an internship to an accepted paper. The chart shows the order they usually arrive in.
description: The badge system on the DENOS Lab site, what each of the seven badges means, how they are grouped by colour, and the order members usually earn them.
---
{% include badge-sprite.html %}
Every DENOS Lab member carries a row of small discs next to their name. Each disc is a badge for something the member has unlocked. Badges show on the team grid, on the team page, and at the top of every profile. Hover over one to read its name.

## The badges

{% include badge-legend.html %}

## Colour groups

Colour sorts a badge by the kind of achievement behind it. Slate, blue, and navy mark the taught programs. The gold pair marks research output. Green and violet mark contribution to the lab and to the field. Someone holding badges from all three groups has done more than course work.

## Typical progression

<!-- The Mermaid tags below are written as HTML entities on purpose. Kramdown passes
     entities through untouched, and the browser decodes them back to <b>, <i> and
     <br/> in pre.textContent, which is what Mermaid parses. Unescaped tags would be
     parsed as real HTML by the browser and dropped from the diagram source. -->
<figure class="diagram">
<pre class="mermaid">
flowchart TD
    START(["Join DENOS Lab"])
    I["&lt;b&gt;Intern Program Unlocked&lt;/b&gt;&lt;br/&gt;&lt;i&gt;Joined on an internship&lt;/i&gt;"]
    M["&lt;b&gt;MSc Program Unlocked&lt;/b&gt;&lt;br/&gt;&lt;i&gt;Enrolled in the MSc program&lt;/i&gt;"]
    P["&lt;b&gt;PhD Program Unlocked&lt;/b&gt;&lt;br/&gt;&lt;i&gt;Enrolled in the PhD program&lt;/i&gt;"]
    SUB["&lt;b&gt;Paper Submission Unlocked&lt;/b&gt;&lt;br/&gt;&lt;i&gt;Sent a paper to a venue&lt;/i&gt;"]
    ACC["&lt;b&gt;Paper Acceptance Unlocked&lt;/b&gt;&lt;br/&gt;&lt;i&gt;Had a paper accepted&lt;/i&gt;"]
    TCH["&lt;b&gt;Teaching Unlocked&lt;/b&gt;&lt;br/&gt;&lt;i&gt;Taught or assisted a course&lt;/i&gt;"]
    SRV["&lt;b&gt;Service Unlocked&lt;/b&gt;&lt;br/&gt;&lt;i&gt;Reviewed for or helped run a venue&lt;/i&gt;"]

    START --> I
    START -.-> M
    START -.-> P
    I --> M
    M --> P
    I --> SUB
    M --> SUB
    P --> SUB
    SUB --> ACC
    P --> TCH
    P --> SRV

    classDef program fill:#eef2f8,stroke:#24538f,stroke-width:1.5px,color:#122c58
    classDef research fill:#fdf6da,stroke:#a8820a,stroke-width:1.5px,color:#4f3d07
    classDef teaching fill:#edf8f1,stroke:#2b7d52,stroke-width:1.5px,color:#1d5638
    classDef service fill:#f3eefb,stroke:#5c3f9e,stroke-width:1.5px,color:#3c2a68
    classDef terminus fill:#16335f,stroke:#16335f,stroke-width:1.5px,color:#ffffff

    class I,M,P program
    class SUB,ACC research
    class TCH teaching
    class SRV service
    class START terminus
</pre>
<figcaption>The order the badges usually arrive in. Dashed arrows are for members who join straight into a degree program.</figcaption>
</figure>

Most members start at one of the three program badges. Someone who joins for a summer starts at Intern. Someone who arrives for a degree starts further down, along a dashed arrow. Papers are not restricted to a program level, and the lab has interns with accepted papers. Teaching and service usually arrive during a PhD.

## Enrolment badges

Program badges say Program Unlocked because they mark enrolment. A PhD student holds PhD Program Unlocked from the day they register. Finishing the degree is a separate thing and the badge does not track it.

## Badge awards

A badge is one entry in the member's file on the site.

    badges: [intern, paper-accepted]

That line renders four discs. Acceptance implies submission, so the submission badge never has to be listed. The definitions live in one data file. It holds each label, its two colours, and its icon. A new badge needs one entry there and one icon in the sprite.

Most awards come from information the site already holds. A member's role gives the program badge. The publications listed on a profile give paper acceptance.

## Teaching and service awards

Teaching and service are the two badges the site cannot work out on its own. Nobody records who has taught a course or reviewed for a venue. Each is awarded by hand. Lab members who have done either should say so and the badge will be added.
