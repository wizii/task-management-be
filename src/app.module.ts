import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { BoardService } from './board/board.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService, BoardService, PrismaService],
})
export class AppModule {}
