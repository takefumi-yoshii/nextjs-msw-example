import React from "react";
import useSWR from "swr";
import type { Source } from "../../../types";

export const Card = () => {
  const { data, error } = useSWR<Source>("csr", () =>
    fetch("https://myapi.dev/csr").then((res) => res.json())
  );
  if (error) return <>error!</>;
  if (!data) return <>...loading</>;
  return (
    <div>
      <h2 role="title">{data.title}</h2>
      <p>{data.text}</p>
    </div>
  );
};
