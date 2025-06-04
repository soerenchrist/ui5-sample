using {
    cuid,
    managed
} from '@sap/cds/common';

namespace com.sovanta.bookshop;

entity Books : cuid, managed {
    title  : String                      @mandatory;
    slug   : String                      @mandatory;
    author : Association to one Authors  @mandatory  @assert.target;
    price  : Double                      @mandatory;
    pages  : Int32                       @mandatory;
};

entity Authors : cuid, managed {
    name : String @mandatory;
};
