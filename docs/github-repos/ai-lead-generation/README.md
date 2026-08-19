# AI Lead Generation System

> **An automated lead-generation workflow that captures, processes, qualifies, and routes incoming leads using AI and workflow automation.**

[![Status](https://img.shields.io/badge/Status-BUILT-emerald?style=flat-square)](#status)
[![Stack](https://img.shields.io/badge/Stack-n8n_|_AI_|_APIs-4F8CFF?style=flat-square)](#technology)

---

## 📌 Overview

The **AI Lead Generation System** automates the entire lead processing pipeline. Incoming lead submissions from webhooks or custom form endpoints are captured in real-time, evaluated by language models using structured criteria, scored, and immediately routed to team endpoints (CRM / Slack).

---

## 🎯 Problem & Solution

- **Problem**: Manual lead qualification is slow, repetitive, and introduces human error and delayed response times.
- **Solution**: An automated n8n pipeline integrated with AI models that evaluates lead fit within seconds and routes qualified prospects automatically.

---

## 🏗️ Workflow Architecture

```text
  [ Incoming Webhook Payload ]
               │
               ▼
   [ n8n Workflow Trigger ]
               │
               ▼
    [ AI Lead Scoring Node ] ── (Evaluates against target criteria via LLM)
               │
               ▼
    [ JSON Schema Verification ]
               │
               ▼
 ┌─────────────┴─────────────┐
 ▼                           ▼
[ Qualified: Route to CRM ]  [ Low Fit: Archive & Notify ]
```

---

## ⚙️ Key Features

- **Webhook Ingestion**: Real-time capture of form submissions and lead payloads.
- **LLM Qualification**: Structured prompt evaluation scoring lead intent, company size, and budget alignment.
- **JSON Schema Validation**: Guarantees downstream payload formatting before database insertion.
- **Instant Routing**: Dispatches alerts to Slack channels or CRM endpoints automatically.

---

## 🛠️ Technology Stack

- **Workflow Orchestration**: n8n
- **AI Models**: OpenAI GPT-4 / Claude API
- **Integrations**: Google APIs, Webhooks, REST Endpoints
- **Data Format**: JSON / Webhook payloads

---

## 🧠 What I Learned

> *"Reliable workflow automation depends as much on robust error handling and webhook retry logic as it does on prompt quality. Structuring LLM outputs into strict JSON schemas prevents downstream API routing failures."*
