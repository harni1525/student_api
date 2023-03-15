import { ApiProperty } from "@nestjs/swagger";

export class bloodDonationModel{
    @ApiProperty({ type: "string", required: true })
    donorname: string;

    @ApiProperty({ type: "string", required: true })
    gender: string;

    @ApiProperty({ type: "date", required: true })
    dob: string;

    @ApiProperty({ type: "string", required: true })
    bloodgroup: string;

    @ApiProperty({ type: "string", required: true })
    frequencyofdonor: string;

    @ApiProperty({ type: "date", required: true })
    lastblooddonationdate: string;

    @ApiProperty({ type: "string", required: true })
    email: string;

    @ApiProperty({ type: "string", required: true })
    mobileno: string;

    @ApiProperty({ type: "string", required: true })
    phoneno: string;

    @ApiProperty({ type: "string", required: true })
    address: string;

    @ApiProperty({ type: "boolean", required: true })
    volunteer: boolean;
  
}