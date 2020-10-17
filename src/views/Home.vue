<template>
  <div>
    <Container>
      <h1 class="title">KONUT KREDİSİ HESAPLA</h1>
      <Form @onSubmit="save"/>
    </Container>

    <router-link to="/list">
      <button class="button">Listeyi Gör</button>
    </router-link>
  </div>
</template>

<script>
import Container from "@/components/Container";
import Form from "@/components/Form";

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
  margin-top: 20px;
}
.title {
  text-align: center;
  color: rgb(var(--purple));
  font-family: "Open Sans";
  margin-top: 20px;
}
</style>