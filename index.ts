import express from "express";
import appRoutes from "./routes/appRoutes";

const app = express();
app.use(express.json());
app.use('/api/v1',appRoutes);
app.get("/health",(req, res) => res.send("working properly"));

const port = 3001;

app.listen(port,()=> {console.log(`server is listening on port ${port}`)});