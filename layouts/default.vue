<template>
  <div class="background">
    <div class="background-left-part" v-bind:class="{'hidden': !leftPartShowed}"></div>
    <div class="app-container-wrapper" v-bind:class="{'transparent-block': !containerShowed}">
      <div v-bind:class="{hidden: lines[1].hide}" class="line line-type-2 line-position-left"></div>
      <div v-bind:class="{hidden: lines[2].hide}" class="line line-type-2 line-position-left-top"></div>
      <div v-bind:class="{hidden: lines[3].hide}" class="line line-type-3 line-position-right-top"></div>
      <div v-bind:class="{hidden: lines[4].hide}" class="line line-type-2 reverted line-position-right"></div>
      <div v-bind:class="{hidden: lines[5].hide}" class="line line-type-1 line-position-right-bottom"></div>
      <div v-bind:class="{hidden: lines[6].hide}" class="line line-type-2 reverted line-position-left-bottom"></div>

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
    lines = [
      { // 0 not used
        hide: true,
        position: 0,
      },
      {
        hide: true,
        position: 0,
      },
      {
        hide: true,
        position: 0,
      },
      {
        hide: true,
        position: 0,
      },
      {
        hide: true,
        position: 0,
      },
      {
        hide: true,
        position: 0,
      },
      {
        hide: true,
        position: 0,
      },
    ];
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
      }, interval += 200);
      setTimeout(function () {
        self.lines[0].hide = false;
        self.lines[4].hide = false;
      }, interval += 250);
      setTimeout(function () {
        self.lines[3].hide = false;
      }, interval += 250);
      setTimeout(function () {
        self.lines[2].hide = false;
        self.lines[6].hide = false;
      }, interval += 250);
      setTimeout(function () {
        self.lines[5].hide = false;
      }, interval += 100);
    }

    beforeDestroy() {
      this.containerShowed = false;
      this.leftPartShowed = false;
      for (const k in this.lines) {
        this.lines[k].hide = true;
        this.lines[k].position = 0;
      }
    }
  }
</script>
