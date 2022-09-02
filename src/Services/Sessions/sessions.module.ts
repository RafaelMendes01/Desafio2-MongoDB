import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sessions, SessionsSchema } from './entities/session.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sessions.name, schema: SessionsSchema }])],
  controllers: [SessionsController],
  providers: [SessionsService]
})
export class SessionsModule {}
