<script setup>
import { adatok } from '../data/receptInfo';

defineProps({
  receptek: {
    type: Array,
    default: () => []
  }
});

function kepUtvonal(fajlnev) {
  return new URL(`../assets/${fajlnev}`, import.meta.url).href
}
function nehezsegSzin(nehezseg) {
  if (nehezseg === 'könnyű') return 'bg-success'
  if (nehezseg === 'közepes') return 'bg-warning text-dark'
  return 'bg-danger'
}
</script>



<template>
    <div class="container">
        <section v-if="receptek.length > 0">
            <div class="kartya-sor">
                <section class="card" style="max-width: 320px" v-for="(recept, index) in receptek" :key="index">
                    <img :src="kepUtvonal(recept.getKep())" class="card-img-top" :alt="recept.getNev()">
                    <div class="card-body">
                        <h4 class="card-title">{{ recept.getNev() }}</h4>
                        <p class="card-text">Elkészítési idő: {{ recept.getElkIdo() }}</p>
                        <p class="badge" :class="nehezsegSzin(recept.getNehezseg())">{{ recept.getNehezseg() }}</p>
                        <a href="#" class="btn-solid theme-primary">Részletek</a>
                    </div>
                </section>
            </div>
        </section>

        <div v-else class="alert alert-warning text-center">
            Nincs találat a megadott keresési feltételek alapján!
        </div>
    </div>
</template>



<style scoped>
.kartya-sor {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
    transition: transform 0.2s, box-shadow 0.2s;
    background-color: #fff;
    color: black;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.badge{
    width: 60px;
}

</style>
