
export namespace Register {
  export type Request = {
    email: string;
    password: string;
    name: string;
  };

  export type Response = Record<string, never>;
}