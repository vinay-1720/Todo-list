from sqlalchemy import Column,Integer,String,ForeignKey,Boolean
from database import Base

class User(Base):
    __tablename__="users"

    id=Column(Integer,primary_key=True,index=True)
    username=Column(String,unique=True,nullable=False)
    password=Column(String,nullable=False)


class Todo(Base):
    __tablename__="todos"

    id=Column(Integer,primary_key=True)
    task=Column(String)
    is_checked=Column(Boolean,default=False)
    user_id=Column(Integer,ForeignKey("users.id"))