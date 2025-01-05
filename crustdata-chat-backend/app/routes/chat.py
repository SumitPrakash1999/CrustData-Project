from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from difflib import get_close_matches
from app.db import db

# Define a FastAPI router
chat_router = APIRouter()

# Request model
class QueryRequest(BaseModel):
    question: str

# Function to find the best match
def find_best_match(user_query):
    questions = [item["question"] for item in db["knowledge_base"].find()]
    match = get_close_matches(user_query, questions, n=1, cutoff=0.6)
    if match:
        return db["knowledge_base"].find_one({"question": match[0]})
    return None

# API route for handling chat queries
@chat_router.post("/ask")
async def ask_question(query: QueryRequest):
    result = find_best_match(query.question)
    if result:
        return {"answer": result["answer"]}
    raise HTTPException(status_code=404, detail="Sorry, I couldn't find an answer to your question.")
