import Container from "../Container";
import styles from "./SlugLayout.module.css";

// Default Slug Layout
// Uses Common Container to display one item

const SlugLayout = async ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className={styles.layoutContainer}>
      <Container>
        <img src={imgSrc} />
      </Container>
    </div>
  );
};

export default SlugLayout;
