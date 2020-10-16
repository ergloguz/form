<template>
  <div>


    <Container>
      <h1 class="title">HESAPKURDU KONUT KREDİSİ HESAPLA</h1>
      <Form @onSubmit="save"/>
    </Container>
    <router-link to="/about">
      <button class="button">Listeyi Gör</button>
    </router-link>

  </div>
</template>

<script>


import Container from "@/components/Container";
import Form from "@/components/form";

export default {
  name: 'Home',
  data() {
    return {
      userList: [],
    }
  },
  components: {
    Form,
    Container,
  },
  methods: {
    save(item) {

      this.$store.commit('NEW_COUNT', item);
    },

  }
}
</script>
<style>
.button {
  height: 43px;
  width: 120px;
  background-color: rgb(94, 114, 228);
  border:none;
  margin-top:20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
  border-radius: 4px;
  color: white;

  cursor: pointer;
}
.title{
  text-align: center;
   color: rgb(94, 114, 228);
  font-family: "Open Sans";
}
</style>