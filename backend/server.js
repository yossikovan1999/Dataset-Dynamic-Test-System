import express from 'express';
import cors from "cors";
import errorMiddleware from './middleware/error.middleware.js';
import csvRouter from "./routes/dataRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api/data", csvRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
