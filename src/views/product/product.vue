<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-centr">
        <h4 class="pt-3">Our products</h4>
        <router-link
          id="add-product"
          :to="{ name: 'addProduct' }"
          v-show="$route.name == 'product'"
        >
          <button class="btn" style="float: right">Add Product</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="product of products"
        :key="product.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <productBox :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
  import productBox from "../../components/productBox.vue";
  export default {
    name: "product",
    components: { productBox },
    props: ["products", "baseURL"],
  };
</script>
<style scoped></style>
