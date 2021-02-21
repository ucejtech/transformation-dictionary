<template>
  <button class="transform button pa-2 text-white" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CButton extends Vue {
  @Prop() private text!: string;
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  background: $color-primary;
  border-radius: 5px;
  cursor: pointer;
}
</style>
