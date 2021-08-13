<template>
  <div>
    <ul>
      <li v-for="persona in personas" v-bind:key="persona.id">
        {{ persona.nombre }} - {{ persona.telefono }} - {{ persona.correo }}
      </li>
    </ul>
		<form>
			<input type="text" placeholder="Inserte nombre">
			<input type="text" placeholder="Inserte nombre">
			<input type="text" placeholder="Inserte nombre">
		</form>
  </div>
</template>

<script>
export default {
  computed: {
    personas() {
      return this.$store.personas;
    },
  },
};
</script>

<style>
</style>