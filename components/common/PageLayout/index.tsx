import Container from "../Container";
import Link from "next/link";
import styles from "./PageLayout.module.css";

interface IContent {
  name: string;
  link: string;
}

// Default Page Layout
// Uses Common Container and maps items

const PageLayout = ({
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
          content?.map(({ name, link }, index) => {
            return (
              <Link
                key={index}
                className={styles.itemContainer}
                href={link}
                target="blank"
              >
                {name}
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
