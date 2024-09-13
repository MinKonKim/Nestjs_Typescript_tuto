import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })], // 전체에서 config모듈을 사용할거다.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
