<template>
    <div>
      <BannerPrincipal />
      <Tendencias />
      <LoMasPopular />
      <VerGratis />
      <SeriesTv />
    </div>
  </template>
  
  <script>
  import BannerPrincipal from '../components/BannerPrincipal.vue';
  import Tendencias from '../components/Tendencias.vue';
  import LoMasPopular from '../components/LoMasPopular.vue';
  import VerGratis from '../components/VerGratis.vue';
  import SeriesTv from '../components/SeriesTv.vue';
  
  export default {
    components: {
      BannerPrincipal,
      Tendencias,
      LoMasPopular,
      VerGratis,
      SeriesTv,
    },
  };
  </script>
  