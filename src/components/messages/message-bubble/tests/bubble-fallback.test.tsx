import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MessageBubble from "..";

const [loaderTestId] = ["loader"];

vi.mock("../../../loader", () => ({
  default: () => <div data-testid={loaderTestId}>Loading...</div>,
}));
vi.mock("React", () => ({
  ...vi.importActual("React"),
  Suspense: ({ fallback }: { fallback: JSX.Element }) => fallback,
}));

describe("Bubble", async () => {
  it("should show a loading spinner if it is loading by promise", async () => {
    const wrapper = render(
      await MessageBubble({ promiseText: Promise.resolve("Bubble text") })
    );
    expect(wrapper.getByTestId(loaderTestId)).toBeDefined();
  });
});
