<template>
  <section id="portfolio">
    <div class="container-with-sidebar">
      <Sidebar :imageUrl="'/me.jpg'" />
      <div class="content">
        Content
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  import Sidebar from "../../components/sidebar.vue";
  import {Getter} from "vuex-class";
  import {ApiEnums} from "../../store/enums/ApiEnums";
  import {ApiTypes} from '../../app/types/api';
  const GetterEnum = ApiEnums.GetterEnum;

  @Component({
    components: {
      Sidebar
    }
  })
  export default class Porfolio extends Vue {
    @Getter(GetterEnum.PORTFOLIO_DATA, {namespace: 'api'}) portfolioData: ApiTypes.PortfolioD;
  }
</script>
