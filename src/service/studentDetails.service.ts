import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { Studentdetails } from 'src/entities/Studentdetails';
import { studentDetailsModel } from 'src/model/studentDetails.model';

@Injectable()
export class StudentDetailService {
  constructor(
    @InjectRepository(Studentdetails)
    private readonly repository: Repository<Studentdetails>,

  ) { }

  async get(): Promise<any> {
    return await this.repository.find();
  }
  async create(request: studentDetailsModel): Promise<any> {
    const formatRequest = new Studentdetails();
    formatRequest.studentname = request.studentname;
    formatRequest.branch = request.branch;
    formatRequest.gender = request.gender;
    await this.repository.insert(formatRequest);
    return true;
  }
  async update(id: number, request: studentDetailsModel): Promise<any> {
    const formatRequest = await this.repository.findOne({ where: { studentdetailsid: id } });
    if (formatRequest) {
      formatRequest.studentname = request.studentname;
      formatRequest.branch = request.branch;
      formatRequest.gender = request.gender;
      delete formatRequest.studentdetailsid;
      await this.repository.update(id, formatRequest);
    }
    return true;
  }
  async delete(id: number): Promise<any> {
    await this.repository.delete({ studentdetailsid: id.toString() })
    return true;
  }
}

