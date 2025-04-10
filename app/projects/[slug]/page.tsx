import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import SlugLayout from "@/components/common/SlugLayout";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const imgSrc = `https://oqlmrimsozkgnuflqjul.supabase.co/storage/v1/object/public/project-img//${decodedSlug.toLowerCase()}.png`;
  const { data: projects, error } = await supabase.from("Projects").select("*");

  if (error) {
    console.error("Error fetching projects:", error);
    return <p>Failed to load projects.</p>;
  }

  const isValid = projects.some((project) => project.thumbnail_url === imgSrc);

  if (!isValid) {
    redirect("/projects");
  }

  return <SlugLayout imgSrc={imgSrc} />;
}
