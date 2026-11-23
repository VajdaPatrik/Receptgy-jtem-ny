<script setup>
import { ref, computed } from 'vue';
import receptek from './components/receptek.vue';
import searchBar from './components/searchBar.vue';
import Recept from './classes/Recept.js';
import { adatok } from './data/receptInfo.js';
import hozzaad from './components/hozzaad.vue';

const osszesRecept = ref([]);
const nehezsegOpciok = ref(["Minden nehézség"]);
const elkIdoOpciok = ref(["Elkészítési idő szerint"]);

const keres = ref("");
const nehezseg = ref(0);
const elkIdo = ref(0);

const ujReceptLathato = ref(false);

const ujReceptMegnyit = () => {
  ujReceptLathato.value = true;
};

const receptekMegnyit = () => {
  ujReceptLathato.value = false;
};

const receptLetrehoz = (a) => {
  const r = new Recept(a.kep, a.nev, a.elkIdo, a.leiras);
  r.setNehezseg(a.nehezseg);
  osszesRecept.value.push(r);

  if (!nehezsegOpciok.value.includes(a.nehezseg)) {
    nehezsegOpciok.value.push(a.nehezseg);
  }
  if (!elkIdoOpciok.value.includes(a.elkIdo)) {
    elkIdoOpciok.value.push(a.elkIdo);
  }
};

const init = () => {
  for (let i = 0; i < adatok.length; i++) {
    receptLetrehoz(adatok[i]);
  }
};

const receptHozzaad = (ujAdat) => {
  // Bekerül a receptInfo.js-ben lévő adatok tömbbe...
  adatok.push(ujAdat);
  // ...és a megjelenített receptek közé
  receptLetrehoz(ujAdat);
  // Vissza a receptlistához
  ujReceptLathato.value = false;
};

const keresValtozott = (szoveg) => {
  keres.value = szoveg;
}

const nehezsegValasztott = (ertek) => {
  nehezseg.value = Number(ertek);
}

const elkIdoValasztott = (ertek) => {
  elkIdo.value = Number(ertek);
}

const szurtReceptek = computed(() => {
  const eredmeny = [];
  for (let i = 0; i < osszesRecept.value.length; i++) {
    const r = osszesRecept.value[i];
    const nevEgyezik = r.getNev().toLowerCase().includes(keres.value.toLowerCase());
    const nehezsegEgyezik = nehezseg.value === 0 || r.getNehezseg() === nehezsegOpciok.value[nehezseg.value];
    const idoEgyezik = elkIdo.value === 0 || r.getElkIdo() === elkIdoOpciok.value[elkIdo.value];
    if (nevEgyezik && nehezsegEgyezik && idoEgyezik) {
      eredmeny.push(r);
    }
  }
  return eredmeny;
});

init();
</script>



<template>
  <header>

    <nav class="navbar sm:navbar-expand bg-1 fg-2">
      <div class="container-fluid d-flex container">
        <a class="navbar-brand" href="#">Receptgyűjtemény</a>
        <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <dialog class="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
          <div class="drawer-header">
            <h5 class="drawer-title" id="navbarNavLabel">Recept</h5>
            <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
          </div>
          <div class="drawer-body">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" :class="{ active: !ujReceptLathato }" href="#" @click.prevent="receptekMegnyit">Recept</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ active: ujReceptLathato }" href="#" @click.prevent="ujReceptMegnyit">Új recept</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kedvencek</a>
              </li>

            </ul>
          </div>
        </dialog>
      </div>
    </nav>

  </header>


  <main>
    <searchBar v-if="!ujReceptLathato" :nehezseg-opciok="nehezsegOpciok" :elk-ido-opciok="elkIdoOpciok"
      @keres="keresValtozott" @nehezseg="nehezsegValasztott" @elkIdo="elkIdoValasztott" />
    <receptek v-if="!ujReceptLathato" :receptek="szurtReceptek" />
    <hozzaad v-if="ujReceptLathato" @mentes="receptHozzaad" />
  </main>


  <footer>
    <p class="text-center">Minden jog fenntartva!</p>
  </footer>
</template>



<style scoped>
nav {
  background-color: #f0f0f0;
  margin: 0;
}

nav a {
  color: black;
}

</style>
