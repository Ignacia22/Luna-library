import { IBook, ICreateBookRequest, IPaginationQuery, IPaginationResponse } from '../types/book.types';
declare const _default: {
    getBooks: (queryParams?: IPaginationQuery) => Promise<IPaginationResponse>;
    getBook: (id: string) => Promise<IBook | null>;
    createBooks: (book: ICreateBookRequest | any) => Promise<IBook>;
    deleteBook: (id: string) => Promise<any | null>;
};
export default _default;
//# sourceMappingURL=bookServices.d.ts.map