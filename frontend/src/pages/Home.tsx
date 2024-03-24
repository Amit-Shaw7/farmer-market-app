import Container from "@/components/Container";
import CategoryList from "@/sections/home/CategoryList";
import ProductsSlider from "@/sections/home/ProductsSlider";
import { RootState } from "@/store/Store";
import { useSelector } from "react-redux";

// import HomeCarousel from "@/sections/home/HomeCarousel";

const Home = () => {
  const { productCategories } = useSelector((state: RootState) => state.user);

  const productSlider = productCategories;

  return (
    <main className="w-full h-auto">
      {/* <HomeCarousel /> */}
      <Container className="mt-10 flex flex-col gap-10">
          <CategoryList />
          {
            productSlider.map((category) => (
              <ProductsSlider
                key={category?.id}
                title={category?.name}
                category={category?.query} />
            ))
          }
      </Container>
    </main>
  );
};

export default Home;