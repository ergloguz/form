<template>
  <div>
    <TableHeader/>

    <Table
        :index="item.index"
        :userCost="item.userCost"
        :userCredit="item.userCredit"
        :userExpire="item.userExpire"
        :userIdentity="item.userIdentity"
        :userName="item.userName"
        :userSurname="item.userSurname"
        v-for="item in userList"
    />



  </div>
</template>

<script>
import Container from "@/components/Container";
import Table from "@/components/Table";
import {mapState} from "vuex"
import TableHeader from "@/components/tableHeader";


export default {
  name: "About",
  components: {TableHeader, Table, Container},
  computed:
      mapState(["userList"])
  ,


}
</script>

<style scoped>

</style>