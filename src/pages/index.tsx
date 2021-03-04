import { useState } from "react";
import { Card } from "../components/organisms/Card";

export default function Home({ book }) {
  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <Card />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://my.backend/book");
  const book = await res.json();
  return {
    props: {
      book,
    },
  };
}
