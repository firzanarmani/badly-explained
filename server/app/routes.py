from flask import jsonify, request, session
from sqlalchemy import func

from app import app, db
from app.models import Explanation, Movie
from app.schemas import explanations_schema, movies_schema


@app.route("/")
@app.route("/index")
def index():
    return ""


@app.route("/explanation", methods=["GET", "POST"])
def explanations():
    error = None
    if request.method == "POST":
        return add_explanation()
    else:
        # ! Be careful of type conversion here
        noOfQueries = int(request.args.get("noOfQueries", 10))
        return get_explanations(noOfQueries)


def add_explanation():
    content = request.json["content"]
    movie_id = request.json["movie_id"]
    explanation = Explanation(content, movie_id)
    db.session.add(explanation)
    db.session.commit()


def get_explanations(noOfQueries):
    # Get n random explanations
    explanations = Explanation.query.order_by(func.random()).limit(noOfQueries).all()
    results = explanations_schema.dump(explanations)
    return {"explanations": results}


@app.route("/movie", methods=["GET"])
def movie():
    query = request.args.get("search", "")
    movies = Movie.query.filter(Movie.name.ilike(f"%%{query.strip()}%%")).limit(7).all()
    results = movies_schema.dump(movies)
    return {"movies": results}
