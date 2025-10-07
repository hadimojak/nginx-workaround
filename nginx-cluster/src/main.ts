import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClusterService } from './cluster.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  console.log('nestjs server started on port ', process.env.PORT ?? 3000);
}

ClusterService.clusterize(bootstrap);
