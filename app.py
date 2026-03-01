from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import base64
import os
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

app = Flask(__name__)
CORS(app)

# ==========================================
# 🌐 Page Routes (ওয়েবসাইটের পেজগুলো লোড করার জন্য)
# ==========================================

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/docs')
def docs():
    return render_template('docs.html')

@app.route('/developer')
def developer():
    return render_template('developer.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')


# ==========================================
# 🔒 API Routes (এনক্রিপ্ট ও ডিক্রিপ্ট করার লজিক)
# ==========================================

def generate_key(password: str, salt: bytes) -> bytes:
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=480000,
    )
    return base64.urlsafe_b64encode(kdf.derive(password.encode()))

@app.route('/api/encrypt', methods=['POST'])
def encrypt():
    data = request.json
    try:
        salt = os.urandom(16)
        key = generate_key(data['password'], salt)
        f = Fernet(key)
        encrypted = f.encrypt(data['text'].encode())
        return jsonify({"result": base64.urlsafe_b64encode(salt + encrypted).decode()})
    except Exception as e:
        return jsonify({"error": "Encryption failed"}), 400

@app.route('/api/decrypt', methods=['POST'])
def decrypt():
    data = request.json
    try:
        raw = base64.urlsafe_b64decode(data['text'].encode())
        salt, actual_data = raw[:16], raw[16:]
        key = generate_key(data['password'], salt)
        f = Fernet(key)
        return jsonify({"result": f.decrypt(actual_data).decode()})
    except:
        return jsonify({"error": "Invalid Password or Data"}), 400

if __name__ == '__main__':
    app.run()