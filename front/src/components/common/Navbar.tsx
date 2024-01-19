import type { ComponentProps } from "react";
import { NavLink, Link } from "react-router-dom";

import { navLinks } from "../../lib/constants";
import { cn } from "../../lib/utils";
import logo from "/logo.png";
import useAuth from "../../hooks/useAuth";

type NavbarProps = ComponentProps<"div">;
const Navbar = ({ className }: NavbarProps) => {
  const { auth, setAuth } = useAuth();

  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    setAuth({ logged: false });
  };

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full justify-around border-[#e5e7eb]",
        className,
      )}
    >
      <div className="flex h-20 items-center gap-14">
        <Link to="/">
          <img src={logo} alt="Logo Image" />
        </Link>
        <ul className="relative flex font-semibold">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.url}
                className={cn(
                  "border-t-indigo-900 px-5 py-6.5 text-indigo-800 hover:border-t-4 hover:text-indigo-900",
                  ({ isActive }: { isActive: boolean }) =>
                    isActive ? "text-indigo-900" : "text-indigo-800",
                )}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {auth.logged ? (
            <NavLink
              to="/"
              onClick={logout}
              className={cn(
                "border-t-indigo-900 px-5 text-indigo-800 hover:border-t-4 hover:text-indigo-900",
                ({ isActive }: { isActive: boolean }) =>
                  isActive ? "text-indigo-900" : "text-indigo-800",
              )}
            >
              خروج
            </NavLink>
          ):(
            <NavLink
              to="/login"
              className={cn(
                "border-t-indigo-900 px-5 text-indigo-800 hover:border-t-4 hover:text-indigo-900",
                ({ isActive }: { isActive: boolean }) =>
                  isActive ? "text-indigo-900" : "text-indigo-800",
              )}
            >
              دخول
            </NavLink>
          )}
        </ul>
      </div>
      <Link
        to="register"
        className="self-center rounded-full border-black bg-indigo-800 px-6 py-2.5 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-900"
      >
        أنشىء متجرك اﻵن
      </Link>
    </div>
  );
};

export default Navbar;
