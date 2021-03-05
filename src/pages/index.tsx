import type { GetServerSideProps } from "next";
import React from "react";
import type { Source } from "../../types";
import { Card } from "../components/organisms/Card";

type Props = {
  data: Source;
};

const Home = (props: Props) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.text}</p>
      <Card />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data: Source = await fetch("https://myapi.dev/ssr").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
};

export default Home;
