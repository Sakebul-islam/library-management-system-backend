import express, { Application, Request, Response } from "express";
import { booksRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";
import cors from "cors";

const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/books", booksRoutes);
app.use("/api/borrow", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("📗 Welcome from Library Management System API");
});

// 404 error
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Sorry! Route not found" });
});

export default app;
