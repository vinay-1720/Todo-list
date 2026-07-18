from fastapi import FastAPI,HTTPException
from database import engine,Base,SessionLocal
from database_models import User,Todo
from models import UserCreate,UserLogin,TodoCreate,TodoUpdate

app=FastAPI()
Base.metadata.create_all(bind=engine)


from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def home():
    return {"message":"Backend is Running"}

@app.post("/signup")
def signup(user:UserCreate):
    db=SessionLocal()

    existing_user=db.query(User).filter(
        User.username==user.username
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Username is already Exists"
        )
    new_user=User(
        username=user.username,
        password=user.password
    )
    db.add(new_user)
    db.commit()

    return {"message":"User is created Successfully"}

@app.post("/login")
def login(user:UserLogin):
    db=SessionLocal()

    existing_user=db.query(User).filter(
        User.username==user.username,
        User.password==user.password
    ).first()

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid Username or Password" 
        )
    
    return {
        "message":"Login Successfull",
        "user_id":existing_user.id
    }


@app.post("/addtodo")
def add_todo(todo:TodoCreate):

    db=SessionLocal()
    new_todo=Todo(
        task=todo.task,
        user_id=todo.user_id
    )

    db.add(new_todo)
    db.commit()

    return {"message":"Todo Added"}

@app.get("/todos/{user_id}")
def get_todos(user_id:int):
    db=SessionLocal()

    todos=db.query(Todo).filter(
        Todo.user_id==user_id
    ).all()

    return todos

@app.put("/todo/{todo_id}")
def update_todo(todo_id:int,todo_data:TodoUpdate):
    db=SessionLocal()

    todo=db.query(Todo).filter(
        Todo.id==todo_id
    ).first()

    if not todo:
        raise HTTPException(
            status_code=404,
            detail="Todo not Found"
        )
    todo.is_checked=todo_data.is_checked;
    db.commit()

    return {"message":"Todo Updated"}
