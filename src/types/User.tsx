export type UserRoles = "Rick" | "Morty" | "Visitor";

export const typeAdmin: UserRoles = "Rick";

export type UserType = {
  username: string;
  password: string;
  role: UserRoles;
};

export type UserPartial = Pick<UserType, "username" | "password">;
