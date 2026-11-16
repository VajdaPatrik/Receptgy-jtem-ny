<script setup>
import { ref } from 'vue';

defineProps({
    nehezsegOpciok: {
        type: Array,
        default: () => []
    },
    elkIdoOpciok: {
        type: Array,
        default: () => []
    }
});

const keres = ref("");
const nehezseg = ref(0);
const elkIdo = ref(0);

const emit = defineEmits(["keres", "nehezseg", "elkIdo"]);

const keresValtozott = () => {
    emit("keres", keres.value);
}

const nehezsegValasztott = () => {
    emit("nehezseg", nehezseg.value);
}

const elkIdoValasztott = () => {
    emit("elkIdo", elkIdo.value);
}
</script>



<template>
    <div class="container ">
        <div class="d-flex justify-content-center align-items-center mb-5 ">
            <div class="mx-2 w-25 ">
                <input type="text" v-model="keres" @input="keresValtozott" class="form-control kereso" placeholder="Keress receptet...">
            </div>

            <div class="form-field nehezseg mx-2 w-25">
                <select v-model="nehezseg" @change="nehezsegValasztott" class="form-control kereso" id="exampleFormControlSelect2">
                    <option v-for="(opcio, index) in nehezsegOpciok" :key="index" :value="index">{{ opcio }}</option>
                </select>
            </div>

            <div class="form-field elkeszitesiIdo mx-2 w-25">
                <select v-model="elkIdo" @change="elkIdoValasztott" class="form-control kereso" id="exampleFormControlSelect2">
                    <option v-for="(opcio, index) in elkIdoOpciok" :key="index" :value="index">{{ opcio }}</option>
                </select>
            </div>
        </div>
    </div>
</template>



<style scoped>
.kereso{
    background-color: #fff;
    color: #000;
}
.container{
    padding: 30px;
}
</style>
