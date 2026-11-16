<script setup>

</script>



<template>
  <header>
  
    <nav class="navbar sm:navbar-expand bg-1 fg-2">
  <div class="container-fluid d-flex container">
    <a class="navbar-brand" href="#">Receptgyűjtemény</a>
    <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
            <a class="nav-link active" aria-current="page" href="#">Recept</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Új recept</a>
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
   
  </main>


  <footer>
    <p class="text-center">Minden jog fenntartva!</p>
  </footer>
</template>



<style scoped>

nav{
  background-color: #f0f0f0;
  margin: 0;
}
a{ 
  color: black;
}
</style>