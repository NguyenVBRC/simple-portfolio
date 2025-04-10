"use client";

import { useState } from "react";
import styles from "./portfolioButtons.module.css";

const PortfolioButtons = () => {
  const buttons = [
    {
      name: "Resume Button",
      link: "/simple-resume.pdf",
      initial: "CV",
    },
    {
      name: "LinkedIn Button",
      link: "https://www.linkedin.com/in/jimmynguyendev/",
      initial: "LI",
    },
    {
      name: "GitHub Button",
      link: "https://github.com/NguyenVBRC",
      initial: "GH",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const downloadResume = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <div className={styles.buttonContainer}>
      {buttons.map(({ name, link, initial }, index) => (
        <div className={styles.singleButton} key={index}>
          {name.includes("Resume") ? (
            <div className={styles.resumeButton} onClick={downloadResume}>
              {initial}
            </div>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {initial}
            </a>
          )}
        </div>
      ))}
      <a
        className={`${styles.modal} ${showModal ? styles.showModal : ""}`}
        href="/simple-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume Button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default PortfolioButtons;
