<script setup>
import { adatok } from '../data/receptInfo';

function kepUtvonal(fajlnev) {
  return new URL(`../assets/${fajlnev}`, import.meta.url).href
}

</script>



<template>
    <div class="container">
    <section>
        <div class="kartya-sor">
        <section class="card" style="max-width: 320px" v-for="recept in adatok" :key="recept.id">
  <img :src="kepUtvonal(recept.kep)" class="card-img-top" :alt="recept.nev">
  <div class="card-body">
    <h4 class="card-title">{{ recept.nev }}</h4>
    <p class="card-text">Elkészítési idő: {{ recept.elkIdo }}</p>
    <p class="card-text">{{ recept.nehezseg }}</p>
    <a href="#" class="btn-solid theme-primary">Részletek</a>
  </div>
  
</section></div>
    </section>
</div>
</template>



<style scoped>
.kartya-sor {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>