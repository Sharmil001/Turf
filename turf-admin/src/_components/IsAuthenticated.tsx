"use client"
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const IsAuthenticated = (WrappedComponent: React.ComponentType, publicRoutes: string[] = []) => {
  return (props: any) => {
    const router = useRouter();
    const pathname = usePathname(); 

    useEffect(() => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("jwtToken");

        const isTokenExpired = (token: string) => {
          try {
            const decoded: any = JSON.parse(atob(token.split(".")[1]));
            const currentTime = Date.now() / 1000;
            return decoded.exp < currentTime;
          } catch (error) {
            return true;
          }
        };

        if (!publicRoutes.includes(pathname)) {
          if (!token || isTokenExpired(token)) {
            router.push("/login");
          }
        }
      }
    }, [router, pathname, publicRoutes]);

    return <WrappedComponent {...props} />;
  };
};

export default IsAuthenticated;
