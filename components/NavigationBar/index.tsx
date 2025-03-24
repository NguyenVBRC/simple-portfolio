import Link from "next/link";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <div className={styles.navContainer}>
      {links.map(({ name, href }, index) => {
        return (
          <Link key={index} href={href}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationBar;
