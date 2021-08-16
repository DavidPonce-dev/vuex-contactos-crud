<script>
import { mapActions, mapState } from "vuex";
import Persona from "../models/Persona";
import FormEditor from "./FormEditor";
export default {
  components: {
    FormEditor,
  },
  data() {
    return {
      persona: new Persona(),
      error: "",
    };
  },
  computed: {
    ...mapState("personas", ["editId"]),
  },
  methods: {
    ...mapActions("personas", ["addPersona"]),
    submit() {
      try {
        this.persona.id = new Date().toString();
        this.addPersona(this.persona);
        this.persona = new Persona();
      } catch (error) {
        this.error = error.message;
        setTimeout(() => this.error = '',3000)
      }
    },
  },
};
</script>

<template>
  <div class="card bg-dark p-3 m-3">
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
      <button type="submit" class="btn btn-success">
        Agregar persona a la lista
      </button>
    </form>
    {{}}
    <div v-if="error != ''" class="error alert alert-danger" role="alert">
      {{ error }}
    </div>
    <FormEditor v-if="editId != null" />
  </div>
</template>

<style scoped>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>