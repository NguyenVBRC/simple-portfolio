import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Container from "@/components/common/Container";
import styles from "./page.module.css";
import Image from "next/image";

export interface IDetails {
  id: number;
  created: string;
  named: string;
  link: string;
  thumbnail_url: string;
  technologies: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const imgSrc = `https://oqlmrimsozkgnuflqjul.supabase.co/storage/v1/object/public/project-img//${decodedSlug.toLowerCase()}.png`;
  let projectDetails: IDetails = {
    id: 0,
    created: "string",
    named: "string",
    link: "string",
    thumbnail_url: "string",
    technologies: "string",
  };
  const { data: projects, error } = await supabase.from("Projects").select("*");

  if (error) {
    console.error("Error fetching projects:", error);
    return <p>Failed to load projects.</p>;
  }

  const isValid = projects.some((project) => {
    if (project.thumbnail_url === imgSrc) {
      projectDetails = project;
      return true;
    }
  });

  if (!isValid) {
    redirect("/projects");
  }

  console.log(projectDetails);

  return (
    <div className={styles.layoutContainer}>
      <Container>
        <img src={projectDetails.thumbnail_url} />
        <Image src={projectDetails.thumbnail_url} alt={projectDetails.named} />
        <h2>Technologies</h2>
        <p>{projectDetails.technologies}</p>
      </Container>
    </div>
  );
}
