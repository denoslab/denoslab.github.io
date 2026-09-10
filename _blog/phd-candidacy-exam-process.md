---
layout: post
title: PhD Candidacy Exam Process
seo_title: The PhD candidacy exam process, step by step | DENOS Lab
date: 2026-09-09
display_date: Sep 9, 2026
author: Steve Drew
categories: [Graduate studies, PhD milestones]
mermaid: true
lead: The route from initial registration to admission to candidacy in the ENEL doctoral program, drawn as one flow chart.
summary: The department publishes the doctoral candidacy timeline as a table of steps and deadlines. This chart draws it as one path. Every deadline counts months from initial registration.
description: The PhD candidacy process in the ENEL graduate program at the University of Calgary, drawn as a flow chart, with each milestone and its deadline in months from initial registration.
---
Every PhD student in the Department of Electrical and Software Engineering completes the same milestones before becoming a candidate. The department publishes them as a table of steps and deadlines. The chart below draws the same steps as one path. Every deadline counts months from initial registration.

<!-- The Mermaid tags below are written as HTML entities on purpose. Kramdown passes
     entities through untouched, and the browser decodes them back to <b>, <i> and
     <br/> in pre.textContent, which is what Mermaid parses. Unescaped tags would be
     parsed as real HTML by the browser and dropped from the diagram source. -->
<figure class="diagram">
<pre class="mermaid">
flowchart TD
    START(["Initial registration&lt;br/&gt;Month 0"]) --> S1

    S1["&lt;b&gt;1. Supervisory Committee formed&lt;/b&gt;&lt;br/&gt;Supervisor, co-supervisor if there is one,&lt;br/&gt;and two additional members&lt;br/&gt;&lt;i&gt;By month 3&lt;/i&gt;"]
    S2["&lt;b&gt;2. Preliminary Supervisory Committee meeting&lt;/b&gt;&lt;br/&gt;Feedback Form to the ESE Graduate Office,&lt;br/&gt;endorsed by the committee by reply email&lt;br/&gt;&lt;i&gt;Months 5 to 10&lt;/i&gt;"]
    S3["&lt;b&gt;3. Course work complete&lt;/b&gt;&lt;br/&gt;6 units beyond an MSc or 18 units beyond a BSc,&lt;br/&gt;at least half taken inside the department&lt;br/&gt;&lt;i&gt;By month 12&lt;/i&gt;"]
    S4["&lt;b&gt;4. Candidacy Examination Committee formed&lt;/b&gt;&lt;br/&gt;Supervisory Committee, one internal examiner&lt;br/&gt;and one internal or external examiner&lt;br/&gt;&lt;i&gt;By month 16&lt;/i&gt;"]
    S5["&lt;b&gt;5. Written thesis proposal submitted&lt;/b&gt;&lt;br/&gt;Supervisor sends it to the ESE Graduate Office,&lt;br/&gt;which circulates it to the CEC with the evaluation form&lt;br/&gt;&lt;i&gt;By month 18&lt;/i&gt;"]
    EVAL["Each CEC member returns a written evaluation&lt;br/&gt;with a pass or fail recommendation on the&lt;br/&gt;Research Review and the Research Proposal&lt;br/&gt;&lt;i&gt;Within 1 month of receiving the proposal&lt;/i&gt;"]
    GATE{"Written proposal&lt;br/&gt;passed?"}
    REDO["Revise the written proposal&lt;br/&gt;with the Supervisory Committee"]
    S6["&lt;b&gt;6. Field of Study topics assigned&lt;/b&gt;&lt;br/&gt;Oral Exam Topics form to the ESE Graduate Office&lt;br/&gt;at least 3 months before the oral exam&lt;br/&gt;&lt;i&gt;By month 19, may run alongside step 5&lt;/i&gt;"]
    S7["&lt;b&gt;7. Combined Field of Study and&lt;br/&gt;Thesis Proposal Oral Exam&lt;/b&gt;&lt;br/&gt;Supervisor gives the office 3 weeks notice,&lt;br/&gt;the office books the room and a Neutral Chair&lt;br/&gt;&lt;i&gt;Recommended by month 22&lt;/i&gt;"]
    S8["&lt;b&gt;8. Approval for candidacy&lt;/b&gt;&lt;br/&gt;ESE Graduate Office sends the Recommendation for&lt;br/&gt;Admission to Candidacy to Graduate Studies"]
    DONE(["PhD candidate"])

    S1 --> S2 --> S3 --> S4 --> S5 --> EVAL --> GATE
    S4 --> S6
    GATE -->|Pass| S7
    GATE -->|Fail| REDO
    REDO --> S5
    S6 --> S7 --> S8 --> DONE

    classDef milestone fill:#ffffff,stroke:#16335f,stroke-width:1.5px,color:#1b2330
    classDef support fill:#f5f7fb,stroke:#8a94a3,stroke-width:1px,color:#5b6675
    classDef gate fill:#fdf6da,stroke:#c79a06,stroke-width:1.5px,color:#1b2330
    classDef terminus fill:#16335f,stroke:#16335f,stroke-width:1.5px,color:#ffffff

    class S1,S2,S3,S4,S5,S6,S7,S8 milestone
    class EVAL,REDO support
    class GATE gate
    class START,DONE terminus
