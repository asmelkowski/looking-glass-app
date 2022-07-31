from typing import List

from fastapi import APIRouter, UploadFile

router = APIRouter()


@router.post("/images/", tags=["test"])
async def upload_image(files: List[UploadFile]):
    contents = [await file.read() for file in files]

    return [file.__dict__ for file in files]
