<template>
  <div class="background">
    <div class="background-left-part" v-bind:class="{'hidden': !leftPartShowed}"></div>
    <div class="app-container-wrapper" v-bind:class="{'transparent-block': !containerShowed}">
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
  import {Component, Vue} from "nuxt-property-decorator"

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
    containerShowed = false;
    leftPartShowed = false;

    mounted() {
      const self = this;
      let interval = 0;
      setTimeout(function () {
        self.leftPartShowed = true;
      }, interval += 100);
      setTimeout(function () {
        self.containerShowed = true;
      }, interval += 400);
      setTimeout(function () {
        self.lines.hide_1 = false;
        self.lines.hide_4 = false;
      }, interval += 300);
      setTimeout(function () {
        self.lines.hide_3 = false;
      }, interval += 300);
      setTimeout(function () {
        self.lines.hide_2 = false;
        self.lines.hide_6 = false;
      }, interval += 300);
      setTimeout(function () {
        self.lines.hide_5 = false;
      }, interval += 150);
    }

    beforeDestroy() {
      this.containerShowed = false;
      this.leftPartShowed = false;
      for (const k in this.lines) {
        this.lines[k] = true;
      }
    }
  }
</script>
