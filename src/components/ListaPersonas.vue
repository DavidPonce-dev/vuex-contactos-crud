<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("personas", ["personas"]),
  },
  methods: {
    ...mapActions("personas", ["setEditId", "delPersona"]),
    ...mapActions("error", ["setErrorMsg"]),

    editar(persona) {
      this.setEditId(this.personas.indexOf(persona));
    },
    borrar(persona) {
      try {
        this.delPersona(persona);
      } catch (error) {
        this.setErrorMsg(error.message);
      }
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="persona in personas" v-bind:key="persona.id">
      {{ persona.nombre }} - {{ persona.telefono }} - {{ persona.correo }}
      <button v-on:click.prevent="editar(persona)">Editar</button>
      <button v-on:click.prevent="borrar(persona)">Borrar</button>
    </li>
  </ul>
</template>

<style>
</style>