import express, { Application, Router } from 'express';
import customerRouter from './routers/CustomerRouter';
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
        this.app.use(express.json({ limit: '1mb' })); // 100kb default
    }

    private middlewareConfig() {
        this.app.use(cors())
        this.app.use(morgan('tiny'))
        this.app.use(helmet())
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