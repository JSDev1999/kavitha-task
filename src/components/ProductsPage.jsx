import { Container, Grid, Pagination } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

const ProductsPage = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        page === 1
          ? `https://dummyjson.com/products?limit=10`
          : `https://dummyjson.com/products?limit=10&skip=${10 * (page - 1)}`
      )
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
        setCount(Math.ceil(res.data.total / res.data.limit));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);
  return (
    <Fragment>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Container sx={{ marginY: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products?.length > 0 &&
              products.map((item) => (
                <Grid item xs={2} sm={4} md={4} key={item?.id}>
                  <ProductItem item={item} />
                </Grid>
              ))}
          </Grid>
          {products?.length > 0 && (
            <Pagination count={count} page={page} onChange={handleChange} />
          )}
        </Container>
      )}
    </Fragment>
  );
};

export default ProductsPage;
