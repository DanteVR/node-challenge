import { Router } from 'express';
import CustomerService from '../services/CustomerService';

const router = Router();
const customerService = new CustomerService();

router.post('/store', customerService.create);

export default router;