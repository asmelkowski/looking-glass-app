from pydantic import BaseModel

class Image(BaseModel):
    file_name: str = None
    file_extension: str = None
    content: dict = None
    