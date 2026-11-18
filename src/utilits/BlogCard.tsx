
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ceoImage from "@/src/assets/blogs/avatar-1.png";
import { TBlog } from "../types";

interface BlogCardProps {
  blog: TBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const blogUrl = `/blog/${blog.id}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#AC0000]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

      {/* Image */}
      <div className="relative overflow-hidden p-3 pb-0">
        <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Category */}
          <div className="absolute left-4 top-4">
            <span className="rounded-md bg-white/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#AC0000] backdrop-blur-sm">
              {blog.category}
            </span>
          </div>

          {/* Floating Arrow */}
          <Link
            href={blogUrl}
            aria-label={`Read ${blog.title}`}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#AC0000] shadow-lg transition-all duration-300 hover:bg-[#AC0000] hover:text-white"
          >
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">

        {/* Meta */}
        <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-gray-400">
          <CalendarDays size={13} className="text-[#AC0000]" />
          <span>{blog.date}</span>
          <span className="mx-1 h-1 w-1 rounded-full bg-gray-300" />
          <span>Journal</span>
        </div>

        {/* Title */}
        <Link href={blogUrl}>
          <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-snug tracking-tight text-[#202020] transition-colors duration-300 group-hover:text-[#AC0000]">
            {blog.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="line-clamp-3 text-[13px] leading-6 text-gray-500">
          {blog.text}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-6">
          <div className="mb-5 h-px w-full bg-gray-100" />

          <div className="flex items-center justify-between gap-3">

            {/* Author */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-gray-100">
                <Image
                  src={ceoImage}
                  alt={blog.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-[#202020]">
                  {blog.author}
                </p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-widest text-gray-400">
                  Article Author
                </p>
              </div>
            </div>

            {/* Read More */}
            <Link
              href={blogUrl}
              className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#AC0000] transition-all hover:gap-2.5"
            >
              Explore
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
