<template>
  <section id="portfolio">
    <div class="container-with-sidebar">
      <Sidebar :imageUrl="'/me.jpg'" />
      <div class="content">
        <Navbar />
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
  import Navbar from "../../components/navbar";
  const GetterEnum = ApiEnums.GetterEnum;

  @Component({
    components: {
      Navbar,
      Sidebar
    }
  })
  export default class Porfolio extends Vue {
    @Getter(GetterEnum.PORTFOLIO_DATA, {namespace: 'api'}) portfolioData: ApiTypes.PortfolioD;
  }
</script>
