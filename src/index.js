import dotenv from "dotenv";
import connectDB from './db/index.js'
import app from "./app.js";

dotenv.config({ path: "./.env", quiet: true });
const PORT = process.env.PORT || 3000;

await connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.log("MONGO db connection failed");  
})