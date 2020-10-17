<template>
  <div class="global">
    <TableHeader/>
    <div class="global-alert" v-if="!userList.length">
      <a class="global-alert-text">THERE IS NO USER DATA TO SHOW YOU !</a>
    </div>
    <Table
        v-else
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

import Table from "@/components/Table";
import {mapState} from "vuex"
import TableHeader from "@/components/tableHeader";

export default {
  name: "About",
  components: {TableHeader, Table},

  computed:
      mapState(["userList"])
  ,
}
</script>

<style scoped>
.global {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &-alert{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 560px;
    margin-top: 20px;
    border-radius: 4px;
    background-color: rgb(var(--dark));
    &-text {
      color: rgb(var(--freshblue));
      font-weight: bold;
    }
  }
}

</style>