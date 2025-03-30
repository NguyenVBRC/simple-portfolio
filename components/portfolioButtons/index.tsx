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
      link: "/",
      initial: "LI",
    },
    {
      name: "GitHub Button",
      link: "/",
      initial: "GH",
    },
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map(({ name, link, initial }, index) => (
        <div className={styles.singleButton} key={index}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            {...(name.includes("Resume") ? { download: "" } : {})}
          >
            {initial}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioButtons;
