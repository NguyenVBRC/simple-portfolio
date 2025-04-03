import Container from "../Container";
import Link from "next/link";
import styles from "./PageLayout.module.css";
import { supabase } from "@/lib/supabase";

interface IContent {
  name: string;
  link: string;
}

// Default Page Layout
// Uses Common Container and maps items

async function getPublicUrl(filepath: string) {
  const { data } = supabase.storage.from("project-img").getPublicUrl(filepath);
  return data.publicUrl;
}

const PageLayout = async ({
  heading,
  content,
}: {
  heading: string;
  content: IContent[];
}) => {
  const thumbnail = await getPublicUrl("powder.jpg");

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
                <img src={thumbnail} className={styles.thumbnails} />
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
