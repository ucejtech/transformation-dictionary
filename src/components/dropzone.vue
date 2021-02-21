<template>
  <div
    class="dropzone d-grid align-center justify-center"
    @dragenter="dragEnter"
    @dragover.prevent="dragOver"
    @dragleave="dragLeave"
    @drop.prevent="drop"
  >
    <div v-if="!isDropzoneActive">
      <span class="text-20 text-bold text-primary"
        >Drag & drop your Lab File in .json format</span
      >
      <div class="text-14 text-center mt-2">
        or Upload from your
        <label class="text-info text-bold clickable" for="upload"
          >computer</label
        >
        <slot />
      </div>
    </div>
    <div v-else>
      <span class="text-20 text-bold text-primary">Drop File</span>
    </div>
    <input
      type="file"
      id="upload"
      hidden
      @change="(e) => $emit('fileChange', e.target.files)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dropzone extends Vue {
  private isDropzoneActive = false;

  dragEnter() {
    this.isDropzoneActive = true;
  }

  dragOver() {
    this.isDropzoneActive = true;
  }

  drop(e: DragEvent) {
    this.$emit('fileChange', e.dataTransfer?.files);
    this.isDropzoneActive = false;
  }

  dragLeave() {
    this.isDropzoneActive = false;
  }
}
</script>

<style scoped lang="scss">
.dropzone {
  height: 190px;
  border-radius: 7px;
  border: 1px dashed $color-primary;
  background-color: rgba($color: $color-accent, $alpha: 0.2);
}
</style>
