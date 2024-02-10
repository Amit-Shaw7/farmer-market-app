import Container from "@/components/Container";
import HomeCarousel from "@/sections/home/Carousel";
import Categories from "@/sections/home/Categories";
import Products from "@/sections/home/Products";

export default function Home() {
  return (
    <main className="w-full h-auto">
      {/* <HomeCarousel /> */}

      <Container className="mt-10 flex flex-col gap-10">
        <Categories className="lg:px-18 md:px-10" />
        <Products title="Dairy Products" />
      </Container>
    </main>
  );
};
