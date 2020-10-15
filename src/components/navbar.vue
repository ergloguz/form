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
  display :flex;
  align-items:center;
  justify-content: center;
  background-color: #ffd9d9;
  &-button{
    height:50px;
    width:200px
  }
}
</style>