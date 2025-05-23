import { Request, Response } from 'express';
import { IPaginationQuery } from '../types/book.types';
declare const _default: {
    getBooks: (req: Request<{}, {}, {}, IPaginationQuery>, res: Response) => Promise<void>;
    getBook: (req: Request, res: Response) => Promise<void>;
    createBooks: (req: any, res: Response) => Promise<void>;
    deleteBook: (req: Request, res: Response) => Promise<void>;
};
export default _default;
//# sourceMappingURL=booksController.d.ts.map