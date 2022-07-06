<template>
  <div class="container py-4">
    <router-link :to="{ name: 'Category' }">
      <button class="btn btn-secondary btn-lg">Admin Category</button>
    </router-link>
    <br />

    <router-link :to="{ name: 'product' }">
      <button class="btn btn-secondary btn-lg">Admin products</button>
    </router-link>
    <br />
  </div>
</template>

<script>
  export default { name: "Admin" };
</script>

<style>
  .btn {
    margin-bottom: 40px;
  }
</style>
