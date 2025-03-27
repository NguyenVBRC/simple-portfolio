import Container from "../Container";
import styles from "./SlugLayout.module.css";

// Default Slug Layout
// Uses Common Container to display one item

const SlugLayout = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div className={styles.layoutContainer}>
      <h1>{slug}</h1>
      <Container>
        <p>Content to be pulled using params</p>
      </Container>
    </div>
  );
};

export default SlugLayout;
