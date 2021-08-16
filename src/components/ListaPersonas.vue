<script>
import Vuex from "vuex";
import Persona from "../models/Persona";

export default {
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...Vuex.mapActions('personas', ['addPersona', 'setPersona', 'delPersona']),
    
		submit() {
      const persona = new Persona();
      persona.nombre = this.nombre;
      persona.id = new Date().toString();
			this.addPersona(persona);
    },
  },
  computed: {
    ...Vuex.mapState('personas', ['personas']),
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="persona in personas" v-bind:key="persona.id">
        {{ persona.nombre }} - {{ persona.telefono }} - {{ persona.correo }}
      </li>
    </ul>
    <form v-on:submit.prevent="submit">
      <input v-model="nombre" type="text" placeholder="Inserte nombre" />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<style>
</style>