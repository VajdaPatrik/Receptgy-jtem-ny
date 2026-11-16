<script setup>
import { adatok } from '../data/receptInfo';
import { ref } from 'vue'

defineProps({
  receptek: {
    type: Array,
    default: () => []
  }
});

const kivalasztott = ref(null)

function megnyit(recept) {
  kivalasztott.value = recept
}

function bezar() {
  kivalasztott.value = null
}

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
                        <a href="#" class="btn-solid theme-primary" @click="megnyit(recept)">Részletek</a>
                    </div>
                </section>
            </div>
        </section>
 
        <div v-else class="alert alert-warning nincst">
            Nincs találat a megadott keresési feltételek alapján!
        </div>
    </div>
    <div v-if="kivalasztott" class="modal-hatter" @click.self="bezar">
    <div class="modal-doboz">
        <button type="button" class="modal-x" @click="bezar" aria-label="Bezár">✕</button>
        <img :src="kepUtvonal(kivalasztott.getKep())" :alt="kivalasztott.getNev()" class="modal-kep">
        <div class="modal-tartalom">
            <h3 class="modal-cim">{{ kivalasztott.getNev() }}</h3>
            <p class="modal-ido">Elkészítési idő: {{ kivalasztott.getElkIdo() }}</p>
                        <p class="modal-ido">Leirás: {{ kivalasztott.getLeiras() }}</p>

            <span class="badge nagy-badge" :class="nehezsegSzin(kivalasztott.getNehezseg())">
                {{ kivalasztott.getNehezseg() }}
            </span>

            <div class="modal-lab">
                <button type="button" class="btn btn-primary" @click="bezar">Bezár</button>
            </div>
        </div>
    </div>
</div>
    
</template>



<style scoped>
.nincst{
    font-size: large;
    text-align: center !important; 
    border: none;
    background-color: #fff;
    color: black;
}
img{
    height: 200px;
    width: 300px;
}
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
.modal-content {
    background-color: #fff;
    color: black;
}
.modal-kep {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.nagy-badge {
    width: auto;
}
.modal-hatter {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 1000;
}
.modal-doboz {
    position: relative;
    background: #fff;
    color: #000;
    width: 100%;
    max-width: 480px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
.modal-kep {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
}
.modal-x {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
}
.modal-x:hover {
    background: rgba(0, 0, 0, 0.85);
}
.modal-tartalom {
    padding: 20px;
}
.modal-cim {
    margin: 0 0 8px;
}
.modal-ido {
    margin: 0 0 12px;
    color: #666;
}
.nagy-badge {
    width: auto;
    padding: 6px 12px;
}
.modal-lab {
    margin-top: 20px;
    text-align: right;
}
</style>
