<template>
  <div class="card">
    <div class="card-header pa-3">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.card-header {
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.2);
}
</style>
