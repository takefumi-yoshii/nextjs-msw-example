import React from "react";
import useSWR from "swr";
import type { Review } from "../../../types";

export const Card = () => {
  const { data, error } = useSWR<Review[]>("reviews", () =>
    fetch("https://my.backend/book/reviews").then((res) => res.json())
  );
  if (error) return <>error!</>;
  if (!data) return <>...loading</>;
  return (
    <ul>
      {data.map((review) => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.text}</p>
        </li>
      ))}
    </ul>
  );
};
