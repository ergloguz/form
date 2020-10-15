<template>
  <div>
    <Container>

      <Table
          v-for="item in userList"
          :index="item.index"
          :userName="item.userName"
          :userCost="item.userCost"
          :userExpire="item.userExpire"
          :userIdentity="item.userIdentity"
          :userSurname="item.userSurname"
          :userCredit="item.userCredit"
      />

    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container";
import Table from "@/components/Table";
import {mapState} from "vuex"
export default {
  name: "About",
  components: {Table, Container},
  computed:
    mapState(["userList"])
  ,




}
</script>

<style scoped>

</style>