import express, { json } from 'express';
import {dbConnection} from './config/db.js'
import UserRoutes  from './Routes/UserRoutes.js'
import cookieParser from 'cookie-parser';
import ContentRoutes from './Routes/ContentRoutes.js'


const app = express();
app.use(json());
app.use(cookieParser())

// Connect to the database
dbConnection();

app.use('/auth', UserRoutes) ;
app.use('/content', ContentRoutes)

app.get("/hello", (req,res)=>{
	return res.json({
		message : "Hello"
	})
})


// Start the server
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
