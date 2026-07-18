from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,declarative_base

database_url="postgresql://postgres:vinay%401720@localhost:5432/tododb"
engine=create_engine(database_url)

SessionLocal=sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base=declarative_base()