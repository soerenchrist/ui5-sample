using {com.sovanta.bookshop as my} from '../db/data-model';

define service BooksService {
    entity Books   as projection on my.Books;
    entity Authors as projection on my.Authors;
}
