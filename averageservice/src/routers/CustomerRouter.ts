import express, { Router } from 'express';
import CustomerService from '../services/CustomerService';

const router = Router();
const customerService = new CustomerService();

router.get('/average_ages', customerService.averageAges);

export default router;