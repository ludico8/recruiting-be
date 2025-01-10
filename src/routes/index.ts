import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the backend with TypeScript  Diego' });
});

export default router;
