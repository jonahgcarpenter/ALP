from flask import Blueprint, jsonify

bp = Blueprint('breeder', __name__)

@bp.route('/', methods=['GET'])
def breeder():
    return jsonify({"message": "Breeder API endpoint!"})
