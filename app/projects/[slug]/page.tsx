import SlugLayout from "@/components/common/SlugLayout";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <SlugLayout params={params}></SlugLayout>;
}
