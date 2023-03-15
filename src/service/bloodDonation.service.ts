import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { Blooddonation } from 'src/entities/Blooddonation';
import { bloodDonationModel } from 'src/model/bloodDonation.model';

@Injectable()
export class BloodDonationService {
    constructor(
        @InjectRepository(Blooddonation)
        private readonly repository: Repository<Blooddonation>,

    ) { }

    async get(): Promise<any> {
        return await this.repository.find();
    }
    async create(request: bloodDonationModel): Promise<any> {
        const formatRequest = new Blooddonation();
        formatRequest.donorname = request.donorname;
        formatRequest.gender = request.gender;
        formatRequest.dob = request.dob;
        formatRequest.bloodgroup = request.bloodgroup;
        formatRequest.frequencyofdonor = request.frequencyofdonor;
        formatRequest.lastblooddonationdate = request.lastblooddonationdate;
        formatRequest.email = request.email;
        formatRequest.mobileno = request.mobileno;
        formatRequest.phoneno = request.phoneno;
        formatRequest.address = request.address;
        formatRequest.volunteer = request.volunteer;
        await this.repository.insert(formatRequest);
        return true;
    }
    async update(id: number, request: bloodDonationModel): Promise<any> {
        const formatRequest = await this.repository.findOne({ where: { donorid: id } });
        if (formatRequest) {
            formatRequest.donorname = request.donorname;
            formatRequest.gender = request.gender;
            formatRequest.dob = request.dob;
            formatRequest.bloodgroup = request.bloodgroup;
            formatRequest.frequencyofdonor = request.frequencyofdonor;
            formatRequest.lastblooddonationdate = request.lastblooddonationdate;
            formatRequest.email = request.email;
            formatRequest.mobileno = request.mobileno;
            formatRequest.phoneno = request.phoneno;
            formatRequest.address = request.address;
            formatRequest.volunteer = request.volunteer;
            delete formatRequest.donorid;
            await this.repository.update(id, formatRequest);
        }
        return true;
    }
    async delete(id: number): Promise<any> {
        await this.repository.delete({ donorid: id.toString() })
        return true;
    }

}

