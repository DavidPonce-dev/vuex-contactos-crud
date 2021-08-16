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
  <div class="card m-3">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Correo</th>
          <th scope="col">Telefono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personas" v-bind:key="persona.id">
          <th>{{ persona.nombre }}</th>
          <td>{{ persona.edad }}</td>
          <td>{{ persona.correo }}</td>
          <td>{{ persona.telefono }}</td>
          <td>
            <button class="btn btn-info" v-on:click.prevent="editar(persona)">✏</button>
            <button class="btn btn-danger" v-on:click.prevent="borrar(persona)">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>