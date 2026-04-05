# 📝 Fullstack Todo App

A modern fullstack Todo application built with a clean UI and scalable architecture.
Users can create, update, delete, and manage tasks with authentication and real-time UI updates.

---

## 🚀 Features

* 🔐 User Authentication (Login / Register)
* ✅ Create, Edit, Delete Tasks
* 📌 Mark tasks as completed / pending
* 🔄 Real-time UI updates with React Query
* 📅 Date selection with calendar integration
* 🌙 Dark / Light mode support
* ⚡ Optimized frontend with Next.js
* 🔒 Secure backend APIs

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Query

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

---

## 📂 Project Structure

```
todo-fullstack/
│
├── todo-frontend/     # Next.js frontend
├── todo-backend/      # Express backend
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/todo-fullstack.git
cd todo-fullstack
```

---

### 2️⃣ Setup Backend

```bash
cd todo-backend
npm install
```

Create `.env` file:

```
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd ../todo-frontend
npm install
```

Create `.env.local`:

```
NEXT_PUBLIC_BASE_URL=http://localhost:4000
```

Run frontend:

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Todos

* `GET /api/todos`
* `POST /api/todos`
* `PUT /api/todos/:id`
* `DELETE /api/todos/:id`

---

## 🧠 Key Learnings

* Handling hydration errors in Next.js
* Managing server vs client rendering
* Efficient state management using React Query
* Building reusable components (TaskForm)
* Implementing authentication in MERN stack
* Handling API errors and edge cases

---

## 🔥 Future Improvements

* 📱 Mobile responsiveness improvements
* 🔔 Notifications / reminders
* 🗂️ Task categories / tags
* 👥 Multi-user collaboration
* 📊 Analytics dashboard

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙌 Acknowledgements

* shadcn/ui for UI components
* TanStack Query for data fetching
* Next.js team for amazing framework

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
