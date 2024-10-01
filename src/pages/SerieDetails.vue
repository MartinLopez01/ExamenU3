<template>
    <div>
      <SerieDetalle :serieId="$route.params.id" />
    </div>
  </template>
  
  <script>
  import SerieDetalle from '../components/SerieDetalle.vue';
  
  export default {
    components: {
      SerieDetalle
    }
  };
  </script>
  