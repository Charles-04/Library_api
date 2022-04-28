import { InputType, Int, Field } from '@nestjs/graphql';
import { isNotEmpty, IsNotEmpty, IsString } from 'class-validator';
export class CreateClubInput {
    @Field(() => String, {
      description: 'book name',
    })
    @IsNotEmpty()
    name: string;

    @Field(() => String, { nullable: false, description: 'book Author' })
    level: string;

    @Field(()=>String,{
        description:"book code",
    })
    @IsNotEmpty()
    code: string;
}