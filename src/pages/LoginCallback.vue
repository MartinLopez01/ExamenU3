<template>
    <div>
      <h1>Autenticando...</h1>
    </div>
  </template>
  
  <script>
  import api from '../api';
  
  export default {
    async mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('request_token');
      if (token) {
        await this.createSession(token);
      }
    },
    methods: {
      async createSession(token) {
        try {
          const response = await api.post('/authentication/session/new', {
            request_token: token
          });
          const sessionId = response.data.session_id;
          localStorage.setItem('session_id', sessionId);
          this.$router.push('/');
        } catch (error) {
          console.error('Error creando sesión:', error);
        }
      }
    }
  };
  </script>
  