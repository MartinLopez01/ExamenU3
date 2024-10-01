<template>
    <div>
      <h1>Login</h1>
      <button @click="getToken">Iniciar Sesión</button>
      <div v-if="authUrl">
        <a :href="authUrl" target="_blank">Autorizar en TMDB</a>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../api';
  
  export default {
    data() {
      return {
        authUrl: '',
      };
    },
    methods: {
      async getToken() {
        try {
          const response = await api.get('/authentication/token/new');
          const token = response.data.request_token;
          this.authUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8080/login_callback`;
        } catch (error) {
          console.error("Error obteniendo el token de autenticación:", error);
        }
      },
    },
  };
  </script>
  