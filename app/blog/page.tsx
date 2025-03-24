import PageHeading from "@/components/ContentLayout";

export default async function Page() {
  const heading = "Blogs";
  const blogs = [
    { name: "Blog 1", url: "/blog/blog-1" },
    { name: "Blog 2", url: "/blog/blog-2" },
    { name: "Blog 3", url: "/blog/blog-3" },
  ];

  return <PageHeading heading={heading} content={blogs} />;
}
