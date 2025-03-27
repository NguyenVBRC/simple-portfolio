import Container from "../common/Container";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Container>
      <h1 className={styles.heading}>
        Welcome. <br /> My name is Jimmy Nguyen.
      </h1>
      <p>I am a developer building whatever I find interesting.</p>
      <div className={styles.verticalLine}></div>
    </Container>
  );
};

export default Hero;
