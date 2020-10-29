import express, {Application} from 'express';
import giftcardRoutes from './routes/giftcardRoutes';
import registroRoutes from './routes/registroRoutes';
import loginRoutes from './routes/loginRoutes';
import pagotRoutes from './routes/pagotRoutes';
import perfilroutes  from './routes/perfilroutes';
import cors from 'cors';

class Server
{
    public app : Application;
    public abstractServer : any; //Utilizada para poder apagar el servidor desde afterAll (jasmine unit testing)
    constructor()
    {
        this.app = express();
        this.config();
        this.routes();
    }

    config() : void
    {
        this.app.set('port', 3002);
        this.app.use(cors());
        this.app.use(express.json());

        
        this.app.use(express.urlencoded({extended : false}));
    }

    routes() : void
    {
        this.app.use('/api/',giftcardRoutes);
        this.app.use('/api/',registroRoutes);
        this.app.use('/api/',loginRoutes);
        this.app.use('/api/',pagotRoutes);
        this.app.use('/api/',perfilroutes);
    }

    listen() : void
    {
        this.abstractServer = this.app.listen(this.app.get('port'), () => {
            console.log("Server listening on port "+this.app.get('port'));
        })
    }

    close() : void
    {
        this.abstractServer.close();
    }
}

const serverInstance = new Server();
serverInstance.listen();

module.exports = serverInstance;///jasmine unit testing required
