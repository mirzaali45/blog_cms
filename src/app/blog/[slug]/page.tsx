import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { getBlogs, getBlogsSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import {
  documentToReactComponents,
  //   Options,
} from "@contentful/rich-text-react-renderer";
// import { BLOCKS } from "@contentful/rich-text-types";
// import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogsSlug(params.slug);
  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogsSlug(params.slug);

  //   const options: Options = {
  //     renderNode: {
  //       [BLOCKS.OL_LIST]: (node, children) => <ol type="1">{children}</ol>,
  //     },
  //   };
  //   console.log(blog);
  return (
    <Wrapper>
      <div className="flex mt-12 w-full">
        <div className="flex-[2]">
          <Link
            className="md:flex items-center space-x-6 font-display relative inline-block text-gray-800 font-semibold 
                       hover:text-gray-600 transition-colors duration-300
                       before:content-[''] before:absolute before:-bottom-1 
                       before:left-0 before:w-0 before:h-[2px] before:bg-gray-800
                       before:transition-all before:duration-300 
                       hover:before:w-full"
            href={"/"}
          >
            Kembali
          </Link>
          <ShareButton slug="{blog.fields.slug}" />
        </div>
        <div className="flex-[5] box-content pr-56 max-md:pr-0">
          <div className="text-xl font-semibold text-green-600 uppercase">
            {blog.fields.category}
          </div>
          <div className="mt-3 lg:text-2xl mb-3">{blog.fields.title}</div>
          <div className="gap-1 flex">
            <span className="font-semibold text-green-950">
              {blog.fields.author.fields.name}
            </span>
            <span>•</span>
            <span>{blog.fields.date}</span>
          </div>
          <div className="md:hidden">
            <ShareButton slug="{blog.fields.slug}" />
          </div>
          <div className="">
            <img
              className="w-full mt-3"
              src={blog.fields.thumbnail.fields.file.url}
              alt={blog.fields.title}
            />
          </div>
          <div className="justify-center">
            {documentToReactComponents(blog.fields.content)}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
