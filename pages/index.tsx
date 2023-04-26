import { useQuery } from "@apollo/client";
import { BOOKS_QUERY, BooksQuery } from "../graphql/queries/books.query";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <main>
      {JSON.stringify(data)}
    </main>
  )
}

export default Home;
