import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ArticleService } from 'src/articles/article.service';
import { createArticlesDto } from 'src/articles/dto/createArticles.dto';
import { GmlsDTO } from 'src/gmls/dto/gmls.dto';
import { GmlsService } from 'src/gmls/gmls.service';
import { createGtlsDto } from 'src/gtls/dto/gtls.dto';
import { GtlsService } from 'src/gtls/gtls.service';

@Controller('historianapi')
export class historianApiController {
  constructor(
    private gmlsService: GmlsService,
    private gtlsService: GtlsService,
    private articleService: ArticleService,
  ) { }

  @Post('gmls/create')
  async addGmls(@Res() res, @Body() createGmlsDTO: GmlsDTO) {
    const gmls = await this.gmlsService.addGmls(createGmlsDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Gmls has been created successfully',
      gmls,
    });
  }

  @Get('gmls')
  async getAllGmls(@Res() res) {
    const gmls = await this.gmlsService.getAllGmls();
    return res.status(HttpStatus.OK).json(gmls);
  }

  @Get('gmls/:gmlsID')
  async getGmls(@Res() res, @Param('gmlsID') gmlsID) {
    const gmls = await this.gmlsService.getGmls(gmlsID);
    if (!gmls) throw new NotFoundException('id does not exist!');
    return res.status(HttpStatus.OK).json(gmls);
  }

  @Post('gtls/create')
  async addGtls(@Res() res, @Body() createGtlsDTO: createGtlsDto) {
    const gtls = await this.gtlsService.addGtls(createGtlsDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Gtls has been created successfully',
      gtls,
    });
  }

  @Get('gtls')
  async getAllGtls(@Res() res) {
    const gtls = await this.gtlsService.getAllGtls();
    return res.status(HttpStatus.OK).json(gtls);
  }

  @Get('gtls/:gtlsID')
  async getArticle(@Res() res, @Param('gtlsID') gtlsID) {
    const gtls = await this.gtlsService.getGtlsById(gtlsID);
    if (!gtls) throw new NotFoundException('id does not exist!');
    return res.status(HttpStatus.OK).json(gtls);
  }

  @Post('article/create')
  async addArticle(@Res() res, @Body() createArticleDTO: createArticlesDto) {
    const newArticle = await this.articleService.addArticles(createArticleDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Gtls has been created successfully',
      newArticle,
    });
  }

  @Get('article')
  async getAllArticles(@Res() res) {
    const articles = await this.articleService.getAllArticles();
    return res.status(HttpStatus.OK).json(articles);
  }

  @Get('article/:articleID')
  async getArticleById(@Res() res, @Param('articleID') articleID) {
    const article = await this.articleService.getArticlesById(articleID);
    if (!article) throw new NotFoundException('id does not exist!');
    return res.status(HttpStatus.OK).json(article);
  }

  @Get('article/cate/:cateID')
  async getArticlesByCates(@Res() res, @Param('cateID') cateID) {
    const articles = await this.articleService.getArticlesByCategories(cateID);
    return res.status(HttpStatus.OK).json(articles);
  }
}
