<script>
import Vuex from "vuex";

export default {
  computed: {
    ...Vuex.mapState("personas", ['editId', "personas"]),
  },
  methods: {
    ...Vuex.mapActions("personas", ["delPersona"]),

    editar(persona) {
      this.editId = persona.id
    },
    borrar(persona) {
      this.delPersona(persona);
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