<template>
  <div class="menu-wrapper">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="navbar-item" v-for="(item, index) in menuList" :key="index">
          <nuxt-link class="nav-link"
             v-bind:class="{active: item.active}"
             v-on:mouseover.native="linkOver"
             v-on:mouseleave.native="linkLeave"
             v-on:click.native="linkClicked"
             :to="item.link">
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
      <div class="nav-link-line" v-bind:style="{width: lineWidth + 'px', left: lineLeft + 'px'}"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";

  @Component({})
  export default class Menu extends Vue {
    lineWidth = 100;
    lineLeft = 0;
    menuList = [
      {
        'label': 'About Me',
        'link': '/main',
        'active': true,
      },
      {
        'label': 'Skills',
        'link': '/skills',
        'active': false,
      },
      {
        'label': 'Projects',
        'link': '/projects',
        'active': false,
      },
      {
        'label': 'Contacts',
        'link': '/contacts',
        'active': false,
      },
    ];

    mounted() {
      this.setLineToActiveTarget();
    }

    setLineToActiveTarget() {
      this.setLineTarget(this.$el.querySelector('.nav-link.active'));
    }

    setLineTarget(target) {
      this.lineWidth = target.clientWidth;
      this.lineLeft = target.offsetLeft;
    }

    linkOver(event) {
      this.setLineTarget(event.target);
    }

    linkLeave() {
      this.setLineToActiveTarget();
    }

    linkClicked(event) {
      const parent = event.target.parentElement;
      this.setActiveItem(Array.prototype.indexOf.call(parent.parentNode.childNodes, parent));
    }

    setActiveItem(index) {
      for (const i in this.menuList) {
        this.menuList[i].active = (index == i);
      }
      this.setLineToActiveTarget();
    }
  }
</script>
