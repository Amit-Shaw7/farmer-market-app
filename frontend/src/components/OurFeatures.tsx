import { ourFeatures } from "@/constants/our-fearures";
import Image from "next/image";
import React from "react";

const OurFeature = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-lg font-medium">Why shop from us?</p>
      <div className="flex flex-col gap-5">
        {
          ourFeatures.map((feature) => (
            <div key={feature.title} className="flex items-center gap-10">
              <Image
                src={feature.image}
                alt={feature.title}
                width={50}
                height={50}
              />
              <div>
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OurFeature;