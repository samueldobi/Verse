export type AuthUser = {
  id: number;
  uid: string;
  email: string;
  name: string;
};
export type AuthContextType = {
  currentUser: AuthUser | null;
  login: (email: string, password: string) => Promise<unknown>;
  register: (name: string, email: string, password: string) => Promise<unknown>;
  logout: () => void;
};
