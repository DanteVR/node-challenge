import express, { Application, Router } from 'express';
import customerRouter from './routers/CustomerRouter';
import { createCustomerValidation } from './middlewares/validator';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.middlewareConfig();
    this.routerConfig();
  }

  private config() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json({ limit: '1mb' }));
  }


  private middlewareConfig() {
    this.app.use(cors())
    this.app.use(morgan('tiny'))
    this.app.use(helmet())
    this.app.use(createCustomerValidation)
  }

  private routerConfig() {
    this.app.use('/customers', customerRouter);
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve(port);
      }).on('error', (err: Object) => reject(err));
    });
  }
}

export default Server;