---
layout: post
title: PhD Thesis Defense Checklist
seo_title: Tasks before and after your thesis oral exam | DENOS Lab
date: 2026-09-10
display_date: Sep 10, 2026
author: Steve Drew
categories: [Graduate studies, PhD milestones]
mermaid: true
summary: Tasks attached to the thesis oral exam, before and after the date. Some are date sensitive. The chart places each one against the exam date.
description: What a PhD student in the ENEL graduate program at the University of Calgary has to do before and after the thesis oral exam, with each task placed against the exam date.
---
Your thesis oral exam carries tasks before and after the date. Some are date sensitive. Skip any you have already completed. The chart below places each task against the exam date.

<!-- The Mermaid tags below are written as HTML entities on purpose. Kramdown passes
     entities through untouched, and the browser decodes them back to <b>, <i> and
     <br/> in pre.textContent, which is what Mermaid parses. Unescaped tags would be
     parsed as real HTML by the browser and dropped from the diagram source. -->
<figure class="diagram">
<pre class="mermaid">
flowchart TD
    START(["Exam date confirmed"])
    N1["&lt;b&gt;Right away&lt;/b&gt;&lt;br/&gt;Apply for graduation in Student Centre&lt;br/&gt;Send the Graduate Student Info Sheet to the office"]
    N2["&lt;b&gt;Before the exam date&lt;/b&gt;&lt;br/&gt;Complete the second Research Seminar Presentation&lt;br/&gt;Check the thesis against the Thesis Guidelines"]
    N3["&lt;b&gt;3 weeks before&lt;/b&gt;&lt;br/&gt;Email the thesis to every examiner&lt;br/&gt;Copy the ESE Graduate Office"]
    N4["&lt;b&gt;1 day before&lt;/b&gt;&lt;br/&gt;Email the slides to every examiner"]
    HY["Hybrid exam&lt;br/&gt;&lt;i&gt;Set up the remote connection before the presentation starts&lt;/i&gt;"]
    EXAM(["&lt;b&gt;Oral exam&lt;/b&gt;&lt;br/&gt;15 minute presentation"])
    A1["&lt;b&gt;Revisions&lt;/b&gt;&lt;br/&gt;Review the FGS thesis submission instructions&lt;br/&gt;Make the revisions the committee asked for"]
    A2["&lt;b&gt;Signatures&lt;/b&gt;&lt;br/&gt;Thesis Approval from the examining committee&lt;br/&gt;Notice of Completion from the supervisor&lt;br/&gt;Thesis withhold form if it applies"]
    A3["&lt;b&gt;Office approval&lt;/b&gt;&lt;br/&gt;Signed documents to the ESE Graduate Office&lt;br/&gt;It obtains the GPD signature and returns them"]
    A4["&lt;b&gt;Thesis submission&lt;/b&gt;&lt;br/&gt;Follow the FGS instructions"]
    A5["&lt;b&gt;Desk and keys&lt;/b&gt;&lt;br/&gt;Clear your space and arrange returning your keys"]
    DONE(["Records cleared"])

    START --> N1 --> N2 --> N3 --> N4 --> EXAM
    HY -.-> EXAM
    EXAM --> A1 --> A2 --> A3 --> A4 --> A5 --> DONE

    classDef milestone fill:#ffffff,stroke:#16335f,stroke-width:1.5px,color:#1b2330
    classDef support fill:#f5f7fb,stroke:#8a94a3,stroke-width:1px,color:#5b6675
    classDef terminus fill:#16335f,stroke:#16335f,stroke-width:1.5px,color:#ffffff

    class N1,N2,N3,N4,A1,A2,A3,A4,A5 milestone
    class HY support
    class START,EXAM,DONE terminus
</pre>
<figcaption>Tasks attached to the thesis oral exam, ordered by when they are due.</figcaption>
</figure>

## Tasks before the exam

### Graduation application

Apply for graduation through Student Centre right away. The portal is not always open. Monitor Student Centre and apply as soon as it opens again.

### Graduate Student Info Sheet

Complete the Graduate Student Info Sheet and send it to the ESE Graduate Office right away.

### Research seminar

Complete your second Research Seminar Presentation before the exam date if you still owe one. Schedule it according to the seminar guidelines.

### Thesis format

Check your thesis against the Thesis Guidelines.

### Thesis distribution

Email your thesis to every examiner three weeks before the exam date. Copy the ESE Graduate Office.

### Presentation slides

Email your slides to every examiner one day before the exam.

### Exam day

The presentation is 15 minutes. For a hybrid exam, arrive early enough to set up the connection with examiners attending remotely.

## Tasks after the exam

### Submission forms

Review the FGS thesis submission instructions. They list the forms to prepare or obtain from your supervisor.

### Signed documents

Make the revisions the committee asked for. Then contact your supervisor to arrange the signatures. The examining committee signs the Thesis Approval. Your supervisor completes and signs the Notice of Completion. A thesis withhold form applies in some cases. Attach the supporting document for the option you select on that form.

### Office approval

Send the signed documents to the ESE Graduate Office. The office obtains the Graduate Program Director's signature and returns the documents to you.

### Thesis submission

Follow the FGS instructions to complete your thesis submission.

### Desk and keys

Clear your assigned desk or office space after you submit the thesis to FGS. Contact the department office to arrange returning your keys and clearing your records.

## Source

This checklist covers the ENEL graduate program in the Department of Electrical and Software Engineering. Faculty of Graduate Studies rules govern thesis submission. Check the current department [program resources page](https://schulich.ucalgary.ca/electrical-software/programs/graduate/program-resources) and the current FGS instructions before relying on any step here.
