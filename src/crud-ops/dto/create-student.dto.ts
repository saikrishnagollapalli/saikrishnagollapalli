import { IsString, IsNumber, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly rollnumber: number;
  @IsNumber()
  @IsNotEmpty()
  readonly class: number;
  @IsString()
  @IsNotEmpty()
  readonly gender: string;
  @IsNumber()
  @IsNotEmpty()
  readonly marks: number;
}
