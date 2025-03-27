import React, { ReactNode } from "react";
import styles from "./Container.module.css";

// Default Container
// Use to avoid rewriting

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
