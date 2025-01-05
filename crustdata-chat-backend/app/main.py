from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.chat import chat_router

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL for local development
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers (e.g., Authorization, Content-Type)
)


# Register routes
app.include_router(chat_router)
