<script setup>

</script>



<template>
    <section>
        <div class="container">
            <h2 class="text-center mt-3">Új étel hozzáadása</h2>
            <div class="d-flex justify-content-center">
                <div class="form-field mx-2 w-25 ">
                    <label class="form-label ">Étel nevének megadása:</label>
                    <input type="text" class="form-control feher" placeholder="Pl.: Rántotta">
                </div>
                <div class="form-field mx-2 w-25">
                    <label for="fieldSelect" class="form-label">Elkészítési nehézség:</label>
                    <select class="form-control feher">
                        <option selected>Válassz...</option>
                        <option value="1">Könnyű</option>
                        <option value="2">Közepes</option>
                        <option value="3">Nehéz</option>
                    </select>
                </div>
                <div class="form-field mx-2 w-25">
                    <label class="form-label ">Elkészítési ideje (percben):</label>
                    <input type="number" class="form-control feher" placeholder="Csak számot kell megadnod!">
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
section, .form-label {
    color: #000000 !important;
}
.feher{
    background-color: #fff;
    color: #000000;
}
</style>