<div align="center">

  <h1>🔐 EncryptoPro | Advanced Data Vault</h1>
  
  <p><strong>A military-grade, zero-knowledge encryption suite built with Flask & Tailwind CSS.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <br>
    <img src="https://img.shields.io/badge/Deployed_on-Vercel_%2F_Render-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployed on Vercel/Render" />
  </p>

</div>

---

## 🚀 Live Demo

🔥 **Experience the live application here:** 🔗 **[EncryptoPro Live App](https://encrypto-pro.vercel.app/)**

<img src="preview.png">

---

## ✨ Key Features

- **Military-Grade Security:** Utilizes `AES-256` encryption via the Fernet symmetric module.
- **Zero-Knowledge Architecture:** No passwords, text, or encrypted data are ever saved on the backend server.
- **Advanced Key Derivation:** Passwords are hashed `480,000` times using `PBKDF2HMAC` with `SHA256` and unique salts.
- **Component-Based UI:** Mimics React's architecture using Flask's Jinja2 templates for scalable and clean code.
- **Mobile-First Design:** Fully responsive and beautiful interface built with Tailwind CSS and Lucide Icons.

---

## 🛠️ Tech Stack

### Backend
- **Python 3.x**
- **Flask** (Web Framework)
- **Cryptography.io** (Encryption logic)
- **Flask-CORS** (Cross-Origin Resource Sharing)

### Frontend
- **HTML5 & Jinja2 Templates**
- **Tailwind CSS** (Styling & Animations)
- **Vanilla JavaScript** (DOM manipulation & Async fetch)

---

## 💻 Run Locally on Your Machine

Follow these steps to run this project on your local computer:

**1. Clone the repository:**
```bash
git clone https://github.com/atul-dev-ai/EncryptoPro.git
```
```Bash
cd EncryptoPro
```

## 2. Create a Virtual Environment:
```Bash
python -m venv myvenv
```
```Bash
source myvenv/Scripts/activate  # For Windows
```

## 3. Install Dependencies:
```Bash
pip install -r requirements.txt
```
## 4. Run the Flask Server:
```Bash
 python app.py
```
> The app will be running at http://127.0.0.1:5000/

---

## 📂 Project Architecture

EncryptoPro/
├── app.py                 # Core Backend API & Routing
├── requirements.txt       # Project dependencies
├── vercel.json            # Deployment configuration for Vercel
├── templates/             # UI Components
│   ├── base.html          # Master Layout (HTML Skeleton)
│   ├── navbar.html        # Reusable Navbar
│   ├── footer.html        # Reusable Footer
│   ├── index.html         # Main App Interface (Encrypt/Decrypt)
│   ├── docs.html          # Documentation Page
│   └── developer.html     # Developer Portfolio
└── static/                # Static assets (Images, CSS)

---

## 👨‍💻 About the Developer
Developed with ❤️ by Atul Paul.

> I am a software developer with a strong focus on Generative AI, Deep Learning, and Secure System Architecture.

📫 Connect with me:

GitHub: [@atul-dev-ai](https://www.github.com/atul-dev-ai)

LinkedIn: [Paul Atul](https://www.linkedin.com/in/paul-atul)

<p align="center">
<i>If you like this project, please consider giving it a ⭐ on GitHub!</i>
</p>

---

### How to edit:

1. Open the `README.md` file on GitHub, open the pencil (edit) icon and click on it.
2. Paste the code.
3. **Line 18** `https://your-app-name.vercel.app` is the place where you can create a Vercel Render and then click on the live link.
4. Click on "Commit changes" and click on it.
