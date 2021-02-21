<template>
  <div class="dropdown">
    <i class="arrow down"></i>
    <div class="dropdown-content">
      <a href="#" @click="$emit('edit')">Edit</a>
      <a href="#" @click="$emit('delete')">Delete</a>
    </div>
  </div>
</template>

<script lang="ts">
import '../styles/components/dropdown.scss';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dropdown extends Vue {}
</script>

<style scoped lang="scss"></style>
