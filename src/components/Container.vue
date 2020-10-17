<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"Container"
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  max-width: 560px;
  width: 560px;
  margin-top:70px;
  border-radius: 4px;
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
}
</style>