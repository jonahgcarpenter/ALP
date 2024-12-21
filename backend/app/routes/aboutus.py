from flask import Blueprint, jsonify

bp = Blueprint('aboutus', __name__)

@bp.route('/', methods=['GET'])
def aboutus():
    return jsonify({"message": "Welcome to the About Us page!"})
