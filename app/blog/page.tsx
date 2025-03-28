import PageLayout from "@/components/common/PageLayout";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const heading = "Blogs";
  const { data: posts, error } = await supabase.from("Posts").select("*");

  if (error) {
    console.error("Error fetching posts:", error);
    return <p>Failed to load posts.</p>;
  }

  return <PageLayout heading={heading} content={posts} />;
}
