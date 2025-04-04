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
  const decodedSlug = decodeURIComponent(slug);

  return (
    <div className={styles.layoutContainer}>
      <Container>
        <img
          src={`https://oqlmrimsozkgnuflqjul.supabase.co/storage/v1/object/public/project-img//${decodedSlug.toLowerCase()}.png`}
        />
      </Container>
    </div>
  );
};

export default SlugLayout;
