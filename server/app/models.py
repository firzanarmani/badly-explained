from datetime import datetime

from app import db


class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    year = db.Column(db.Integer)
    explanations = db.relationship("Explanation", backref="movie", lazy=True)

    def __repr__(self) -> str:
        return f"Movie: {self.name}"

    def __init__(self, name) -> None:
        self.name = name


class Explanation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey("movie.id"))
    # movie = db.relationship("Movie", back_populates="explanation")
    # source = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"Explanation: {self.content}"

    def __init__(self, content, movie_id) -> None:
        self.content = content
        self.movie_id = movie_id
