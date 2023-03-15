import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { bloodDonationModel } from 'src/model/bloodDonation.model';
import { BloodDonationService } from 'src/service/bloodDonation.service';
@ApiTags('bloodDonation')
@Controller()
export class BloodDonationController {
    constructor(private readonly service: BloodDonationService) { }

    @Get("donors")
    async get(): Promise<any> {
        return await this.service.get();
    }

    @Post("donor/create")
    async create(@Body() request: bloodDonationModel): Promise<any> {
        return await this.service.create(request);
    }

    @Put("donor/update/:id")
    @ApiParam({ name: 'id', type: 'number', required: true })
    async update(@Param('id') id: number, @Body() request: bloodDonationModel): Promise<any> {
        return await this.service.update(id, request);
    }
    @Delete("donor/delete/:id")
    @ApiParam({ name: 'id', type: 'number', required: true })
    async delete(@Param('id') id: number): Promise<any> {
        return await this.service.delete(id);
    }
}
