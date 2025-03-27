import PageLayout from "@/components/common/PageLayout";

export default async function Page() {
  const heading = "Projects";
  const projects = [
    { name: "Projects 1", url: "/projects/projects-1" },
    { name: "Projects 2", url: "/projects/projects-2" },
    { name: "Projects 3", url: "/projects/projects-3" },
  ];

  return <PageLayout heading={heading} content={projects} />;
}
