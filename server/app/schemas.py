from app import ma
from app.models import Explanation, Movie


class MovieSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Movie

    id = ma.auto_field()
    name = ma.auto_field()
    year = ma.auto_field()
    explanations = ma.auto_field()


class ExplanationSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Explanation
        include_fk = True

    id = ma.auto_field()
    content = ma.auto_field()
    movie_id = ma.auto_field()
    movie = ma.Nested(MovieSchema)
    created_at = ma.auto_field()


movie_schema = MovieSchema()
movies_schema = MovieSchema(many=True)
explanation_schema = ExplanationSchema()
explanations_schema = ExplanationSchema(many=True)
