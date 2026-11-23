<script setup>
import { ref } from 'vue';

const emit = defineEmits(['mentes']);

const nev = ref('');
const nehezseg = ref('');
const elkIdo = ref('');
const kep = ref('');
const leiras = ref('');
const hiba = ref('');

const nehezsegSzoveg = {
  '1': 'könnyű',
  '2': 'közepes',
  '3': 'nehéz'
};

const hozzaad = () => {
  if (!nev.value.trim() || !nehezseg.value || !elkIdo.value || !kep.value.trim()) {
    hiba.value = 'Kérlek tölts ki minden kötelező mezőt!';
    return;
  }

  emit('mentes', {
    kep: kep.value.trim(),
    nev: nev.value.trim(),
    elkIdo: `${elkIdo.value} perc`,
    nehezseg: nehezsegSzoveg[nehezseg.value],
    leiras: leiras.value.trim()
  });

  nev.value = '';
  nehezseg.value = '';
  elkIdo.value = '';
  kep.value = '';
  leiras.value = '';
  hiba.value = '';
};
</script>

<template>
    <section>
        <div class="container">
            <h2 class="text-center mt-3">Új étel hozzáadása</h2>

            <div v-if="hiba" class="alert feher alert-danger text-center mt-3">{{ hiba }}</div>

            <div class="d-flex justify-content-center">
                <div class="form-field mx-2 w-25">
                    <label class="form-label">Étel nevének megadása:</label>
                    <input v-model="nev" type="text" class="form-control feher" placeholder="Pl.: Rántotta">
                </div>
                <div class="form-field mx-2 w-25">
                    <label class="form-label">Elkészítési nehézség:</label>
                    <select v-model="nehezseg" class="form-control feher">
                        <option value="" disabled>Válassz...</option>
                        <option value="1">Könnyű</option>
                        <option value="2">Közepes</option>
                        <option value="3">Nehéz</option>
                    </select>
                </div>
                <div class="form-field mx-2 w-25">
                    <label class="form-label">Elkészítési ideje (percben):</label>
                    <input v-model="elkIdo" type="number" min="1" class="form-control feher" placeholder="Csak számot kell megadnod!">
                </div>
            </div>

            <p class="urlBevitel w-50">
                <label class="form-label mb-2">Kép URL:</label>
                <input v-model="kep" type="url" class="form-control feher" placeholder="Ide illeszd be egy képnek az URL-jét!">
            </p>

            <div class="form-field w-50 leiras">
                <label class="form-label">Leírás:</label>
                <textarea v-model="leiras" class="form-control feher" rows="4" placeholder="Itt leírhatod az étel elkészítését."></textarea>
            </div>

            <p class="text-center mt-4">
                <button type="button" class="btn-subtle theme-warning" @click="hozzaad">Hozzáadás</button>
            </p>
        </div>
    </section>
</template>

<style scoped>
section,
.form-label {
    color: #000000 !important;
}

.urlBevitel {
    margin: auto;
    margin-top: 10px;
}

.feher {
    background-color: #fff;
    color: #000000;
}

.theme-warning {
    padding-left: 25px;
    padding-right: 25px;
}

.leiras {
    margin: auto;
}
</style>
