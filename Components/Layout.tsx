import React from "react";
import Navbar from "./Navigation/navbar";
import styles from "@/styles/MainLayout.module.css";

interface Props {
  children: JSX.Element;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div id={styles.MainLayout}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
