<template>
<div>
    <div class="container">

      <div class="container-box">
        <a class="container-box-text">{{ userName }} {{ userSurname }}</a>
      </div>
      <div class="container-box">
        <a class="container-box-text">{{ userIdentity }}</a>
      </div>

      <div class="container-box">
        <a class="container-box-text">{{ userCost }} TL</a>
      </div>

      <div class="container-box">
        <a class="container-box-text">{{ userCredit }} TL</a>
      </div>

      <div class="container-box">
        <a class="container-box-text">{{ userExpire }}</a>
      </div>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  height: 18px;
  width: 720px;
  background-color: rgb(var(--dark));
  border-radius: 4px;
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
  &-box{
    display: flex;
    align-items: center;
    justify-content: center;
    width:120px;
    height:inherit;
    &-text {
      font-size: 14px;
      font-weight: bold;
      color: rgb(var(--freshblue));
      font-style: normal;
    }
  }
}
</style>