<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
<div>
  <header>
    <HeaderComponent/>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
    <div class="container_footer">
      <h6>Contacto | Politica de privacidad | Novedades.</h6>
      
  </div>
  </footer>
  
</div>




</template>

<style scoped>
  .container_footer {
    width: auto;
    height: 10vh;
    border: 2px solid black;
}
h6{
    display: flex;
    justify-content: center;
    margin-top: 2vh;
}
</style>
