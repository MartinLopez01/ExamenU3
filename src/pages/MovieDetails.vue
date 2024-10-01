<template>
    <div>
      <h1>Detalles de la Película</h1>
      <PeliculaDetalle :movieId="$route.params.id" />
    </div>
  </template>
  
  <script>
  import PeliculaDetalle from '../components/PeliculaDetalle.vue';
  
  export default {
    components: {
      PeliculaDetalle,
    },
  };
  </script>
  