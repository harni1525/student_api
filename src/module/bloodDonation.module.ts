import { TypeOrmModule } from '@nestjs/typeorm';
import { Blooddonation } from 'src/entities/Blooddonation';
import { BloodDonationService } from 'src/service/bloodDonation.service';
import { Module } from '@nestjs/common';
import { BloodDonationController } from 'src/controller/bloodDonation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Blooddonation]),
    ],
  controllers: [BloodDonationController],
  providers: [BloodDonationService],
})
export class BloodDonationModule { }