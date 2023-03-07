import mongoose from "mongoose";


mongoose.connect("mongodb+srv://Gustavo:gustavo123@cluster0.lc0lk5v.mongodb.net/Carros-Api")
let db = mongoose.connection

export default db;