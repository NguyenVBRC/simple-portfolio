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
  const { data: blogs, error } = await supabase.from("Blogs").select("*");

  if (error) {
    redirect("/blog");
  }

  const isValid = blogs.some((blog) => blog.thumbnail_url === imgSrc);

  if (!isValid) {
    redirect("/blog");
  }
  return <SlugLayout imgSrc={imgSrc} />;
}
