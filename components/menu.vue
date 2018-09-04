<template>
  <div class="menu-wrapper">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="navbar-item" v-for="(item, index) in menuList" :key="index">
          <a class="nav-link"
             v-bind:class="{active: item.active}"
             v-on:mouseover="linkOver"
             v-on:mouseleave="linkLeave"
             href="#">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <div class="nav-link-line"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";

  @Component({})
  export default class Menu extends Vue {
    menuList = [
      {
        'label': 'About Me',
        'active': true
      },
      {
        'label': 'Skills',
      },
      {
        'label': 'Projects',
      },
      {
        'label': 'Contacts',
      },
    ];

    linkOver(event) {
      console.log('over', event);
    }

    linkLeave(event) {
      console.log('leave', event);
    }
  }
</script>
