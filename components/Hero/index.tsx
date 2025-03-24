import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Welcome. <br /> My name is Jimmy Nguyen.
      </h1>
      <p>I am a developer building whatever I find interesting.</p>
    </div>
  );
};

export default Hero;
