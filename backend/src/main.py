from fastapi import Depends, FastAPI

from .routers import main
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=("http://localhost",),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(main.router)


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}
