import Container from "@/components/Container";
import Categories from "@/sections/home/Categories";

export default function Home() {
  return (
    <main className="w-full my-12">
      <Container>
        <Categories className="lg:px-18 md:px-10" />
      </Container>
    </main>
  );
};
