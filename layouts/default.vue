<template>
  <div class="background">
    <div class="background-left-part"></div>
    <div class="app-container-wrapper">
      <div v-bind:class="{hidden: lines.hide_1}" class="line line-type-2 line-position-left"></div>
      <div v-bind:class="{hidden: lines.hide_2}" class="line line-type-2 line-position-left-top"></div>
      <div v-bind:class="{hidden: lines.hide_3}" class="line line-type-3 line-position-right-top"></div>
      <div v-bind:class="{hidden: lines.hide_4}" class="line line-type-2 reverted line-position-right"></div>
      <div v-bind:class="{hidden: lines.hide_5}" class="line line-type-1 line-position-right-bottom"></div>
      <div v-bind:class="{hidden: lines.hide_6}" class="line line-type-2 reverted line-position-left-bottom"></div>

      <div class="app-container">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"

  @Component({})
  export default class DefaultLayout extends Vue {
    lines = {
      hide_1: true,
      hide_2: true,
      hide_3: true,
      hide_4: true,
      hide_5: true,
      hide_6: true,
    };

    mounted() {
      const self = this;
      self.lines.hide_1 = false;
      self.lines.hide_4 = false;
      setTimeout(function () {
        self.lines.hide_3 = false;
      }, 300);
      setTimeout(function () {
        self.lines.hide_2 = false;
        self.lines.hide_6 = false;
      }, 700);
      setTimeout(function () {
        self.lines.hide_5 = false;
      }, 850)
    }
  }
</script>
