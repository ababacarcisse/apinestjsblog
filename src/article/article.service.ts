import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
    getHello(): string {
        return 'bonjours!';
    }
}
