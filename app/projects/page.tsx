import PageLayout from "@/components/common/PageLayout";
import { supabase } from "@/lib/supabase";

// To do: Add preview image to projects

export default async function Page() {
  const heading = "Projects";
  const { data: projects, error } = await supabase.from("Projects").select("*");

  if (error) {
    console.error("Error fetching posts:", error);
    return <p>Failed to load posts.</p>;
  }

  return <PageLayout heading={heading} content={projects} />;
}
