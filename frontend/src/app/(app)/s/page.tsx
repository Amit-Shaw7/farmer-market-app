import Container from "@/components/Container";
import Product from "@/components/Product";
import Wrapper from "@/components/Wrapper";
import { products } from "@/constants";
import React from "react";

const Search = () => {
  return (
    <Container>
      <Wrapper>
        <div className="px-1 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-5">
          {
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          }
        </div>
      </Wrapper>
    </Container>
  );
};

export default Search; 