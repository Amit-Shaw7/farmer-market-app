import Container from "@/components/Container";
import Product from "@/components/Product";
import { RootState } from "@/store/Store";
import { useSelector } from "react-redux";

const Search = () => {
  const { products } = useSelector((state: RootState) => state.product);
  return (
    <Container>
        <div className="min-h-[60vh] px-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5">
          {
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          }
        </div>
    </Container>
  );
};

export default Search; 