import Container from "../Container";
import Link from "next/link";
import styles from "./PageLayout.module.css";

interface IContent {
  name: string;
  url: string;
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
        {content?.map(({ name, url }, index) => {
          return (
            <Link key={index} className={styles.itemContainer} href={url}>
              {name}
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default PageLayout;
