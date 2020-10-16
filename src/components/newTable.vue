<template>
  <div>
    <div class="container">

      <div class="container-box">
        <a class="container-box-text">AD SOYAD</a>
      </div>
      <div class="container-box">
        <a class="container-box-text">TC KİMLİK NO</a>
      </div>

      <div class="container-box">
        <a class="container-box-text">EV DEĞERİ </a>
      </div>

      <div class="container-box">
        <a class="container-box-text">KREDİ MİKTARI </a>
      </div>

      <div class="container-box">
        <a class="container-box-text">VADE</a>
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
  height: 40px;
  width: 720px;
  justify-content: space-between;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: row;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-top: 20px;
  background-color: rgb(94, 114, 228);
  border-radius: 4px;
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
  color: #8898AA;
  &-box{
    display: flex;
    align-items: center;
    justify-content: center;
    width:120px;
    height:100px;

    border-radius: 4px;
    &-text {
      font-size: 14px;
      font-weight: normal;
      color: white;
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