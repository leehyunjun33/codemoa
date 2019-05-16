"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        // 사용할 포트
        this.PORT = 3000;
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
    static bootstrap() {
        return new Server();
    }
    ;
}
exports.Server = Server;
Server.bootstrap();
