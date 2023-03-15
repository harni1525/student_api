import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentDetailService } from 'src/service/studentDetails.service';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { studentDetailsModel } from 'src/model/studentDetails.model';
@ApiTags('StudentDetail')
@Controller()
export class StudentDetailController {
  constructor(private readonly service: StudentDetailService) { }

  @Get("students")
  async get(): Promise<any> {
    return await this.service.get();
  }

  @Post("student/create")
  async create(@Body() request:studentDetailsModel):Promise<any>{
    return await this.service.create(request);
  }

  @Put("student/update/:id")
  @ApiParam({ name: 'id', type: 'number', required: true })
  async update(@Param('id') id:number,@Body() request:studentDetailsModel):Promise<any>{
    return await this.service.update(id,request);
  }
  @Delete("student/delete/:id")
  @ApiParam({ name: 'id', type: 'number', required: true })
  async delete(@Param('id') id:number):Promise<any>{
    return await this.service.delete(id);
  }
}
