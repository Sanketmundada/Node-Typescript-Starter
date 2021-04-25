import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ msg: "Welcome to server 🚀🚀 !!!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
