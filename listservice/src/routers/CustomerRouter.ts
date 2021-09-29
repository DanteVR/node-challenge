import express, { Router } from 'express';
import CustomerService from '../services/CustomerService';

const router = Router();
const customerService = new CustomerService();

router.get('/list', customerService.get);

export default router;