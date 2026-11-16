<script setup>
import { adatok } from '../data/receptInfo';

function kepUtvonal(fajlnev) {
  return new URL(`../assets/${fajlnev}`, import.meta.url).href
}

</script>



<template>
    <section>
        <section class="card " style="max-width: 320px" v-for="recept in adatok" :key="recept.id">
  <img :src="kepUtvonal(recept.kep)" class="card-img-top" :alt="recept.nev">
  <div class="card-body">
    <h4 class="card-title">{{ recept.nev }}</h4>
    <p class="card-text">Elkészítési idő: {{ recept.elkIdo }}</p>
    <p class="card-text">{{ recept.nehezseg }}</p>
    <a href="#" class="btn-solid theme-primary">Részletek</a>
  </div>
</section>
    </section>

</template>



<style scoped>

</style>