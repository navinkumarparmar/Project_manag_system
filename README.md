Trip Management API:

This is a backend API for managing projects and tasks
🚀 Installation

1️⃣ Clone the Repository: https://github.com/navinkumarparmar/Project_manag_system.git

git clone 


2️⃣ Install Dependencies:

npm install

3️⃣ Set Up Environment Variables:

Create a .env file in the root directory and add the required environment variables:

PORT=3003
MONGODB_URI=
JWT_SECRET=your_secret_key

4️⃣ Run the Server:

npm run start

The API will be available at: http://localhost:3003

📌 API Documentation

🔗 Postman Documentation: View Here

📜 Available API Endpoints



POST /api/project/create - Register a new project

GET /api/project/listAll - list ALL projects

PUT /api/project/update/id - update project

DELETE /api/project/delete/id  - delete project


🔹 Task Management

POST /api/task/create - create task 

GET /api/task/listAll - list ALL task

PUT /api/task/update/id - update task

DELETE /api/task/delete/id  - delete task


🔹
🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ORM)







