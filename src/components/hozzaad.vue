<script setup>

</script>



<template>
    <section>
        <div class="container">
            <h2 class="text-center mt-3">Új étel hozzáadása</h2>
            <div class="d-flex justify-content-center">
                <div class="form-field mx-2 w-25">
                    <label class="form-label">Étel nevének megadása:</label>
                    <input type="text" class="form-control" placeholder="Pl.: Rántotta">
                </div>
                <div class="form-field mx-2 w-25">
                    <label for="fieldSelect" class="form-label">Elkészítési nehézség:</label>
                    <select class="form-control">
                        <option selected>Válassz...</option>
                        <option value="1">Könnyű</option>
                        <option value="2">Közepes</option>
                        <option value="3">Nehéz</option>
                    </select>
                </div>
                <div class="form-field mx-2 w-25">
                    <label class="form-label">Elkészítési ideje (percben):</label>
                    <input type="number" class="form-control" placeholder="Csak számot kell megadnod!">
                </div>
            </div>
            <p class="urlBevitel w-50">
                <label class="form-label mb-2">Kép URL:</label>
                <input type="url" class="form-control" placeholder="Ide illeszd be egy képnek az URL-jét!">
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
</style>