<template>
  <div>
    <Container>
      <Form/>
    </Container>
    <router-link to="/about">
      ksmkdm
    </router-link>
  </div>
</template>

<script>


import Container from "@/components/Container";
import Form from "@/components/form";

export default {
  name: 'Home',
  components: {
    Form,
    Container,
  }
}
</script>
<style>

</style>