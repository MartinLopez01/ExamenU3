<template>
    <div>
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
      <!-- Mostrar más información como categorías, reparto, trailer, recomendaciones -->
    </div>
  </template>
  
  <script>
  import api from '../api';
  
  export default {
    props: ['movieId'],
    data() {
      return {
        movie: {},
      };
    },
    async created() {
      const response = await api.get(`/movie/${this.movieId}`);
      this.movie = response.data;
    },
  };
  </script>
  