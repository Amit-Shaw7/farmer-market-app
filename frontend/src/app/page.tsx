import Container from "@/components/Container";
import { CarouselDemo } from "@/sections/home/Carousel";
import Categories from "@/sections/home/Categories";

export default function Home() {
  return (
    <main className="w-full h-auto">
      {/* <CarouselDemo /> */}

      <Container className="mt-10 flex flex-col gap-10">
        <Categories className="lg:px-18 md:px-10" />
      </Container>
    </main>
  );
};
