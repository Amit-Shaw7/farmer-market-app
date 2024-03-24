import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImagePlus, X } from "lucide-react";
import { UseFormGetValues, UseFormReturn, UseFormSetValue } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import addProductSchema from "@/schemas/addProduct.schema";
import * as z from "zod";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { CustomResponse } from "@/types";
import { createProduct } from "@/apiCalls/products";
import { productUnits } from "@/constants/util";
import Loading from "@/components/Loading";

interface AddProductFormProps {
    setImages: React.Dispatch<React.SetStateAction<File[]>>,
    setImagesPreview: React.Dispatch<React.SetStateAction<string[]>>,
    images: File[],
    imagesPreview: string[],
    keyFeatures: string[],
    setKeyFeatures: React.Dispatch<React.SetStateAction<string[]>>,
    form: UseFormReturn<{
        name: string;
        description: string;
        price: string;
        category: string;
        unit: string;
        keyFeatures?: string;
        stock: string;
    }, any, undefined>,
    getValues: UseFormGetValues<{
        name: string;
        description: string;
        price: string;
        category: string;
        unit: string;
        keyFeatures?: string;
        stock: string;
    }>,
    setValue: UseFormSetValue<{
        name: string;
        description: string;
        price: string;
        category: string;
        unit: string;
        keyFeatures?: string;
        stock: string;
    }>
}


const AddProductForm = ({ setImages, images, keyFeatures, setKeyFeatures, form, getValues, setValue, setImagesPreview, imagesPreview }: AddProductFormProps) => {
    const { productCategoriesWhichCanBeSold } = useSelector((state: RootState) => state.user);
    const [loading, setLoading] = useState(false);
    const [showOutline, setShowOutline] = useState(false);


    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const files = event?.target?.files;

        if (files) {
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
            setImagesPreview([...imagesPreview, ...newImages]);
            setImages([...images, ...files]);
        }
    }

    const addFeature = () => {
        const features = getValues("keyFeatures");
        if (!features) return;
        setKeyFeatures([...keyFeatures, features]);
        setValue("keyFeatures", "");
    }

    const removeImg = (index: number) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    }

    const removeFeature = (index: number) => {
        const newFeatures = [...keyFeatures];
        newFeatures.splice(index, 1);
        setKeyFeatures(newFeatures);
    }


    const toggleStyle = (val: boolean): void => {
        setShowOutline(val);
    };

    const onSubmit = async (values: z.infer<typeof addProductSchema>) => {
        // alternative of loader 
        setLoading(true);

        if (!images || images.length === 0) {
            return;
        }
        if (!keyFeatures || keyFeatures.length === 0) {
            return;
        }
        const data = {
            name: values.name,
            description: values.description,
            price: values.price,
            category: values.category,
            unit: values.unit,
            stock: values.stock
        }

        const response: CustomResponse | undefined = await createProduct(data, images, keyFeatures);
        if (response?.status === 201) {
            alert("Product added successfully");
        } else {
            alert(response?.msg);
        }
        setLoading(false);
    };
    return (
        <>
            {
                loading &&
                <div className="w-full h-full opacity-25">
                    <Loading />
                </div>
            }
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <SectionHeading text="Basic Informtaion" showButton={false} />
                            <Card
                                className="shadow-none p-5 my-3 space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Kashmiri Apple" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Apples are good for health and these apples are direct from farm..." {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        productCategoriesWhichCanBeSold.map((category) =>
                                                            <SelectItem
                                                                key={category.id}
                                                                value={category.query.toUpperCase()}>
                                                                {category.name}
                                                            </SelectItem>
                                                        )
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </Card>
                        </div>

                        <div>
                            <SectionHeading text="Pricing" showButton={false} />
                            <Card
                                className="shadow-none p-5 my-3 space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="200" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="unit"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Unit</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Unit" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        productUnits.map((unit) =>
                                                            <SelectItem
                                                                key={unit}
                                                                value={unit}>
                                                                {unit}
                                                            </SelectItem>
                                                        )
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="stock"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Stock</FormLabel>
                                            <FormControl>
                                                <Input placeholder="50" {...field} />
                                            </FormControl>
                                            <FormMessage className="text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </Card>
                        </div>

                        <div>
                            <SectionHeading text="Images" showButton={false} />
                            <Card
                                className="shadow-none p-5 my-3 space-y-4"
                            >
                                <div className="flex flex-row gap-2">
                                    {
                                        imagesPreview?.map((image, idx) => (
                                            <div className="w-max relative">
                                                <div onClick={() => removeImg(idx)} className="cursor-pointer flex h-[15px] w-[15px] items-center justify-center bg-slate-200 text-white rounded-full absolute -top-2 -right-2">
                                                    <X color="gray" />
                                                </div>
                                                <img
                                                    src={image}
                                                    className="w-16 h-16 rounded-md object-cover"
                                                />
                                            </div>
                                        ))
                                    }
                                </div>


                                <div>
                                    <FormLabel htmlFor="file">
                                        <div className="w-12 h-12 p-3 flex items-center justify-center bg-primary-foreground">
                                            <ImagePlus />
                                        </div>
                                    </FormLabel>
                                    <input
                                        id="file"
                                        name="file"
                                        type="file"
                                        className="hidden"
                                        onChange={onFileChange}
                                        multiple
                                    />
                                    {images?.length === 0 && <p className="text-[0.8rem] font-medium text-destructive">
                                        Atleast 1 Image is required
                                    </p>}
                                </div>
                            </Card>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex-col flex gap-1">
                                {
                                    keyFeatures?.map((feature, idx) => {
                                        return (
                                            <div key={feature + idx} className="p-1 justify-between px-3 bg-gray-100 gap-2 flex items-center rounded-md">
                                                <p>{feature}</p>
                                                <div onClick={() => removeFeature(idx)} className="cursor-pointer transition-all duration-200 p-1 hover:bg-gray-200 rounded-full"><X size={12} /></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex flex-col gap-2">
                                <FormField
                                    control={form.control}
                                    name="keyFeatures"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Features</FormLabel>
                                            <FormControl>
                                                <div
                                                    onFocusCapture={() => toggleStyle(true)}
                                                    onBlur={() => toggleStyle(false)}
                                                    className={`transition-colors flex items-center border rounded-md border-input outline-none ${showOutline ? "ring-1 ring-primary" : "outline-none"}`}
                                                >
                                                    <Input
                                                        placeholder="Direct from farm"
                                                        {...field}
                                                        className="border-0 outline-none focus-visible:ring-0"
                                                    />
                                                    <Button
                                                        onClick={addFeature}
                                                        type="button"
                                                        variant="outline"
                                                        className="border-none outline-none focus-visible:ring-0"
                                                    >
                                                        ADD
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            {keyFeatures?.length === 0 && <p className="text-[0.8rem] font-medium text-destructive">
                                                Atleast 1 Feature is required
                                            </p>}
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button
                            className="w-full"
                            type="submit"
                            disabled={loading}
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};
export default AddProductForm;