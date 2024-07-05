export type UserType = {
  username: string;
  password: string;
  role: "Rick" | "Morty";
};

export type UserPartial = Pick<UserType, "username" | "password">;
