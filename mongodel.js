const express = require('express');
const app = express();
const connectToDatabase = require('./config/db');
const { ObjectId } = require('mongoose').Types;
const Student = require('./models/studentModel')
const PORT = 5003;
connectToDatabase();
app.listen(PORT, () => {
    console.log(`Server MongoPractice is running on port ${PORT}`);
});
async function insertStudents(data) {
    try {
        const result = await Student.insertMany(data); // Directly insert the array of students
        let count = await Student.countDocuments();
        console.log(`Data inserted successfully. ${result.length} students added.`);
        console.log(`Total students: ${count}`);
    } catch (err) {
        console.error("Error inserting data:", err);
    }
}
let studentsData=[
    {
      "name": "Arshi Anjum",
      "email": "arshi@gmail.com",
      "phone": "9845678903",
      "city": "Nagpur",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Rahul Sharma",
      "email": "rahul@gmail.com",
      "phone": "9876543210",
      "city": "Mumbai",
      "gender": "Male",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Neha Verma",
      "email": "neha@gmail.com",
      "phone": "9765432109",
      "city": "Delhi",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Amit Singh",
      "email": "amit@gmail.com",
      "phone": "9856741230",
      "city": "Bangalore",
      "gender": "Male",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Priya Desai",
      "email": "priya@gmail.com",
      "phone": "9845098765",
      "city": "Pune",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Vikas Gupta",
      "email": "vikas@gmail.com",
      "phone": "9832012345",
      "city": "Hyderabad",
      "gender": "Male",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Simran Kaur",
      "email": "simran@gmail.com",
      "phone": "9823409876",
      "city": "Chandigarh",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Rohan Mehta",
      "email": "rohan@gmail.com",
      "phone": "9812304567",
      "city": "Ahmedabad",
      "gender": "Male",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Anjali Rao",
      "email": "anjali@gmail.com",
      "phone": "9801234567",
      "city": "Chennai",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Sandeep Patil",
      "email": "sandeep@gmail.com",
      "phone": "9798765432",
      "city": "Jaipur",
      "gender": "Male",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Kavita Nair",
      "email": "kavita@gmail.com",
      "phone": "9789654321",
      "city": "Kochi",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Manish Tiwari",
      "email": "manish@gmail.com",
      "phone": "9776543210",
      "city": "Lucknow",
      "gender": "Male",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Shruti Shah",
      "email": "shruti@gmail.com",
      "phone": "9765432101",
      "city": "Surat",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Rajesh Kumar",
      "email": "rajesh@gmail.com",
      "phone": "9754321098",
      "city": "Bhopal",
      "gender": "Male",
      "courses": "MERN",
      "password": "123456"
    },
    {
      "name": "Pooja Sinha",
      "email": "pooja@gmail.com",
      "phone": "9743210987",
      "city": "Patna",
      "gender": "Female",
      "courses": "MERN",
      "password": "123456"
    }
  ]
//   insertStudents(studentsData);
  async function deleteAllStudents() {
    try {
      const result = await Student.deleteMany({});
      let count = await Student.countDocuments();
      console.log(`All students deleted successfully. ${result.deletedCount} students removed.`);
      console.log(`Remaining students: ${count}`);
    } catch (err) {
      console.error("Error deleting students:", err);
    }
  }
//   deleteAllStudents();