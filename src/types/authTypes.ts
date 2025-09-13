export type AuthUser = {
  uid: string;
  email: string | null;
  username: string | null;
  id?: number | null;
};
export type AuthContextType = {
  currentUser: AuthUser | null;
};