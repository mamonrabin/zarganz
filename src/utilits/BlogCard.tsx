import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ceoImage from "@/src/assets/blogs/avatar-1.png";
import { TBlog } from "../types";

interface blogProps {
  blog:TBlog
}


const BlogCard:React.FC<blogProps> = ({ blog }) => {
  return (
    <div className="relative group inline-flex flex-col rounded border border-[#7D60F9]/20  transition-all duration-300  bg-white ">
      {/* Card Image */}
      <div className="relative overflow-hidden">
        <Image
          src={blog.image}
          width={500}
          height={500}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />

        {/* Category Tag */}
        <Link
          href={`blog/${blog.id}`}
          className="absolute top-3 left-3 z-10 bg-indigo-50 border-2 border-white text-indigo-600 text-xs font-semibold uppercase rounded px-3 py-1"
        >
          {blog.category}
        </Link>
      </div>

      {/* Card Body */}
      <div className="p-6  bg-white">
        <h3 className="text-base uppercase font-semibold mb-3 line-clamp-1 transition">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{blog.text}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#7B5DF8]/20">
          <div className="flex items-center">
            <Link href={`blog/${blog.id}`}>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={ceoImage}
                  alt="author"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </Link>
            <Link href={`blog/${blog.id}`}>
              <div className="ml-3">
                <h6 className="text-sm font-medium">{blog.author}</h6>
                <p className="text-xs text-gray-500">
                  {/* {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })} */}
                  {blog.date}
                </p>
              </div>
            </Link>
          </div>
          <Link href={`blog/${blog.id}`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border group-hover:bg-[#4f39f6] group-hover:text-white duration-500 border-[#7B5DF8]/20 bg-white text-[#7B5DF8]/50">
              <ArrowUpRight />
            </div>
          </Link>
        </div>
      </div>

      {/* Invisible overlay link */}
      <Link href={`blog/${blog.id}`} className="absolute inset-0 z-0" />
    </div>
  );
};

export default BlogCard;
