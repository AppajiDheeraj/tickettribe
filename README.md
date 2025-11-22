# TickerTribe - Daily Stock Prediction Platform

<div align="center">
<img src="public/logo.svg" width="120" alt="TickerTribe Logo" />

### Predict. Compete. Climb the Leaderboard.

[![Built with](https://img.shields.io/badge/Built%20with-Next.js%20+%20TypeScript-blue)](https://nextjs.org/)
[![Realtime](https://img.shields.io/badge/Realtime-Supabase-green)](https://supabase.com/)
[![Stock%20API](https://img.shields.io/badge/Stock%20Data-External%20API-orange)]()
[![Auth](https://img.shields.io/badge/Auth-Google%20OAuth-red)]()

</div>

---

## Overview

TickerTribe is a competitive social platform where groups of users predict the daily movement of selected tech stocks and compete on a real-time leaderboard.

Users submit predictions on whether each stock will close higher or lower than its opening price. Predictions lock at 7:00 PM IST, results are auto-scored after the US market closes (2:30 AM IST), and tribe leaderboards are updated automatically.

---

## Key Features

### Daily Stock Predictions

* Predict higher or lower for selected stocks.
* Editable before 7 PM IST.
* Hidden from other users until locking.

### Prediction Locking

* Automatically locks at 7 PM IST.
* Captures reference prices.
* Reveals predictions to tribe members after lock.

### Automated Scoring (2:30 AM IST)

* Fetches official closing prices.
* Scoring system: +1 for correct, -1 for incorrect, 0 for no prediction.
* Updates leaderboard automatically.

### Tribe System

* Users can create or join private tribes.
* Invitation via a 6-digit tribe code.
* One tribe per user.

### Real-Time Leaderboards

* Updates instantly after scoring.
* Tracks daily and cumulative performance.

### Responsive Interface

* Optimized for mobile and desktop.

---

## Technology Stack

### Frontend

* Next.js 14 (App Router)
* TypeScript
* Tailwind CSS
* Zustand or React Query (optional)
* Sonner (notifications)

### Backend / Database

* Supabase (Authentication, Realtime, PostgreSQL)

### Stock Data

* External stock market API (Finnhub, AlphaVantage, Polygon.io, etc.)

### Automation

* Cron job or scheduled function for prediction locking and scoring.

---

## Core Workflows

### 1. Prediction Flow

* User selects predictions.
* Stored securely in the database.
* Hidden until the 7 PM IST lock.

### 2. Lock Flow (7 PM IST)

* All predictions freeze.
* Reference prices captured and stored.

### 3. Scoring Flow (2:30 AM IST)

* Closing prices retrieved.
* Scores computed.
* Leaderboards updated.

---

## Quick Start

### Clone Repository

```bash
git clone https://github.com/your-username/tickertribe.git
cd tickertribe
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
STOCK_API_KEY=your_stock_api_key
```

### Start Development Server

```bash
npm run dev
```

---

## Future Enhancements

* Weekly streaks and performance badges
* Power-ups and boosts
* Advanced analytics for tribes
* Global and public leaderboards
* Additional stock categories

---

<div align="center">

TickerTribe - A structured, competitive way to engage with the stock market.

</div>
