import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Auth/jwt-auth.guard';
import { CreateProductDTO } from 'src/DTO/createProduct.dto';
import { UpdateProductDTO } from 'src/DTO/updateProduct.dto';
import { ProdukService } from 'src/Services/product.service';

@Controller('product')
export class ProdukController {
  constructor(private readonly produkService: ProdukService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createProduk(@Body() product: CreateProductDTO): any {
    console.log(product);
    return this.produkService.createProduk(product);
  }

  @UseGuards(JwtAuthGuard)
  @Get('Category/:id')
  findProdukInCategory(@Param() id: number): any {
    return this.produkService.findProdukInCategory(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param() id: number): any {
    return this.produkService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update/:id')
  update(@Body() produk: UpdateProductDTO, @Param() id: number): any {
    return this.produkService.update(produk, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('delete/:id')
  delete(@Param() id: number): any {
    return this.produkService.delete(id);
  }
}
