import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { dummy } from "@/development/dummy";
import { CheckCircle, IndianRupee } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface AddProductPreviewProps {
    name: string;
    description: string;
    price: string;
    unit: string;
    images: File[];
    keyFeatures: string[];
    imagesPreview: string[]
}

const AddProductPreview = ({ name, description, price, unit, images, keyFeatures , imagesPreview }: AddProductPreviewProps) => {
    return (
        <div>
            <SectionHeading text="Preview" />
            <Card
                className="shadow-none p-5 my-3 space-y-4"
            >
                {
                    images?.length > 0
                        ?
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            {
                                imagesPreview?.map((image) => (
                                    <SwiperSlide>
                                        <img
                                            src={image}
                                            className="w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        :
                        <img
                            src={dummy}
                            className="w-[350px] h-[350px] object-cover mx-auto"
                        />
                }

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-medium">{name}</h1>
                    <p className="text-md text-muted-foreground">{description}</p>
                </div>

                <div className="flex gap-2 items-start ">
                    <IndianRupee size={14} className="items-start" />
                    <div className="flex gap-[2px]">
                        <h2 className="text-xl leading-5 font-medium ">{price}</h2>
                        <span className="text-xs font-medium self-end">{unit ? "/ " : ""}</span>
                        <span className="text-xs font-medium self-end">{unit}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    {
                        keyFeatures && keyFeatures.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <CheckCircle color="green" />
                                <h3 className="text-lg font-medium">{feature}</h3>
                            </div>
                        ))
                    }
                </div>
            </Card>
        </div>
    );
};

export default AddProductPreview;