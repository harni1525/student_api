import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { StudentDetailModule } from './module/studentDetails.module';
import { BloodDonationModule } from './module/bloodDonation.module';

@Module({
  imports: [StudentDetailModule,BloodDonationModule,
    DatabaseModule],
})
export class AppModule { }
