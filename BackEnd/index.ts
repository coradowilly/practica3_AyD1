import express, {Application} from 'express';
import giftcardRoutes from './routes/giftcardRoutes';
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
        this.app.set('port', 3001);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }

    routes() : void
    {
        this.app.use('/api/',giftcardRoutes);
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