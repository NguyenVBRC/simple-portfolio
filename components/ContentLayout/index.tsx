import Link from "next/link";
import styles from "./ContentLayout.module.css";

interface IContent {
  name: string;
  url: string;
}

const ContentLayout = ({
  heading,
  content,
}: {
  heading: string;
  content: IContent[];
}) => {
  return (
    <div className={styles.layoutContainer}>
      <h1>{heading}</h1>
      <div className={styles.contentContainer}>
        {content?.map(({ name, url }, index) => {
          return (
            <Link key={index} className={styles.itemContainer} href={url}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentLayout;
