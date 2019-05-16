import * as express from 'express';

export class Server {



public app: express.Application;


// 사용할 포트


private PORT: number =  3000;



constructor() {


this.app = express();


this.config();


this.routes();


}




config() {


this.app.listen(this.PORT, () => {
    

this.app.use('/', express.static(__dirname + '/webapp'));



console.log(`Listening at http://localhost:${this.PORT}/`);


});




}


routes() {



}

public static bootstrap(): Server {


return new Server();


};


}
Server.bootstrap();