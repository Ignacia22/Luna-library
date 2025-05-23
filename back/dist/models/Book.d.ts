import mongoose from 'mongoose';
declare const Book: mongoose.Model<{
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category: string;
}, {}> & {
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
}, {
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category: string;
}>, {}> & mongoose.FlatRecord<{
    title: string;
    author: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Book;
//# sourceMappingURL=Book.d.ts.map