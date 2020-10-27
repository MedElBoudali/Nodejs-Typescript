import express, { Request, Response, NextFunction } from 'express';
import todosRoutes from './routes/todos';
const app = express();

app.use(express.json());

app.use('/todos', todosRoutes);

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(4000, () => console.log(`⚡️[server]: Server is running at https://localhost:4000`));
