<template>
  <div>
    <div class="container">
        <a class="container-id"> 1 </a>
        <a class="container-text">000.000.000</a>
        <a class="container-text">000.000.000</a>
        <a class="container-text">000.000.000 </a>
        <a class="container-text">000.000.000 </a>
        <a class="container-text">000.000.000</a>
    </div>
  </div>
</template>

<script>

export default {
  name:"Table",


}
</script>

<style scoped>
.container {
  height: 101px;
  width: 460px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8898AA;

  &-button{
    display: flex;
    flex-direction: row;
    font-family: Open Sans;
  }
  &-id {
    font-weight: bold;
    font-size: 14px;

  }
  &-text {
    font-size: 14px;
    font-weight: lighter;
  }
}
</style>