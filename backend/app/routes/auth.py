from flask import Blueprint, request, jsonify

bp = Blueprint('auth', __name__)

@bp.route('/login', methods=['POST'])
def login():
    from .. import bcrypt
    data = request.json
    if not data or not data.get("username") or not data.get("password"):
        return jsonify({"error": "Username and password are required"}), 400

    username = data["username"]
    password = data["password"]
    hashed_pw = bcrypt.generate_password_hash("password123").decode('utf-8')

    if bcrypt.check_password_hash(hashed_pw, password):
        return jsonify({"message": f"Welcome {username}!"})
    return jsonify({"error": "Invalid credentials"}), 401
