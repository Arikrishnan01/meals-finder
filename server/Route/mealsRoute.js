import express from 'express';
import { createMeals,getAllMeals } from '../Controller/mealsController.js';

const router = express.Router();

router.post('/createMeals', createMeals);
router.get('/getAllMeals', getAllMeals);

const mealsRouter = router;
export default mealsRouter;