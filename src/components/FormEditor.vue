<script>
import { mapActions, mapState } from "vuex";
import Persona from "../models/Persona";

import Error from "./Error";
export default {
  data() {
    return {
      persona: new Persona(),
      error: ""
    };
  },
  components:{
    Error
  },
  mounted() {
    this.persona = { ...this.personas[this.editId] };
  },
  computed: {
    ...mapState("personas", ["editId", "personas"]),
  },
  methods: {
    ...mapActions("personas", ["setPersona", "setEditId"]),
    submit() {
      try {
        this.setPersona(this.persona);
      } catch (error) {
        this.error = error.message;
        setTimeout(() => (this.error = ""), 3000);
      }
    },
  },
};
</script>

<template>
  <div class="card bg-dark p-3 m-3 editor">
    <form v-on:submit.prevent="submit">
      <input
        v-model="persona.nombre"
        class="form-control mb-3"
        type="text"
        placeholder="Inserte nombre"
      />
      <input
        v-model="persona.edad"
        class="form-control mb-3"
        type="text"
        placeholder="Inserte edad"
      />
      <input
        v-model="persona.correo"
        class="form-control mb-3"
        type="text"
        placeholder="Inserte correo"
      />
      <input
        v-model="persona.telefono"
        class="form-control mb-3"
        type="text"
        placeholder="Inserte telefono"
      />
      <button type="submit" class="btn btn-info">Editar persona</button>
      <a @click="setEditId(null)" class="ms-1 btn btn-danger">Cerrar editor</a>
    </form>
    <Error v-if="error != ''" :error=error />
  </div>
</template>

<style scoped>
.editor {
  border: 1px #fff solid;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0px;
}
</style>