import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RecipeFilterDto {
    @ApiProperty({
        description: 'Search recipes by name',
        required: false,
        example: 'chicken'
    })
    @IsOptional()
    @IsString()
    s?: string;

    @ApiProperty({
        description: 'Filter recipes by ingredient',
        required: false,
        example: 'chicken_breast'
    })
    @IsOptional()
    @IsString()
    i?: string; 

    @ApiProperty({
        description: 'Filter recipes by area/country',
        required: false,
        example: 'Canadian'
    })
    @IsOptional()
    @IsString()
    a?: string; 

    @ApiProperty({
        description: 'Filter recipes by category',
        required: false,
        example: 'Seafood'
    })
    @IsOptional()
    @IsString()
    c?: string;
}