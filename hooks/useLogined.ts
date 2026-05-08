// hooks/useIsLogin.ts
'use client';

import { getCookie } from "@/utils/cookie/get";
import { useEffect, useState } from "react";

interface UseIsLoginReturn {
  isLogin: boolean;
  isLoading: boolean;
  username: string | null;
}

const useIsLogin = (): UseIsLoginReturn => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = getCookie("username");
      setUsername(user);
      setIsLogin(!!user);
      setIsLoading(false);
    }
  }, []);

  return { isLogin, isLoading, username };
};

export default useIsLogin;