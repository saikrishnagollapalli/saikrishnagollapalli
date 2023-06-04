import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './crud-ops/schema/student.schema';
import { StudentController } from './crud-ops/student/student.controller';
import { StudentService } from './crud-ops/student/student.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/myDev'),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
