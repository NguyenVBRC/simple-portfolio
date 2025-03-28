import Container from "../common/Container";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Container>
      <div className={styles.heroContainer}>
        <div className={styles.borderLineTopLeft}></div>
        <div className={styles.borderLineTopRight}></div>
        <div className={styles.borderLineBottomLeft}></div>
        <div className={styles.borderLineBottomRight}></div>
        <h1 className={styles.heading}>
          Welcome. <br /> My name is Jimmy Nguyen.
        </h1>
        <p>I am a developer building whatever I find interesting.</p>
      </div>
      <div className={styles.verticalLine}></div>
    </Container>
  );
};

export default Hero;
