<template>
  <div class="error alert alert-danger"  v-if="errorMsg != ''">
    {{ errorMsg }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('error', ['errorMsg'])
  }
};
</script>

<style scoped>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>