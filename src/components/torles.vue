<script setup>
const emit = defineEmits(['torles'])

function torles() {
  if (confirm('Biztosan törölni szeretnéd ezt a receptet?')) {
    emit('torles')
  }
}
</script>

<template>
  <button type="button" class="btn btn-danger" aria-label="Recept törlése" @click="torles">
    <i class="bi bi-trash"></i>
  </button>
</template>

<style scoped>

</style>