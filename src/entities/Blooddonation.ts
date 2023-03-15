import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blooddonation", { schema: "studentmanagement" })
export class Blooddonation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "donorid" })
  donorid: string;

  @Column("text", { name: "donorname" })
  donorname: string;

  @Column("text", { name: "gender" })
  gender: string;

  @Column("date", { name: "dob" })
  dob: string;

  @Column("text", { name: "bloodgroup" })
  bloodgroup: string;

  @Column("text", { name: "frequencyofdonor", nullable: true })
  frequencyofdonor: string | null;

  @Column("date", { name: "lastblooddonationdate" })
  lastblooddonationdate: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("text", { name: "mobileno" })
  mobileno: string;

  @Column("text", { name: "phoneno", nullable: true })
  phoneno: string | null;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("tinyint", { name: "volunteer", width: 1 })
  volunteer: boolean;
}
