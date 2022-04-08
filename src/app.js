const express = require("express");
require("./db/dbconnect");
const app = express();
// db connection
// const Student = require("./models/students");
// port number
const port = process.env.PORT || 8000;
const studentRouter = require("./router/student");
app.use(studentRouter);
app.use(express.json());


// app.post("/students", async (req, res) => {
//   try {
//     const userData = new Student(req.body);
//     const createUser = await userData.save();
//     res.status(201).send(createUser);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
// // for fetching the api(getting the data from the api)
// app.get("/students", async (req, res) => {
//   try {
//     const getData = await Student.find();
//     res.status(201).send(getData);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.get("/students/:name", async (req, res) => {
//   try {
//     const name = req.params.name;
//     const getStudent = await Student.find({ name: name });
//     res.status(201).send(getStudent);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
// // For deleting the collection
// app.delete("/students/:id", async (req, res) => {
//   try {
//     const deleteUser = await Student.findByIdAndDelete(req.params.id);
//     if (!req.params.id) {
//       return res.status(400).send();
//     }
//     res.send(deleteUser);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });
// // update the data by id
// app.patch("/students/:id", async (req, res) => {
//   try {
//     const updateUser = await Student.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(201).send(updateUser);
//     if (!req.params.id) {
//       res.status(404).send();
//     }
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });
app.listen(port, () => {
  console.log("starting...");
});
