import { z } from "zod";
import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import addProductSchema from "@/schemas/addProduct.schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AddProductForm from "@/sections/addProduct/AddProductForm";
import AddProductPreview from "@/sections/addProduct/AddProductPreview";

const AddProduct = () => {
    const [keyFeatures, setKeyFeatures] = useState<string[]>(["Hello", "Jello"]);
    const [images, setImages] = useState<File[]>([]);
    const [imagesPreview, setImagesPreview] = useState<string[]>([]);



    const form = useForm<z.infer<typeof addProductSchema>>({
        resolver: zodResolver(addProductSchema),
        defaultValues: {
            name: "Kashmiri apple",
            description: "qdcqedc qyuwgey qwgh qwhcj kwhj",
            price: "111",
            stock: "23",
            keyFeatures: "",
            category: "",
            unit: ""
        },
    });

    const {
        getValues,
        setValue,
        watch
    } = form;

    const name = watch("name");
    const description = watch("description");
    const price = watch("price");
    const unit = watch("unit");


    return (
        <Container>
            <div className="my-5 flex flex-col gap-5">
                <PageHeading text="Add Product" />
                <div className="my-5 flex gap-3">
                    <div className="w-[60%]">
                        <AddProductForm
                            form={form}
                            setValue={setValue}
                            getValues={getValues}
                            images={images}
                            imagesPreview={imagesPreview}
                            setImagesPreview={setImagesPreview}
                            keyFeatures={keyFeatures}
                            setKeyFeatures={setKeyFeatures}
                            setImages={setImages}
                        />
                    </div>
                    <div className="w-[40%]">
                        <AddProductPreview
                            imagesPreview={imagesPreview}
                            description={description}
                            name={name}
                            price={price}
                            unit={unit}
                            images={images}
                            keyFeatures={keyFeatures}
                        />
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default AddProduct;