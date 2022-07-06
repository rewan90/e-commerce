<template>
  <div class="card w-100 h-99" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imageURL ?? null"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'showDetails', params: { id: product.id } }">
        <h5 class="card-title">{{ product.name ?? null }}</h5>
      </router-link>
      <p class="card-text">
        {{
          product.description ? product.description.substring(0, 65) : null
        }}....
      </p>
      <router-link :to="{ name: 'editProduct', params: { id: product.id } }">
        <button class="btn btn-secondary">Edit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "productBox",
    props: ["product"],
  };
</script>

<style scoped>
  .card-img-top {
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }

  .card-title {
    color: black;
  }
</style>
