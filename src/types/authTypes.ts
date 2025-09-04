export type AuthUser = {
  email: string | null;
  username: string | null;
};
export type AuthContextType = {
  currentUser: AuthUser | null;
};