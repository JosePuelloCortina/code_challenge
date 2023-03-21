import express from 'express';
import morgan from 'morgan';
import path from 'path';

import routes from './routes';

export class Application{

    app: express.Application

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings(){
        this.app.set('port', 3000);
    }


    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(){
        this.app.use(routes)
        // this.app.use('/tasks', tasksRoutes)
        this.app.use(express.static( path.join(__dirname, 'public')))
    }

    start(){
        this.app.listen(this.app.get('port'), () =>{
            console.log('server running', this.app.get('port'))
        })
    }
}

export default Application;