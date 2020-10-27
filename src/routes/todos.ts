import { Router } from 'express';
import { allTodos, createTodo, editTodo, deleteTodo } from '../controllers/todos';
const router = Router();

router.get('/', allTodos);

router.post('/', createTodo);

router.patch('/:id', editTodo);

router.delete('/:id', deleteTodo);

export default router;
