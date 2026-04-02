# 📊 Data Modeling with Mongoose (Node.js)

---

## 📌 Overview

This project demonstrates how to perform **data modeling using Mongoose** in a Node.js application.

It focuses on designing and structuring data for a backend system using schemas, models, and relationships.

---

## 🧠 What is Data Modeling?

Data modeling is the process of defining how data is:

- 📦 Structured  
- 🔗 Related  
- 💾 Stored in a database  

In this project, MongoDB is used along with Mongoose to create structured data models.

---

## 🛠️ Tech Stack

- Node.js  
- MongoDB  
- Mongoose  

---

## 📂 Project Structure

```bash
project/
│
├── models/
│   ├── User.js
│   ├── todo.js
│   └── subtodo.js
│
└── README.md
## 📊 Models Implemented

### 👤 User Model

- Stores user-related information  

**Fields:**
- Username  
- Email  
- Password  

**Includes Validation:**
- Required fields  
- Unique values  
- Lowercase formatting  

---

### 📝 Todo Model

- Represents main tasks  

**Fields:**
- Content  
- Complete status  
- CreatedBy (User reference)  
- SubTodo reference  

---

### 📌 SubTodo Model

- Represents smaller tasks inside a Todo  

**Fields:**
- Content  
- Completion status  
- CreatedBy (User reference)  

---

## 🔗 Relationships

This project demonstrates relationships between collections:

### 1️⃣ One-to-Many Relationship
- One **User** → Many **Todos**

### 2️⃣ Referencing (ObjectId)
- Todos reference:
  - User (`createdBy`)  
  - SubTodo (`subtodo`)  

### 3️⃣ Nested Structure Concept
- SubTodo acts as a child of Todo  

---

## ⚙️ Key Concepts Used

- 📦 Mongoose Schemas  
- 🧱 Models creation  
- 🔗 ObjectId referencing  
- ⏱️ Timestamps  
- ✅ Field validation  

---

## 💡 Example Data Flow

```bash
User → Creates → Todo → Contains → SubTodo

## 🚀 Key Learnings

- How to define schemas using Mongoose  
- How to create models for collections  
- How to establish relationships between data  
- How to structure backend data efficiently  
- Understanding of real-world database design  

---

## ⚠️ Notes

- Data modeling is the foundation of backend development  
- Proper schema design improves performance and scalability  
- Relationships help in organizing complex data  

---

## 🎯 Conclusion

This project provides a clear understanding of how to design and implement data models in a Node.js application using Mongoose. It demonstrates real-world concepts like relationships, schema design, and structured data handling.