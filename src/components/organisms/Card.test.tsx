import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { cache } from "swr";
import { server } from "../../../.mocks/server";
import { Card } from "./Card";

beforeEach(() => cache.clear());
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("MSW and useSWR are in connect.", async () => {
  render(<Card />);
  await waitFor(() => screen.getByRole("title"));
  expect(screen.getByRole("title")).toHaveTextContent("CSR Source");
});
