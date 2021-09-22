import { greet } from "#/sample/greet";

describe("greet", (): void => {
  test("greet", (): void => {
    const result = greet("Test");
    expect(result).toBe("Hello Test!");
  });
});
