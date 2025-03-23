from flask import Blueprint

api = Blueprint('api', __name__)

@api.route('/api/example', methods=['GET'])
def example():
    return {"message": "This is an example route."}
