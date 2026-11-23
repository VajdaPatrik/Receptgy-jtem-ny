<script setup>
import { ref, reactive } from 'vue'
import Torles from './torles.vue';

defineProps({
  receptek: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['mentes', 'torles'])

const kivalasztott = ref(null)
const szerkesztes = ref(false)
const urlap = reactive({ nev: '', elkIdo: '', nehezseg: 'könnyű' })

function megnyit(recept) {
  kivalasztott.value = recept
  szerkesztes.value = false
}

function szerkesztesInditas(recept) {
  kivalasztott.value = recept
  urlap.nev = recept.getNev()
  urlap.elkIdo = recept.getElkIdo()
  urlap.nehezseg = recept.getNehezseg()
  szerkesztes.value = true
}

function mentes() {
  emit('mentes', { recept: kivalasztott.value, ...urlap })
  bezar()
}

function bezar() {
  kivalasztott.value = null
  szerkesztes.value = false
}

function torlesKezel(recept) {
  emit('torles', recept)
  bezar()
}

function kepUtvonal(fajlnev) {
  if (/^https?:\/\//.test(fajlnev)) return fajlnev
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
                        <div class="d-flex gap-2">
                            <button type="button" class="btn btn-primary" @click="megnyit(recept)">Részletek</button>
                            <button type="button" class="btn btn-outline-secondary" @click="szerkesztesInditas(recept)">Szerkesztés</button>
                            <Torles @torles="torlesKezel(recept)" />
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <div v-else class="alert alert-warning nincst">
            Nincs találat a megadott keresési feltételek alapján!
        </div>

        <div v-if="kivalasztott" class="modal-hatter" @click.self="bezar">
            <div class="modal-doboz">
                <button type="button" class="modal-x" @click="bezar" aria-label="Bezár">✕</button>
                <img :src="kepUtvonal(kivalasztott.getKep())" :alt="kivalasztott.getNev()" class="modal-kep">
                <div class="modal-tartalom">
                    <form v-if="szerkesztes" @submit.prevent="mentes">
                        <h3 class="modal-cim">Recept szerkesztése</h3>

                        <label class="form-label">Név</label>
                        <input v-model.trim="urlap.nev" class="form-control mb-3" required>

                        <label class="form-label">Elkészítési idő</label>
                        <input v-model.trim="urlap.elkIdo" class="form-control mb-3" placeholder="pl. 30 perc" required>

                        <label class="form-label">Nehézség</label>
                        <select v-model="urlap.nehezseg" class="form-select mb-3">
                            <option>könnyű</option>
                            <option>közepes</option>
                            <option>nehéz</option>
                        </select>

                        <div class="modal-lab">
                            <button type="button" class="btn btn-secondary me-2" @click="bezar">Mégse</button>
                            <button type="submit" class="btn btn-success">Mentés</button>
                        </div>
                    </form>

                    <template v-else>
                        <h3 class="modal-cim">{{ kivalasztott.getNev() }}</h3>
                        <p class="modal-ido">Elkészítési idő: {{ kivalasztott.getElkIdo() }}</p>
                        <span class="badge nagy-badge" :class="nehezsegSzin(kivalasztott.getNehezseg())">
                            {{ kivalasztott.getNehezseg() }}
                        </span>
                        <div class="modal-lab">
                            <button type="button" class="btn btn-outline-secondary me-2" @click="szerkesztesInditas(kivalasztott)">Szerkesztés</button>
                            <button type="button" class="btn btn-primary" @click="bezar">Bezár</button>
                        </div>
                        <div class="mt-3">
                            <Torles @torles="torlesKezel(kivalasztott)" />
                        </div>
                    </template>
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
  width: 100%;
  object-fit: cover;
}
.badge{
    width: 60px;
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
    background: rgba(145, 28, 28, 0.6);
    color: #fff;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
}
.modal-x:hover {
    background: rgba(143, 45, 45, 0.85);
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