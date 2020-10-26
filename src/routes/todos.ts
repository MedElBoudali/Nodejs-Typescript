import { Router } from 'express';
const router = Router();

router.get('/', (_, res) => {
  res.send('Todos Route');
});

router.post('/');

router.patch('/:id');

router.delete('/:id');

export default router;
