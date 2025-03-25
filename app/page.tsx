import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Technologies />
    </div>
  );
}
