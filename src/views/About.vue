<template>
  <div>
<TableHeader/>

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


  </div>
</template>

<script>
import Container from "@/components/Container";
import Table from "@/components/Table";
import {mapState} from "vuex"
import TableHeader from "@/components/newTable";


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