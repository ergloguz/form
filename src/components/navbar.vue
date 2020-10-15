<template>

  <div class="header">

    <router-link to="/about">
      <button class="header-button">
        Liste
      </button>
    </router-link>

  </div>

</template>

<script>
export default {
  name:"Navbar"
}
</script>

<style scoped>
.header{

  &-button{
    height:50px;
    width:200px
  }
}
</style>