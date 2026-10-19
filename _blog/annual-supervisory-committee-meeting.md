---
layout: post
title: The Annual Supervisory Committee Meeting
seo_title: The annual supervisory committee meeting for ESE PhD students | DENOS Lab
date: 2026-10-18
display_date: Oct 18, 2026
author: Steve Drew
categories: [Graduate studies, PhD milestones]
mermaid: true
summary: Every ESE PhD student holds one supervisory committee meeting per registration year and files a feedback form afterwards. The reporting window depends on the term you started in. The chart draws the cycle.
description: The annual mandatory supervisory committee meeting for PhD students in the Department of Electrical and Software Engineering at the University of Calgary, with the reporting windows by start term, the student's responsibilities, and how the date feeds the Annual Progress Report.
---
Every PhD student in the Department of Electrical and Software Engineering holds a Supervisory Committee (SC) meeting once per registration year. The ESE Graduate Office reminded students of this requirement in a note on September 22, 2026, with the feedback form and its guidelines attached. The same documents sit on the department [program resources page](https://schulich.ucalgary.ca/electrical-software/programs/graduate/program-resources). This post lays out what the requirement asks of a student and when.

The meeting is not the same as the [Preliminary Supervisory Committee meeting](/blog/phd-candidacy-exam-process/) or the candidacy exam. Those happen once. The annual meeting repeats every year the student is registered, including after candidacy, until the thesis is defended.

<!-- The Mermaid tags below are written as HTML entities on purpose. Kramdown passes
     entities through untouched, and the browser decodes them back to <b>, <i> and
     <br/> in pre.textContent, which is what Mermaid parses. Unescaped tags would be
     parsed as real HTML by the browser and dropped from the diagram source. -->
<figure class="diagram">
<pre class="mermaid">
flowchart TD
    START(["Registration year opens&lt;br/&gt;on the anniversary of your start term"])
    S1["&lt;b&gt;1. Schedule the meeting&lt;/b&gt;&lt;br/&gt;Work with your supervisor to book a date&lt;br/&gt;inside your reporting window"]
    S2["&lt;b&gt;2. Prepare&lt;/b&gt;&lt;br/&gt;Know what the committee expects&lt;br/&gt;before and during the meeting"]
    S3["&lt;b&gt;3. Attend and take notes&lt;/b&gt;&lt;br/&gt;Capture every comment and recommendation&lt;br/&gt;from each member"]
    S4["&lt;b&gt;4. Complete the feedback form&lt;/b&gt;&lt;br/&gt;Record the committee's feedback on the template,&lt;br/&gt;ask individual members if anything is unclear"]
    S5["&lt;b&gt;5. Submit the form&lt;/b&gt;&lt;br/&gt;Send it to every committee member&lt;br/&gt;and to the ESE Graduate Office"]
    APR["&lt;b&gt;Annual Progress Report&lt;/b&gt;&lt;br/&gt;Opened by FGS on May 1 in the student and faculty portals,&lt;br/&gt;the meeting date is entered here"]
    DONE(["Reporting window closes"])

    START --> S1 --> S2 --> S3 --> S4 --> S5 --> DONE
    S5 -.->|date reported in| APR
    DONE -.->|next year| START

    classDef milestone fill:#ffffff,stroke:#16335f,stroke-width:1.5px,color:#1b2330
    classDef support fill:#f5f7fb,stroke:#8a94a3,stroke-width:1px,color:#5b6675
    classDef terminus fill:#16335f,stroke:#16335f,stroke-width:1.5px,color:#ffffff

    class S1,S2,S3,S4,S5 milestone
    class APR support
    class START,DONE terminus
</pre>
<figcaption>The annual supervisory committee meeting cycle for ESE PhD students. The loop runs once per registration year.</figcaption>
</figure>

## When the meeting has to happen

The requirement is one meeting per registration year, and the year is counted from the term in which the student first registered. The meeting must fall inside that window.

| Original start term | Reporting window |
| --- | --- |
| Fall | September 1 to the end of August |
| Winter | January 1 to December 31 |
| Spring | May 1 to April 30 |
| Summer | July 1 to June 30 |

A Fall starter who meets the committee in October 2026 has satisfied the 2026 to 2027 year and needs another meeting before the end of August 2027. Waiting until the last weeks of the window is risky, since four or five busy people have to be in the same room or call. Book early in the window and the deadline takes care of itself.

## What the student is responsible for

The department puts the responsibility for the meeting on the student, with the supervisor's help. The list in the office note comes down to five things.

### 1. Schedule it

The student works with the supervisor to set up the meeting before the end of the reporting period. In practice this means proposing dates to the committee members, finding one that works for everyone, and booking the room or the call.

### 2. Know what is expected

The student should have a clear understanding of what the committee expects before the meeting and during it. Ask the supervisor what to present and how long to speak. A short slide deck covering progress since the last meeting, results, problems, and the plan for the coming year is the usual format.

### 3. Participate and take notes

The student presents, answers questions, and writes down the feedback. The notes are the raw material for the form, so capture who said what rather than a general impression.

### 4. Complete the feedback form

After the meeting the student fills in the feedback form attached to the office note, recording each member's comments and recommendations. If a comment is unclear, the student may follow up with that member individually before finalising the form.

### 5. Submit it

The completed form goes to every member of the Supervisory Committee and to the ESE Graduate Office at ese.gradstudies@ucalgary.ca. The office keeps it on the student's file.

## How the date reaches the Annual Progress Report

The Faculty of Graduate Studies (FGS) opens the Annual Progress Report (APR) on May 1 each year through the student and faculty portals. The report asks for the date of the supervisory committee meeting held in the reporting year. The meeting therefore has to have happened, and its form filed, so that the date can be entered when the APR comes around.

## The preliminary meeting goes on the same form

The office note adds one instruction for new students. The date of the Preliminary Supervisory Committee (PSC) meeting is also recorded on the feedback form once that meeting has taken place. The PSC meeting is normally held within the first ten months of PhD studies and is an introductory discussion of the proposed research area between the student and the committee. Item C of the [ENEL Doctoral Candidacy Requirements](https://schulich.ucalgary.ca/sites/default/files/teams/11/ENEL_program-candidacy-requirements_July%204%2C%202024.pdf) describes it, and the [candidacy post](/blog/phd-candidacy-exam-process/) on this blog places it at months 5 to 10 of the timeline. For a first-year student the PSC meeting usually doubles as the first annual meeting.

## How DENOS Lab handles it

Lab members should raise the committee meeting with Steve at the start of each registration year and settle a date early, then send the draft feedback form to him for a read before it goes to the committee. Keep a copy of every year's form. The set becomes a useful record of how the project moved when the thesis is being written.

## Source

This post summarises the September 22, 2026 note from the ESE Graduate Program to PhD students, together with the attached Mandatory Supervisory Committee Meeting feedback form and guidelines. The University Calendar and the Faculty of Graduate Studies regulations govern. Check the current department [program resources page](https://schulich.ucalgary.ca/electrical-software/programs/graduate/program-resources) before relying on any date here.
