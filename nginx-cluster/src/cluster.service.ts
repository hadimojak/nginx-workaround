import * as os from 'os';
import { Injectable } from '@nestjs/common';
import { Cluster } from 'cluster';
const cluster: Cluster = require('cluster');

const numCPUS = os.cpus().length;

@Injectable()
export class ClusterService {
  static clusterize(callback: () => Promise<any>): void {
    if (cluster.isPrimary) {
      console.log(`master server started on ${process.pid}`);
      for (let i = 0; i < numCPUS; i++) {
        cluster.fork();
      }
      cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died. restartting`);
        cluster.fork();
      });
    } else {
      console.log(`cluster server started on ${process.pid}`);
      callback();
    }
  }
}
