<template>
  <div class="card w-100 h-99" style="margin-bottom: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="category.imageUrl"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'listProducts', params: { id: category.id } }">
        <h5 class="card-title">{{ category.categoryName }}</h5>
      </router-link>
      <p class="card-text">
        {{ category.description }}
      </p>
      <router-link :to="{ name: 'editCategory', params: { id: category.id } }">
        <button class="btn btn-secondary">Edit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryBox",
    props: ["category"],
    methods: {},
  };
</script>

<style scoped>

  .card-img-top {
    object-fit: cover;
  }

  .card-title {
    color: black;
  }
</style>
