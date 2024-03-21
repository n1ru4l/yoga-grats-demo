/** @gqlType */
type Query = unknown;

/** @gqlField */
export function hello(_: Query): string {
  return "Hello world!";
}

/** @gqlField */
export async function expensive(_: Query): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new User();
}

/** @gqlType */
class User {
  /** @gqlField */
  id: string = "1";
  constructor() {}

  /** @gqlField */
  async name(): Promise<string> {
    console.log("OIOIOI");
    return "John Doe";
  }
}
