<script setup>

</script>



<template>
    <div class="container">
        <div class="d-flex justify-content-center align-items-center mb-5">
            <div class="mx-2 w-25">
                <input type="text" class="form-control" placeholder="Keress receptet...">
            </div>

            <div class="form-field nehezseg mx-2 w-25">
                <select class="form-control" id="exampleFormControlSelect2">
                    <option>Minden nehézség</option>
                    <option value="1">Könnyű</option>
                    <option value="2">Közepes</option>
                    <option value="3">Nehéz</option>
                </select>
            </div>

            <div class="form-field elkeszitesiIdo mx-2 w-25">
                <select class="form-control" id="exampleFormControlSelect2">
                    <option>Elkészítési idő szerint</option>
                    <option value="1">30 perc</option>
                    <option value="2">45 perc</option>
                    <option value="3">60 perc</option>
                    <option value="3">120 perc</option>
                </select>
            </div>
        </div>
    </div>
</template>



<style scoped></style>