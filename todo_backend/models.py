from pydantic import BaseModel

class UserCreate(BaseModel):
    username:str
    password:str

class UserLogin(BaseModel):
    username:str
    password:str

class TodoCreate(BaseModel):
    task:str
    user_id:int

class TodoUpdate(BaseModel):
    is_checked:bool