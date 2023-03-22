import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary TitleStyle">
      <div className="container-fluid d-flex ">
        <Link id={styles.NavigationLogo} className="navbar-brand" href="/">
          Happy &#10084; Pawn
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/store">
                Store
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Order
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Pricing
                  </Link>
                </li>
                {/* Add get a guote inside pricing */}
                <li>
                  <Link className="dropdown-item" href="#">
                    Ordering process
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Terms of service
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    The Studio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Care guide
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {session ? (
                <Link className="nav-link" href="#" onClick={() => signOut()}>
                  Logout
                </Link>
              ) : (
                <Link className="nav-link" href="#" onClick={() => signIn()}>
                  Login
                </Link>
              )}
            </li>
            {session ? (
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  <Image
                    className={styles.logo}
                    src="/cart-icon.png"
                    alt="cart icon"
                    width={25}
                    height={20}
                    priority
                  />
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
