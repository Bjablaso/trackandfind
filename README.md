# TrackAndFind

**TrackAndFind** is an AI-powered job discovery, application tracking,
and career workflow platform. It combines a Tinder-style job swipe
experience with AI-assisted job matching, resume tailoring, application
tracking, scheduling, and specialized career agents.

The goal is simple: **reduce the amount of time spent searching,
filtering, tailoring, and tracking jobs while keeping the user in
control of important application decisions.**

------------------------------------------------------------------------

## Core Idea

TrackAndFind separates the job-search workflow into two major flows:

### 1. Background Job Processing

Jobs are collected and processed before they reach the swipe interface.

``` text
Job Sources / Scraper
        |
        v
Job Ingestion API
        |
        v
AI Job Screener
        |
        +---- Low Match ----> Discard / Archive
        |
        v
High Match
        |
        v
Resume Tailoring Pipeline
        |
        v
Database
        |
        v
Ranked Job Stack
```

The AI screener compares each job description against the user's master
resume, generates a match score, and determines whether the job should
enter the user's job stack.

### 2. User Interaction

The frontend loads already-ranked jobs from the backend.

``` text
Ranked Job Stack
       |
       v
 Swipe Job Card
   /         \
LEFT         RIGHT
Pass       Interested
 |             |
 v             v
Archive     Save / Apply
               |
               v
        Application Workflow
```

This keeps the swipe experience fast because expensive AI processing
happens outside the immediate UI interaction.

------------------------------------------------------------------------

# Features

## Dashboard

The dashboard gives the user a high-level view of their job search.

Planned information includes:

-   Total applications
-   Interviews
-   Assessments
-   Offers
-   Saved jobs
-   Application trends
-   Application success rate
-   Recent activity
-   Upcoming interviews
-   Job stack preview
-   AI recommendations

------------------------------------------------------------------------

## Jobs

The Jobs page is the primary discovery workspace.

Jobs are presented as a **stack of swipeable cards** ranked by AI match
score.

Each card can display:

-   Company
-   Job title
-   Location
-   Remote / hybrid / onsite status
-   Employment type
-   Salary
-   Required skills
-   Job description
-   Date posted
-   Resume match score
-   Application type
-   Saved status

### Swipe Actions

``` text
Swipe Left  -> Pass / Archive
Maybe       -> Keep for later
Swipe Right -> Interested
```

Users can also manually open the full job description or save a job
without applying.

Tabs may include:

``` text
Swipe | Applied | Saved | Archived
```

------------------------------------------------------------------------

## Schedule

The Schedule page acts as the job-search calendar.

Users can organize:

-   Technical interviews
-   Recruiter calls
-   Phone screens
-   Assessments
-   Application deadlines
-   Follow-ups
-   Resume review sessions
-   Job-search blocks
-   Personal career tasks

Supported views can include:

``` text
Week | Month | Agenda | Timeline
```

Events should be color-coded by type so the user can quickly understand
their upcoming workload.

------------------------------------------------------------------------

## AI Agents

TrackAndFind uses specialized AI agents rather than treating AI as one
generic chatbot.

### Tracky

**Tracky** is the main AI career assistant and coordinates the user's
AI-powered job-search tools.

Example capabilities:

-   Find matching jobs
-   Explain job matches
-   Review resumes
-   Prepare interview questions
-   Surface application activity
-   Recommend next actions

### Specialized Agents

  Agent                 Responsibility
  --------------------- ---------------------------------------------------
  Job Finder            Finds and ranks relevant job opportunities
  Resume Optimizer      Tailors resume content to specific jobs
  Interview Coach       Generates interview preparation and practice
  Application Tracker   Tracks applications and follow-up activity
  Market Insights       Provides job-market, salary, and company insights

Agents can be individually enabled or disabled.

------------------------------------------------------------------------

## Settings

Settings controls the user's TrackAndFind experience.

### Job Preferences

Users can configure:

-   Desired roles
-   Locations
-   Remote preferences
-   Experience level
-   Salary range
-   Skills
-   Job types

### AI & Automation

Controls may include:

-   AI job recommendations
-   Automatic job screening
-   Resume tailoring
-   Application assistance
-   Agent permissions

### Notifications

Users can control notifications for:

-   New job matches
-   Application updates
-   Interview reminders
-   Daily job digest
-   Career tips

### Other Settings

-   Appearance
-   Account
-   Security
-   Data export
-   Integrations
-   Application preferences

------------------------------------------------------------------------

# AI Job Screening

The first AI layer acts as a gatekeeper.

