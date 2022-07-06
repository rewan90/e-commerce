<template>
  <heado />
  <router-view
    v-if="products && categories"
    style="min-height: 60vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  ></router-view>

  <foot />
</template>

<script>
  import heado from "./components/heado.vue";
  import foot from "./components/foot.vue";

  import axios from "axios";
  import { defineComponent } from "vue";

  export default defineComponent({
    components: { heado, foot },

    data() {
      return {
        baseURL: "https://limitless-lake-55070.herokuapp.com/",
        products: null,
        categories: null,
        cartCount: 0,
      };
    },
    methods: {
      async fetchData() {
        //api to get the category
        await axios
          .get(this.baseURL + "category/")
          .then((res) => {
            this.categories = res.data;
          })
          //api to get the products
          .catch((err) => console.log("err", err));
        await axios
          .get(this.baseURL + "product/")
          .then((res) => {
            this.products = res.data;
          })
          .catch((err) => console.log("err", err));

        // fetch cart item if token is present i.e logged in
        if (this.token) {
          axios
            .get(`${this.baseURL}cart/?token=${this.token}`)
            .then((res) => {
              const result = res.data;
              this.cartCount = result.cartItems.length;
            })
            .catch((err) => console.log("err", err));
        }
      },
      resetCartCount() {
        this.cartCount = 0;
      },
    },
    mounted() {
      this.token = localStorage.getItem("token");
      this.fetchData();
    },
  });
</script>

<style>
  html {
    overflow-y: scroll;
  }
  body {
    background-color: #ccc;
  }
  .card {
    border: 1px solid #ccc;
    border-radius: 10px !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
</style>
