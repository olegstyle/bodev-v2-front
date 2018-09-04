<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <div class="title">About Me</div>

    <Menu />
  </nav>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  import Menu from "./menu";

  @Component({
    components: {
      Menu,
    },
  })
  export default class NavBar extends Vue {
  }
</script>
