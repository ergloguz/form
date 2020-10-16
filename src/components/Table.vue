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
  height: 18px;
  width: 720px;
  justify-content: space-between;
  display: flex;
  padding: 20px;
  background-color: #131B23;
  align-items: center;
  flex-direction: row;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
  color: #8898AA;
  &-box{
    display: flex;
    align-items: center;
    justify-content: center;
    width:120px;
    height:inherit;
    border-radius: 4px;
    &-text {
      font-size: 14px;
      font-weight: bold;
      color: #2dcad2;
    }
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