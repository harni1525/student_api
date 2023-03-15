import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("studentdetails", { schema: "studentmanagement" })
export class Studentdetails {
  @PrimaryGeneratedColumn({ type: "bigint", name: "studentdetailsid" })
  studentdetailsid: string;

  @Column("text", { name: "studentname" })
  studentname: string;

  @Column("text", { name: "branch" })
  branch: string;

  @Column("text", { name: "gender" })
  gender: string;
}
