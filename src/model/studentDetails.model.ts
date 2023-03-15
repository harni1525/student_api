import { ApiProperty } from "@nestjs/swagger";

export class studentDetailsModel{
    @ApiProperty({ type: "string", required: true })
    studentname: string;
    @ApiProperty({ type: "string", required: true })
    branch: string;
    @ApiProperty({ type: "string", required: true })
    gender: string;
}