<template>
<div>


    <div class="container">
      <a class="container-id"> {{index+1}} </a>
      <a class="container-text">{{ userName }} {{ userSurname }}</a>
      <a class="container-text">{{ userIdentity }}</a>
      <a class="container-text">{{ userCost }} </a>
      <a class="container-text">{{ userCredit }} </a>
      <a class="container-text">{{ userExpire }}</a>
    </div>
</div>
</template>

<script>

export default {
  name: "Table",
  props: ["index", "userName","userIdentity", "userSurname", "userCost", "userExpire", "userCredit"],
  computed: {
    userList() {
      return this.$store.state.userList;
    },
  },

}
</script>

<style scoped>
.container {
  height: 101px;
  width: 460px;
  justify-content: space-between;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  flex-direction: row;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8898AA;

  &-button {
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