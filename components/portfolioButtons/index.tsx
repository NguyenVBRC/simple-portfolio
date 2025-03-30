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

  return (
    <div className={styles.buttonContainer}>
      {buttons.map(({ name, link, initial }, index) => (
        <div className={styles.singleButton} key={index}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            {...(name.includes("Resume") ? { download: "" } : {})}
            aria-label={name}
          >
            {initial}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PortfolioButtons;
