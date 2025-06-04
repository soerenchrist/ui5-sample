using {com.sovanta.bookshop as my} from '../db/data-model';
using {ReviewService} from './external/ReviewService';

define service BooksService {
    entity Books   as projection on my.Books;
    entity Authors as projection on my.Authors;

    entity Reviews as
        projection on ReviewService.Reviews {
            key ID,
                slug,
                rating,
                text
        };
}
