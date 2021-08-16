<script>
import { mapActions, mapState } from 'vuex';
export default {
	computed: {
		...mapState('personas', ['editId', 'personas'])
	},
	methods: {
		...mapActions('personas', ['setPersona']),
		submit() {
			this.setPersona()
		}
	}
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
    </form>
  </div>
</template>

<style scoped>
.editor {
  position: absolute;
  width:98%;
  top: 10px;
  left: 10px;
}
</style>