export interface IBook {
  title: string;
  author: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  category: string;
}

export interface ICreateBookRequest {
  title: string;
  author: string;
  description: string;
  image?: string;
  price: string | number; // Del form-data viene como string
  stock: string | number;
  category: string;
}

export interface IPaginationQuery {
  page?: string;
  limit?: string;
  category?: string;
  author?: string;
  minPrice?: string;
  maxPrice?: string;
}

export interface IPaginationResponse {
  books: IBook[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalBooks: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}