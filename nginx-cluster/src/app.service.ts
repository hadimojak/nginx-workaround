import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      message: 'Hello from NestJS',
      pid: process.pid, // helps you see which worker served the request
      time: new Date().toISOString(),
    };
  }
}
