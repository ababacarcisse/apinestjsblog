import { Module } from '@nestjs/common';
import { ArticleModule } from './article/article.module';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';


@Module({
  imports: [ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
