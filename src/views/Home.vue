<template>
  <div class="home">
    <nav class="pa-4 text-18 text-bold">
      Transformation Dictionary
    </nav>
    <section class="main-content pt-md-15 px-md-15 pt-5 px-5">
      <div class="dictionary-transforms">
        <dropzone @fileChange="handleFilechanged">
          <div class="mt-1">
            <a href="/sample.json" download="sample">Download a sample</a>
          </div>
        </dropzone>
        <table class="transformation-table mt-4">
          <tr>
            <th>Simultation Title</th>
            <th>Keyword</th>
            <th>Duration</th>
          </tr>
          <tr v-for="(transform, index) in transformTable" :key="index">
            <td>{{ transform.title }}</td>
            <td>{{ transform.keyword }}</td>
            <td>{{ transform.duration }}</td>
          </tr>
        </table>

        <c-button class="mt-4" text="Transform" @click="transform" />
      </div>
      <div class="dictionary-overview mt-smAndDown-4">
        <card title="Dictionary Overview" class=" pb-1">
          <div class="pt-3 px-7 overview-content mb-4">
            <div
              class="dictionary-conversion my-2 d-flex justify-space-between"
              v-for="(item, index) in getDictionary"
              :key="index"
            >
              <div class="conversion-from">
                <span class="text-bold mr-1">From:</span>{{ item[0] }}
              </div>
              <div class="conversion-to">
                <span class="text-bold mr-1">To:</span>{{ item[1] }}
              </div>
              <div
                class="text-info text-bold clickable"
                @click="enterEditMode(item)"
              >
                Edit
              </div>
              <div
                class="text-error text-bold clickable"
                @click="deleteItem(item)"
              >
                Delete
              </div>
              <!-- <dropdown @edit="update(item.from)" /> -->
            </div>
          </div>
          <div class="mx-3 text-14 text-bold" v-if="isEditing">
            Editing: {{ model.from }}
          </div>
          <div class="mb-4 mx-3 d-flex align-center dictionary-add">
            <input
              type="text"
              class="mx-1"
              v-model="model.from"
              placeholder="From"
            />
            <input
              type="text"
              class="mx-1"
              v-model="model.to"
              placeholder="To"
            />
            <c-button
              class="mx-1"
              :text="isEditing ? 'Edit' : 'Add'"
              @click="update"
            ></c-button>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import '../styles/pages/home.scss';
import { Component, Vue } from 'vue-property-decorator';
import Dropzone from '../components/dropzone.vue';
import Card from '../components/card.vue';
import CButton from '../components/button.vue';
import Dropdown from '../components/dropdown.vue';
import { Action, Getter } from 'vuex-class';
import { TransformTable, UpdateArgument } from '../interfaces/index';
import { jsonReader } from '../helpers';

@Component({
  components: {
    Card,
    CButton,
    Dropzone,
    Dropdown
  }
})
export default class Home extends Vue {
  private model = {
    from: '',
    to: ''
  };
  private isEditing = false;
  private transformTable: TransformTable[] = [];

  update() {
    if (this.model.from !== '' && this.model.to !== '') {
      this.updateDictionary({ ...this.model, action: 'set' });
      if (this.isEditing) this.isEditing = false;
      this.reset();
    }
  }

  reset() {
    this.model = {
      from: '',
      to: ''
    };
  }

  deleteItem(item: string[]) {
    this.updateDictionary({ from: item[0], to: item[1], action: 'delete' });
    this.reset();
  }

  enterEditMode(item: string[]) {
    this.isEditing = true;
    this.model.from = item[0];
    this.model.to = item[1];
  }

  handleFilechanged(files: FileList) {
    this.transformTable = [];

    if (files.length > 0) {
      jsonReader(files[0]).then((jsonResult: TransformTable[]) => {
        this.transformTable = jsonResult;
      });
    } else {
      this.transformTable = [];
    }
  }

  transform() {
    if (this.transformTable.length > 0) {
      this.transformTable = this.transformTable.map((x) => {
        return {
          title: x.title,
          keyword: this.getDictionary.get(x.keyword) || x.keyword,
          duration: x.duration
        };
      });
    }
  }

  @Action('dictionaryUpdate')
  private updateDictionary!: (arg: UpdateArgument) => void;

  @Getter('getDictionary')
  private getDictionary!: Map<string, string>;
}
</script>
