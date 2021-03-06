import Image from "next/image";
import Link from "next/link";

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props: any) {
  return (
    <div className="flex bg-gray-200 dark:bg-gray-800 rounded-lg p-4 mt-4">
      <div className="flex items-center w-4 mr-8">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
};

export default MDXComponents;
