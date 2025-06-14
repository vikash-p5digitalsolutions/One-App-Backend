# One-App-Backend

What Was Built: Backend for the "Get In Touch" Form

This backend allows us to submit a message through a form, and safely stores those messages in a database (MongoDB).


---

💡 What It Does:

1. Accepts data from the form:

Name

Email

Phone number

Message



2. Stores it securely in a MongoDB database.


3. Sends a confirmation back to the user (through the frontend) that their message was successfully sent.




---

🛠️ Tools Used:

Tool	Purpose

Node.js	JavaScript runtime to build the server
Express.js	Web framework to handle HTTP requests
MongoDB	Database to store submitted contact messages
Mongoose	Makes MongoDB easier to use in JavaScript
.env	Loads environment variables from .env file
CORS	Allows your frontend (React) to talk to backend



---

📬 Example:

If a visitor fills the form like this:

Name: Vikash Mishra
Email: Vikash@gmail.com
Phone: 9156743210
Message: I'm interested in your app!


It will be saved inside the MongoDB database, and the frontend will show a success message.


---

✅ API Endpoint:

POST /api/contact/submit

Body:

{
  "name": "Vikash Mishra",
  "email": "Vikash@gmail.com",
  "phone": "9156743210",
  "message": "I'm interested in your app!"


Body:

{
  "name": "Riya Sharma",
  "email": "riya@mail.com",
  "phone": "9876543210",
  "message": "I'm interested in your app!"
}
