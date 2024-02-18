import Container from "@/components/Container";
import Wrapper from "@/components/Wrapper";
import Categories from "@/sections/home/Categories";
import Products from "@/sections/home/Products";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <Container className="mt-10 flex flex-col gap-10">
        <Wrapper>
          <Categories />
          <Products title="Dairy Products" />
          <Products title="Pesticides" />
          <Products title="Fruits" />
          <Products title="Vegetables" />
        </Wrapper>
      </Container>
    </main>
  );
};