Each incoming job is compared with the user's master resume.

Example structured result:

``` json
{
  "is_good_match": true,
  "match_score": 88,
  "application_type": "External",
  "matching_skills": [
    "Java",
    "Spring Boot",
    "REST APIs"
  ],
  "missing_skills": [
    "Kubernetes"
  ]
}
```

A configurable threshold can determine whether a job enters the swipe
stack.

Example:

``` text
0 - 74   -> Archive
75 - 84  -> Good Match
85 - 94  -> Strong Match
95 - 100 -> Excellent Match
```

The score should remain an **AI recommendation**, not a guarantee that
the user qualifies or will receive an interview.

------------------------------------------------------------------------

# Resume Tailoring

TrackAndFind can maintain a master resume and create a tailored version
for selected jobs.

The resume pipeline should:

1.  Read the master resume.
2.  Read the target job description.
3.  Identify relevant skills and keywords.
4.  Rewrite only supported resume content.
5.  Preserve factual experience.
6.  Preserve the resume's LaTeX structure and layout.
7.  Compile the tailored LaTeX document into PDF.
8.  Associate the generated resume with the job record.

The AI must **never invent experience, certifications, education,
skills, or accomplishments**.

------------------------------------------------------------------------

# Proposed Technology Stack

## Frontend

``` text
React / Next.js
TypeScript
Tailwind CSS
Framer Motion
```

Framer Motion can handle the card dragging, rotation, swipe animations,
and transitions.

## Backend

``` text
Python
FastAPI
Agno
Pydantic
SQLModel
```

## Database

Start locally with:

``` text
SQLite
```

The application can later migrate to:

``` text
PostgreSQL
```

## AI

Agno can orchestrate specialized agents and structured AI outputs.

The model provider should remain configurable rather than coupling the
project permanently to one model.

## Resume Generation

``` text
LaTeX
pdflatex
```

A master `.tex` template can be treated as a frozen structure while AI
modifies only approved content sections.

------------------------------------------------------------------------

# Suggested Project Architecture

``` text
TrackAndFind/
|
+-- frontend/
|   |
|   +-- src/
|       +-- components/
|       +-- pages/
|       +-- features/
|       |   +-- dashboard/
|       |   +-- jobs/
|       |   +-- schedule/
|       |   +-- agents/
|       |   +-- settings/
|       +-- services/
|       +-- types/
|
+-- backend/
|   |
|   +-- app/
|       +-- agents/
|       |   +-- screener.py
|       |   +-- tailor.py
|       |   +-- interview.py
|       |   +-- schemas.py
|       |
|       +-- db/
|       |   +-- database.py
|       |   +-- models.py
|       |
|       +-- tools/
|       |   +-- compiler.py
|       |
|       +-- services/
|       +-- api/
|       +-- core/
|       +-- main.py
|
+-- assets/
|   +-- resumes/
|
+-- master_resume/
|   +-- resume.tex
|
+-- README.md
```

------------------------------------------------------------------------

# Core Job Model

A job record will eventually need information similar to:

``` text
id
company
title
description
location
salary
job_url
source
match_score
application_type
status
resume_path
date_found
date_applied
follow_up_date
```

Possible job states:

``` text
UNSWIPED
SAVED
ARCHIVED
INTERESTED
APPLYING
APPLIED
ASSESSMENT
INTERVIEWING
OFFER
REJECTED
WITHDRAWN
```

------------------------------------------------------------------------

# Initial API Design

Example backend routes:

``` http
POST /api/jobs/ingest
GET  /api/jobs/stack
GET  /api/jobs/{id}

POST /api/jobs/{id}/pass
POST /api/jobs/{id}/save
POST /api/jobs/{id}/interested

GET  /api/applications
PATCH /api/applications/{id}

GET  /api/schedule
POST /api/schedule

POST /api/agents/resume-review
POST /api/agents/interview-prep
```

The frontend should communicate with TrackAndFind through the backend
API rather than calling an LLM directly.

------------------------------------------------------------------------

# Design System

TrackAndFind uses a dark AI/SaaS visual identity.

## Colors

  Purpose           Color
  ----------------- -----------
  App Background    `#080B0F`
  Sidebar           `#0B0E13`
  Card Background   `#11151B`
  Elevated Card     `#171B22`
  Border            `#252A33`
  Primary Purple    `#8B5CF6`
  Purple Hover      `#A855F7`
  Purple Glow       `#6D28D9`
  Primary Text      `#F5F5F7`
  Secondary Text    `#A1A1AA`
  Muted Text        `#71717A`
  Success           `#22C55E`
  Danger            `#EF4444`
  Warning           `#F59E0B`
  Information       `#3B82F6`

