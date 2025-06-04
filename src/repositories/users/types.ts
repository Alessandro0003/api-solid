export namespace Create {
  export type Args = {
    name: string;
    email: string;
    passwordHash: string;
  }
}

export namespace FindByEmail {
  export type Args = {
    email: string;
  }
}