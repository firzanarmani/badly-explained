from app import db
from app.models import Explanation, Movie

movies = [
    {
        "name": "The Chronicles of Narnia",
    },
    {"name": "Star Wars"},
    {"name": "Batman vs Superman"},
    {"name": "Shrek"},
    {"name": "The Shining"},
    {"name": "Finding Nemo"},
    {"name": "Harry Potter"},
    {"name": "Mulan"},
    {"name": "Deadpool"},
    {"name": "Lord of the Rings"},
    {"name": "Snow White and the Seven Dwarves"},
    {"name": "Titanic"},
    {"name": "The Hunger Games"},
    {"name": "Wall E"},
    {"name": "Fast and Furious"},
    {"name": "Avatar"},
    {"name": "Batman"},
    {"name": "Thor"},
    {"name": "Inception"},
]

explanations = [
    {"content": "Kid comes out of the closet.", "movie_id": 1},
    {"content": "Talking frog convinces son to kill his dad.", "movie_id": 2},
    {"content": "Paranoid billionaire afraid of immigrant.", "movie_id": 3},
    {"content": "A guy learns to love a girl without her instagram filters.", "movie_id": 4},
    {"content": "A family's first Airbnb experience goes very wrong.", "movie_id": 5},
    {
        "content": "Depressed, widowed father teams up with mentally challenged woman to find his disabled son.",
        "movie_id": 6,
    },
    {"content": "Noseless guy has an unhealthy obsession with a teenage boy", "movie_id": 7},
    {"content": "Girl has to pretend she's a man to be taken seriously.", "movie_id": 8},
    {"content": "Cancer survivor never loses his sense of humor.", "movie_id": 9},
    {"content": "Group spends 9 hours returning jewelry.", "movie_id": 10},
    {"content": "A guy that's alone in the forest kisses a dead body while seven other guys watch.", "movie_id": 11},
    {"content": "Rich girl lets poor man freeze to death.", "movie_id": 12},
    {"content": "Older sister ruins younger sister's chance to appear on television.", "movie_id": 13},
    {"content": "Adorable trash can and flower pot force fat people to walk.", "movie_id": 14},
    {"content": "A bald guy teams up with another bald guy to fight another bald guy.", "movie_id": 15},
    {"content": "Man plays virtual reality Smurf game.", "movie_id": 16},
    {"content": "A man in makeup trolls a city to annoy a billionaire.", "movie_id": 17},
    {"content": "Guy lets his planet get destroyed because he doesn't want his sister living there.", "movie_id": 18},
    {"content": "Incestuous siblings defeat angry father with glowstick.", "movie_id": 2},
    {"content": "An hour and a half of watching people sleep.", "movie_id": 19},
    {"content": "A billionaire devotes time and money to cosplay.", "movie_id": 17},
    {"content": "Girl would rather let her boyfriend die than share a piece of wood.", "movie_id": 12},
]

for movie in movies:
    db.session.add(Movie(**movie))

db.session.commit()

for explanation in explanations:
    db.session.add(Explanation(**explanation))

db.session.commit()