## Typography

Primary font:

``` text
Inter, system-ui, sans-serif
```

## Visual Style

-   Charcoal-black surfaces
-   Electric-purple brand accents
-   Rounded cards
-   Thin muted borders
-   Subtle shadows
-   Restrained purple glow
-   Clean spacing
-   High-contrast typography
-   Minimal but expressive status colors

------------------------------------------------------------------------

# Safety and User Control

Application automation should be designed carefully.

TrackAndFind should:

-   Never fabricate resume information.
-   Never submit an application using information the user has not
    approved.
-   Keep application status auditable.
-   Store the source URL for each job.
-   Allow generated resumes to be reviewed.
-   Provide clear control over AI agents and automation.
-   Avoid duplicate applications.
-   Require explicit user approval before irreversible submission
    actions unless the user intentionally enables an approved automation
    mode.

The initial version should prioritize **AI assistance and workflow
automation** over fully autonomous application submission.

------------------------------------------------------------------------

# Development Roadmap

## Phase 1 --- Foundation

-   [ ] Create frontend project
-   [ ] Create FastAPI backend
-   [ ] Configure SQLite
-   [ ] Define Job model
-   [ ] Create seed/mock job data
-   [ ] Build API connection

## Phase 2 --- Job Swipe System

-   [ ] Build job card component
-   [ ] Build card stack
-   [ ] Implement drag/swipe gestures
-   [ ] Implement Pass
-   [ ] Implement Maybe / Save
-   [ ] Implement Interested
-   [ ] Persist card state

## Phase 3 --- AI Screening

-   [ ] Add master resume
-   [ ] Create screening schema
-   [ ] Build Job Finder / Screener agent
-   [ ] Generate match scores
-   [ ] Filter low-match jobs
-   [ ] Sort swipe stack by match score

## Phase 4 --- Resume Engine

-   [ ] Add LaTeX resume template
-   [ ] Freeze structural formatting
-   [ ] Build Resume Optimizer
-   [ ] Compile `.tex` to PDF
-   [ ] Store generated resume path
-   [ ] Add resume preview/review

## Phase 5 --- Job Tracker

-   [ ] Applied jobs
-   [ ] Interview stage
-   [ ] Assessments
-   [ ] Offers
-   [ ] Rejections
-   [ ] Follow-up dates
-   [ ] Dashboard analytics

## Phase 6 --- Schedule

-   [ ] Calendar UI
-   [ ] Interview events
-   [ ] Application deadlines
-   [ ] Follow-up reminders
-   [ ] Job-search time blocks

## Phase 7 --- AI Agent Workspace

-   [ ] Tracky assistant
-   [ ] Job Finder
-   [ ] Resume Optimizer
-   [ ] Interview Coach
-   [ ] Application Tracker
-   [ ] Market Insights
-   [ ] Agent activity log

## Phase 8 --- Integrations & Automation

-   [ ] Job-source ingestion
-   [ ] Email/calendar integration
-   [ ] Notifications
-   [ ] External application launcher
-   [ ] Optional browser-assisted application workflows

------------------------------------------------------------------------

# MVP

The first usable TrackAndFind release does **not** need every AI
feature.

The MVP is:

``` text
Job Data
   |
   v
FastAPI
   |
   v
AI Match Score
   |
   v
SQLite
   |
   v
Swipeable Job Stack
   |
   +--> Pass
   +--> Save
   +--> Interested
             |
             v
       Application Tracker
```

Once this loop works reliably, resume tailoring, scheduling, agents,
integrations, and deeper automation can be added without redesigning the
core application.

------------------------------------------------------------------------

# Project Vision

TrackAndFind is not intended to be another job-board clone.

It is a **personal AI job-search workspace** that turns a fragmented
process---

``` text
Search
Filter
Compare
Tailor
Apply
Track
Follow Up
Interview
```

---into one connected workflow.

The final experience should feel less like browsing hundreds of listings
and more like working through a curated queue of opportunities with an
AI career team operating behind the scenes.

------------------------------------------------------------------------

## Status

**Current Status:** Design and architecture phase.

Initial UI concepts have been established for:

-   Dashboard
-   Jobs / Swipe Stack
-   Schedule
-   AI Agents
-   Settings

Next engineering milestone: **build the database + job model, expose the
first FastAPI job endpoints, and connect them to a functional swipe-card
frontend.**
