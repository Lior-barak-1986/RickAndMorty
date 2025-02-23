export type UserRoles = "Rick" | "Morty" | "Visitor";

export const typeAdmin: UserRoles = "Rick";
export const typeVisitor: UserRoles = "Visitor";

export interface UserType {
  username: string;
  password: string;
  role: UserRoles;
}

export type UserPartial = Pick<UserType, "username" | "password">;
