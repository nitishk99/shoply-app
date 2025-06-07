import express from 'express';
import { createOrder, getLatestOrder } from '../controllers/order.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/latest', getLatestOrder);

export default router;
