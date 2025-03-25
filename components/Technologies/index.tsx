import styles from "./Technologies.module.css";

const Technologies = () => {
  const tech = [
    "Amazon Web Services",
    "Next.js",
    "TypeScript",
    "Git",
    "React",
    "Nuxt3",
    "Vue3",
  ];

  return (
    <div className={styles.container}>
      <h2>Technologies</h2>
      <div className={styles.techContainer}>
        {tech.map((item, index) => (
          <div key={index} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
