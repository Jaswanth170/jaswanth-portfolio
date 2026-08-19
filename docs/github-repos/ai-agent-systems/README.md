# AI Agent Systems

> **Practical experiments exploring how autonomous AI agents can reason, use tools, and execute multi-step tasks.**

[![Status](https://img.shields.io/badge/Status-EXPERIMENT-4F8CFF?style=flat-square)](#status)
[![Stack](https://img.shields.io/badge/Stack-Python_|_LLMs_|_MCP-3776AB?style=flat-square)](#technology)

---

## 📌 Overview

**AI Agent Systems** is a research and prototyping project investigating tool-augmented AI agents built in Python. The framework explores ReAct (Reasoning + Acting) execution loops, Model Context Protocol (MCP) tool integration, and structured output verification.

---

## 🎯 Problem & Solution

- **Problem**: Standard LLMs cannot take direct action or interact dynamically with external software tools and APIs.
- **Solution**: A Python agent architecture utilizing MCP tool bindings that allows models to reason about tasks, select appropriate tools, inspect environment outputs, and complete goals autonomously.

---

## 🏗️ ReAct Agent Loop

```text
  [ Input Goal ] ──> [ Reason (Plan Step) ] ──> [ Select Tool (MCP) ]
                              ▲                               │
                              │                               ▼
                      [ Evaluate Output ] <── [ Execute Action (CLI/API) ]
```

---

## ⚙️ Key Experiments

- **MCP Server Bindings**: Interfacing language models with local file system tools and CLI runners.
- **ReAct Execution Loop**: Benchmarking model decision accuracy across multi-step goals.
- **Structured Output Verification**: Enforcing strict JSON schema responses to avoid agent state corruption.

---

## 🛠️ Technology Stack

- **Language**: Python 3.11+
- **Agent Protocols**: Model Context Protocol (MCP)
- **AI Libraries**: Anthropic API, OpenAI API, Pydantic
- **Testing**: Pytest

---

## 🧠 What I Learned

> *"Agent loops require strict max-iteration caps to prevent infinite tool loops when edge-case errors occur. Decoupling the tool discovery interface from agent logic makes adding new tools fast and maintainable."*
