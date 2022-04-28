import { InputType, Int, Field } from '@nestjs/graphql';
import { isNotEmpty, IsNotEmpty, IsString } from 'class-validator';
export class CreateBookInput {
    @Field(() => String, {
      description: 'book name',
    })
    @IsNotEmpty()
    name: string;

    @Field(() => String, { nullable: false,
         description: 'book Author' 
        })
    level: string;

    @Field(()=>String,{
        description:"book code",
    })
    @IsNotEmpty()
    code: string;

    @Field(()=>Number,{
        description:"international serial book number",
    })
    @IsNotEmpty()
    isbn: number;

    @Field(()=>String,{
        description:"book cover url",
    })
    coverImageUrl: string;

    @Field(()=>Number,{
        description:"book quantity",
    })
    @IsNotEmpty()
    quantity: number;
}