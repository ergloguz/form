<template>
  <div>
    <Navbar/>
    <Container>

      <Form @onSubmit="save"/>
    </Container>
  </div>
</template>

<script>


import Container from "@/components/Container";
import Form from "@/components/form";
import Navbar from "@/components/navbar";
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
    Navbar
  },
  methods: {
    save(item) {

      this.$store.commit('NEW_COUNT', item);
    },

  }
}
</script>
<style>

</style>