</pre>
<figcaption>The doctoral candidacy timeline in the ENEL graduate program, with every deadline counted in months from initial registration.</figcaption>
</figure>

## Chart structure

The column down the middle is the required order. Field of Study topics branch off to the side. The Candidacy Examination Committee can assign them as soon as it exists. The form often goes out with the written proposal. The oral exam cannot be scheduled until the written proposal has passed.

## The steps

### 1. Supervisory Committee, by month 3

The student and supervisor appoint a Supervisory Committee within three months of initial registration. The committee is the supervisor, a co-supervisor if there is one, and two more members. It supports both the student and the supervisor. The Faculty of Graduate Studies best practices for supervisory committees and section G.J.5 of the University Calendar set out that role.

### 2. Preliminary Supervisory Committee meeting, months 5 to 10

The supervisor completes the Supervisory Committee Feedback Form and submits it to the ESE Graduate Office. The student sends the meeting forms to the office and copies the committee. Each member endorses the form by reply email. Members may add their own commentary. The department documentation for this step is Section C and C1. Those sections cover the preliminary supervisory committee meeting and the mandatory supervisory committee meeting for all ESE PhD students.

### 3. Course work, by month 12

Students entering with a Master's degree take 6 units at the graduate level beyond that degree. That is one full-course equivalent. Students entering with a Bachelor's degree take 18 units, or three full-course equivalents. At least half of the courses come from the departmental program. Students are advised to choose their courses with their supervisor. Anyone who took Engineering 601 and Engineering 603 during an MSc does not repeat them.

### 4. Candidacy Examination Committee, by month 16

The Candidacy Examination Committee (CEC) adds two examiners to the Supervisory Committee. The first is internal. The second is internal or external. The second examiner may come from inside the department. They must work outside the subject area of the thesis.

### 5. Written thesis proposal, by month 18

The supervisor sends the written thesis proposal to the ESE Graduate Office. The office forwards it to the CEC members with the evaluation form. Each member emails a written evaluation to the Chair and to the office. Each member also recommends pass or fail on the Research Review section and on the Research Proposal section. Members have one month from the day they receive the proposal.

### 6. Field of Study topics, by month 19

The CEC assigns the Field of Study (FoS) topics on the ESE Field of Studies Oral Exam Topics form. The form is on the department [program resources page](https://schulich.ucalgary.ca/electrical-software/programs/graduate/program-resources). It reaches the ESE Graduate Office at least three months before the expected oral exam date. Students and their committee may fill it in at any time. Topics are normally assigned once the committee understands the proposed thesis. The form often goes out with the written proposal.

### 7. Combined Field of Study and Thesis Proposal Oral Exam, recommended by month 22

The supervisor schedules the exam once the written proposal has passed. The supervisor notifies the ESE Graduate Office at least three weeks before the proposed date. That notice gives the office time to arrange logistics and find a Neutral Chair. The supervisor sends the date, the time, and the CEC membership to the office. The office books a room. The office prepares the Oral Exam Notice form for signature by the student, the supervisor, and the Graduate Program Director. The office also prepares the Report of Candidacy Oral Exam.

### 8. Approval for candidacy

The ESE Graduate Office prepares the Recommendation for Admission to Candidacy and sends it to the Faculty of Graduate Studies. The student then becomes a PhD candidate.

## Schedule pressure

CEC evaluations take up to a month. The Field of Study form is due three months before the oral exam. Month 18 for the written proposal and month 22 for the oral exam are tighter than they look. Start drafting the proposal well before month 18.

## Source

This timeline covers the ENEL graduate program in the Department of Electrical and Software Engineering. The University Calendar and the Faculty of Graduate Studies regulations govern. Check the current department [program resources page](https://schulich.ucalgary.ca/electrical-software/programs/graduate/program-resources) before relying on any date here.
