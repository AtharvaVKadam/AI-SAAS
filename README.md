🎙️ AI-SAAS: Real-Time AI Conferencing & Agent Workspace

🚀 Live Demo: https://ai-saas11.vercel.app/

🎥 See it in Action

https://github.com/user-attachments/assets/92702b4f-3280-478b-9ab9-812d43e518de

📖 Overview

AI-SAAS is a full-stack, real-time video conferencing platform engineered to go beyond standard communication. By combining WebRTC media streaming with Live Voice-to-Voice AI Agents, users can host meetings not just with peers, but with custom-instructed AI assistants. The platform aggregates conversational context in real-time, automatically generating meeting summaries, full transcripts, and a queryable RAG (Retrieval-Augmented Generation) chat interface for post-meeting analysis.

✨ Core Features

🤖 Custom Voice AI Agents: Create domain-specific agents (e.g., "Science Tutor") that join video calls and interact via voice in real-time. Fully supports multilingual interactions (English, Marathi, etc.) with dynamic language switching.

📹 Real-Time Video Conferencing: Sub-second latency video/audio rooms with custom pre-join hardware checks.

📝 Smart Transcripts & Summaries: Silently aggregates conversation context, securely processing the audio into Executive Overviews, bulleted action items, and timestamped transcripts.

💬 "Ask AI" Meeting Queries: A built-in RAG chat interface allows users to query their past meetings (e.g., "What was the first question I asked?").

💳 SaaS Billing Architecture: Fully integrated Stripe subscription tiers (Free, Monthly, Yearly) controlling agent limits and recording storage.

🏗️ Systems Architecture

[ Client (Next.js) ] <====== WebRTC (Video/Audio) ======> [ Custom Voice AI Agent ]
          |                                                             |
          | (1. Join Room, Audio Streams, Pre-flight Checks)            |
          +---------------------> [ Real-Time Signaling Server ] <------+
                                                  |
                                    [ LLM Processing Pipeline ] -> Generates Voice/Text
                                                  |
                                          [ Database ] -> Persists Transcripts & Summaries


💻 Tech Stack

Frontend: Next.js (App Router), React, Tailwind CSS

Media & Real-Time: WebRTC, custom media stream hooks

AI & Processing: Voice-to-Text / Text-to-Voice Pipelines, LLM Summarization APIs

Database & Auth: Secure DB for transcript persistence, authentication middleware

Payments: Stripe Checkout & Webhooks

🚀 Getting Started

Prerequisites

Node.js installed locally

Required API Keys (Database, AI Provider, Stripe)

Installation

Clone the repository

git clone [https://github.com/AtharvaVKadam/AI-SAAS.git](https://github.com/AtharvaVKadam/AI-SAAS.git)
cd AI-SAAS


Install Dependencies

npm install


Environment Setup
Create a .env.local file in the root directory:

# Add your specific database, auth, and Stripe keys here
DATABASE_URL=your_db_connection_string
STRIPE_API_KEY=your_stripe_key


Run the Server

npm run dev


Open http://localhost:3000 in your browser.

🧠 Engineering Highlights

Real-Time AI Voice Latency: Optimized the audio streaming pipeline to allow for natural, conversational interruptions and low-latency responses from the AI agent.

Context-Aware RAG Implementation: Engineered the post-meeting dashboard to chunk and embed meeting transcripts, allowing users to query specific moments from hours of conversation instantly.

Webhook Synchronization: Implemented secure Stripe webhooks to keep the database's user subscription state in perfect sync with the payment gateway, unlocking tiered features dynamically.

Built by Atharva Kadam.
