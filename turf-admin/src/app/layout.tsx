"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const IsAuthenticated = (
  WrappedComponent: React.ComponentType,
  publicRoutes: string[] = []
) => {
  return (props: any) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("jwtToken");

        // const isTokenExpired = (token: string) => {
        //   try {
        //     const decoded: any = JSON.parse(atob(token.split(".")[1]));
        //     const currentTime = Date.now() / 1000;
        //     return decoded.exp < currentTime;
        //   } catch (error) {
        //     return true;
        //   }
        // };

        if (!publicRoutes.includes(pathname)) {
          // if (!token || isTokenExpired(token)) {
          //   router.push("/login");
          // }
          if (!token) {
            router.push("/login");
          }
        }
      }
    }, [router, pathname, publicRoutes]);

    return <WrappedComponent {...props} />;
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publicRoutes = ["/login", "/register"];
  const AuthenticatedComponent = IsAuthenticated(
    () => <>{children}</>,
    publicRoutes
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <AuthenticatedComponent />
      </body>
    </html>
  );
}
