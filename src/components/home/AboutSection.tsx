
import { aboutList } from "@/src/api/aboutApi";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="Container my-8">
      

      <div className="grid lg:grid-cols-2 items-center  lg:gap-8 gap-4 py-4">
        <div className="">
          {aboutList.slice(2, 3).map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                alt={`About Image ${item.id}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </div>
        <div className="">
          <h2 className="text-2xl font-medium capitalize tracking-wider">Our Shop</h2>
          <div className="flex flex-col gap-2 mt-2 text-[#9D9D9D]">
            <p>
              Welcome to our shop! We offer a wide range of products to meet
              your needs. From the latest trends to timeless classics, we have
              something for everyone. Explore our collection and find your next
              favorite item.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, est?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum inventore praesentium animi reiciendis quam vero
              obcaecati voluptate eos dicta libero.
            </p>
          </div>
          <div className="mt-6">
            <button className="px-8 py-2 font-medium text-lg  bg-primary text-white cursor-pointer">
              Discover
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
