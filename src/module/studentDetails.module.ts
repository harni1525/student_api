import { TypeOrmModule } from '@nestjs/typeorm';
import { Studentdetails } from 'src/entities/Studentdetails';
import { StudentDetailController } from 'src/controller/studentDetails.controller';
import { StudentDetailService } from 'src/service/studentDetails.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Studentdetails]),
    ],
  controllers: [StudentDetailController],
  providers: [StudentDetailService],
})
export class StudentDetailModule { }