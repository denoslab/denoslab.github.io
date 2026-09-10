---
layout: post
title: PhD Candidacy Exam Process
seo_title: The PhD candidacy exam process, step by step | DENOS Lab
date: 2026-09-09
display_date: Sep 9, 2026
author: Steve Drew
categories: [Graduate studies, PhD milestones]
mermaid: true
lead: The eight steps from a first registration to admission to candidacy in the ENEL doctoral program, drawn as one flow chart.
summary: The department publishes the doctoral candidacy timeline as a table of steps and deadlines. Here it is as a single flow chart, with every deadline measured in months from initial registration and the one hard gate marked.
description: The PhD candidacy process in the ENEL graduate program at the University of Calgary, drawn as a flow chart, with the eight milestones and their deadlines in months from initial registration.
---
Every PhD student in the Department of Electrical and Software Engineering clears the same sequence of milestones before becoming a candidate. The department publishes that sequence as a table of steps and deadlines, which is complete but hard to hold in your head. The flow chart below carries the same information as a single path, with the deadline for each step measured in months from initial registration.

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

## How to read the chart

The spine down the middle is the required order. Two things sit off it. Field of Study topics can be assigned as soon as the Candidacy Examination Committee exists and the form is often circulated alongside the written proposal, so it runs in a parallel branch. The written thesis proposal is the single gate in the process, because the oral examination can only be scheduled once the proposal has passed.

## The eight steps

### 1. Supervisory Committee, by month 3

Within three months of initial registration the student and supervisor appoint a Supervisory Committee made up of the supervisor, a co-supervisor if there is one, and two additional members. The committee supports both the student and the supervisor. The Faculty of Graduate Studies best practices for supervisory committees and section G.J.5 of the University Calendar describe what that support covers.

### 2. Preliminary Supervisory Committee meeting, months 5 to 10

The supervisor completes the Supervisory Committee Feedback Form and submits it to the ESE Graduate Office. The student sends the meeting forms to the office and copies the committee, and each member endorses the form by reply email, adding commentary if they want to. The department documentation for this step is the section covering the preliminary supervisory committee meeting and the mandatory supervisory committee meeting for all ESE PhD students.

### 3. Course work, by month 12

Students entering with a Master's degree take 6 units, one full-course equivalent, at the graduate level beyond that degree. Students entering with a Bachelor's degree take 18 units, three full-course equivalents. In both cases at least half of the courses are taken inside the departmental program, and students are advised to choose them with their supervisor. Anyone who completed Engineering 601 and Engineering 603 during an MSc does not take those courses a second time.

### 4. Candidacy Examination Committee, by month 16

The Candidacy Examination Committee (CEC) is the Supervisory Committee plus two more examiners, one internal and one internal or external. The second examiner may come from inside the department as long as they work outside the subject area of the thesis.

### 5. Written thesis proposal, by month 18

The supervisor sends the written thesis proposal to the ESE Graduate Office, which forwards it to the CEC members together with the evaluation form. Each member then emails the Chair and the office a written evaluation and a pass or fail recommendation on the Research Review section and on the Research Proposal section, within one month of receiving the proposal.

### 6. Field of Study topics, by month 19

The CEC assigns the Field of Study (FoS) topics on the ESE Field of Studies Oral Exam Topics form, available from the department [program resources page](https://schulich.ucalgary.ca/electrical-software/programs/graduate/program-resources). The completed form goes to the ESE Graduate Office at least three months before the expected date of the combined oral exam. Students and their committee may fill it in at any time, though topics are normally assigned once the committee understands the proposed thesis, which is why the form is often circulated alongside the written proposal.

### 7. Combined Field of Study and Thesis Proposal Oral Exam, by month 22

Once the written proposal has passed, the supervisor schedules the examination and notifies the ESE Graduate Office at least three weeks before the proposed date, which gives the office time to arrange logistics and find a Neutral Chair. The supervisor sends the date, the time, and the CEC membership to the office. The office books a room, prepares the Oral Exam Notice form for signature by the student, the supervisor, and the Graduate Program Director, and prepares the Report of Candidacy Oral Exam.

### 8. Approval for candidacy

The ESE Graduate Office prepares the Recommendation for Admission to Candidacy and sends it to the Faculty of Graduate Studies. That completes the process and the student becomes a PhD candidate.

## The one hard gate

The oral examination can only be scheduled after the written thesis proposal has passed. Everything above that gate is a deadline you work toward, and everything below it waits on the CEC evaluations coming back. Those evaluations take up to a month, and the Field of Study form is due three months before the oral exam, so month 18 for the written proposal and month 22 for the oral exam are tighter than they look. The practical advice is to start drafting the proposal well before month 18.

## Where this comes from

This is the current candidacy timeline for the ENEL graduate program in the Department of Electrical and Software Engineering. The University Calendar and the Faculty of Graduate Studies regulations govern, so check the current department [program resources page](https://schulich.ucalgary.ca/electrical-software/programs/graduate/program-resources) before relying on any date here.
