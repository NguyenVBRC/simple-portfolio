import Container from "../Container";
import Link from "next/link";
import styles from "./PageLayout.module.css";

interface IContent {
  name: string;
  link: string;
  thumbnail_url: string;
}

// Default Page Layout
// Uses Common Container and maps items

const PageLayout = async ({
  heading,
  content,
}: {
  heading: string;
  content: IContent[];
}) => {
  return (
    <div className={styles.layoutContainer}>
      <h1>{heading}</h1>
      <Container>
        {content.length > 0 ? (
          content?.map(({ name, thumbnail_url }, index) => {
            return (
              <Link
                className={styles.itemContainer}
                key={index}
                href={`/projects/${name}`}
              >
                <p>{name}</p>
                <div className={styles.imgContainer}>
                  <img src={thumbnail_url} className={styles.thumbnails} />
                </div>
              </Link>
            );
          })
        ) : (
          <p>Nothing here</p>
        )}
      </Container>
    </div>
  );
};

export default PageLayout;
