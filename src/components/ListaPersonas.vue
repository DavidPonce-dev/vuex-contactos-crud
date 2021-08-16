<script>
import { mapState, mapActions } from "vuex";
import Error from "./Error";

export default {
  data() {
    return {
      error: "",
    };
  },
  components: {
    Error,
  },
  computed: {
    ...mapState("personas", ["personas"]),
  },
  methods: {
    ...mapActions("personas", ["setEditId", "delPersona"]),

    editar(persona) {
      this.setEditId(this.personas.indexOf(persona));
    },
    borrar(persona) {
      try {
        this.delPersona(persona);
      } catch (error) {
        this.error = error.message;
        setTimeout(() => (this.error = ""), 3000);
      }
    },
  },
};
</script>

<template>
  <ul>
  <Error v-if="error != ''" :error="error" />
    <li v-for="persona in personas" v-bind:key="persona.id">
      {{ persona.nombre }} - {{ persona.telefono }} - {{ persona.correo }}
      <button v-on:click.prevent="editar(persona)">Editar</button>
      <button v-on:click.prevent="borrar(persona)">Borrar</button>
    </li>
  </ul>
</template>

<style>
</style>