import type { GetValues } from "@nextjs-strapi-blog/backend";

export default function StrapiWysiwig(props: GetValues<"block.wysiwig">) {
  return <div>{props.content}</div>;
}
