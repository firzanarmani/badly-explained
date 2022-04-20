from config import Config
from flask import Flask
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db = SQLAlchemy(app)
ma = Marshmallow(app)

from app import models, routes
