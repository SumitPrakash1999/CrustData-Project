# CrustData Chatbot

This project implements a **Level 0 chatbot** for answering questions about CrustData’s APIs. The chatbot consists of a **React frontend**, a **FastAPI backend**, and a **MongoDB Atlas database** for storing the static knowledge base.

---

## Features

- **Chat Interface**: A simple, user-friendly UI for asking questions and viewing responses.
- **Static Knowledge Base**: Predefined Q&A pairs stored in MongoDB Atlas.
- **Error Handling**: Provides fallback responses for invalid or unknown questions.
- **CORS Enabled**: Allows seamless communication between frontend and backend.

---

## Technology Stack

- **Frontend**: React.js
- **Backend**: FastAPI
- **Database**: MongoDB Atlas
- **Deployment**: 
  - **Frontend**: Netlify
  - **Backend**: Render

---

## Setup and Run Locally

### Prerequisites

- **Node.js** and **npm**: [Install Node.js](https://nodejs.org/)
- **Python** (3.8 or higher): [Install Python](https://www.python.org/downloads/)
- **Git**: [Install Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/CrustData-Project.git
cd CrustData-Project
