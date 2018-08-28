<template>
  <div class="sidebar" v-bind:class="{hidden: !sidebarShowed}">
    <div class="logo" v-bind:class="{'transparent-block': !imageShowed}"></div>
    <div class="image-wrapper" v-bind:class="{hidden: !imageShowed}">
      <div class="image" v-bind:style="{backgroundImage: `url(${imageUrl})`}"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Watch} from "nuxt-property-decorator";

  @Component({})
  export default class Sidebar extends Vue {
    @Prop(String) imageUrl: string;
    sidebarShowed: boolean = false;
    imageShowed: boolean = false;

    /*@Watch('show')
    onShow(newValue: boolean) {
      console.log(newValue);
    }*/

    mounted() {
      const self = this;
      setTimeout(function() {
        self.sidebarShowed = true;
      }, 3000);

      setTimeout(function() {
        self.imageShowed = true;
      }, 4000);
    }
  }
</script>
