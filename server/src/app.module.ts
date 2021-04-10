import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    TrackModule
  ],
  controllers: [AppController],
  providers:[AppService]
})
export class AppModule{}