<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded">
            <a href="" class="px-2 py-2 rounded" id="heading">Start Shopping</a>
          </h3>
          <h3 id="content" class="lead mb-0 p-1 rounded">shopping now</h3>
        </header>
      </div>
    </div>

    <div id=" start-shopping " class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.category_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <CategoryBox :category="categories[index - 1]"></CategoryBox>
        </div>
      </div>
    </div>

    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.product_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <productBox :product="products[index - 1]"></productBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import productBox from "../components/productBox.vue";
  import CategoryBox from "../components/Category/CategoryBox.vue";

  export default {
    name: "Home",
    components: { productBox, CategoryBox },
    props: ["baseURL", "products", "categories"],
    data() {
      return {
        category_size: 0,
        product_size: 0,
      };
    },
    mounted() {
      this.category_size = this.categories.length;
      this.category_size = Math.min(6, this.category_size);
      this.product_size = this.products.length;
      this.product_size = Math.min(8, this.category_size);
    },
  };
</script>
<style>

  .bg-cover {
    background-size: cover !important ;
  }
  #background-div {
    background: url("../assets/tamanna-rumee-eD1RNYzzUxc-unsplash.jpg");
  }
  a {
    color: white;
    font: bold;
  }
  
  #heading {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    opacity: 0.8;
    font-family: "Josefin Sans", sans-serif;
  }
  #content {
    opacity: 0.8;
  }
  h2 {
    font-family: "Josefin Sans", sans-serif;
  }
</style>
