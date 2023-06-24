import { gql } from '@apollo/client';
import { Book } from '../schemas/book';

export const BOOKS_QUERY = gql`
#graphql
  query Books {
    books {
      title
      author
    }
  }
`;

export interface BooksQuery {
  books: Book[];
}
