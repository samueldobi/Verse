"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { AuthContextType, AuthUser } from "@/types/authTypes";
import axios from "axios";

const noop = async () => undefined as unknown;

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: noop,
  register: noop,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("verse_token");
}

function setToken(token: string | null) {
  if (!token) {
    localStorage.removeItem("verse_token");
  } else {
    localStorage.setItem("verse_token", token);
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  const fetchUser = useCallback(async () => {
    const token = getToken();
    if (!token) {
      setCurrentUser(null);
      return;
    }
    try {
      const res = await axios.get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCurrentUser(res.data);
    } catch {
      setToken(null);
      setCurrentUser(null);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (email: string, password: string) => {
    const res = await axios.post("/api/auth/login", { email, password });
    setToken(res.data.token);
    setCurrentUser(res.data.user);
    return res.data;
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await axios.post("/api/auth/register", { name, email, password });
    setToken(res.data.token);
    setCurrentUser(res.data.user);
    return res.data;
  };

  const logout = () => {
    setToken(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
