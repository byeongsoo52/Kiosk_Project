const express = require("express");
const { sequelize } = require("./models");
const dotenv = require("dotenv");
const session = require("express-session");

// 서버 클래스 정의
class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      console.log(`서버가 ${this.port}에서 시작되었습니다.`);
      this.isRunning = true;
    } else {
      console.log("서버가 이미 실행 중입니다.");
    }
  }

  stop() {
    if (this.isRunning) {
      console.log(`서버가 ${this.port}에서 종료되었습니다.`);
      this.isRunning = false;
    } else {
      console.log("서버가 이미 종료되었습니다.");
    }
  }
}

const server = new Server();

server.start();
server.stop();
