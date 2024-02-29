import { IsNotEmpty, IsString, Length, IsUUID } from 'class-validator';
import { Product } from 'src/db';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: Product['id'];

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  address: string;
}