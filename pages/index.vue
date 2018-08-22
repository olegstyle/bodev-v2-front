<template>
  <div>Loading<span v-html="loadingDots"></span></div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from "nuxt-property-decorator";
  import {Action, Getter} from "vuex-class";
  import {ApiEnums} from '../store/enums/ApiEnums';
  import Router from "vue-router";

  const ActionEnum = ApiEnums.ActionEnum;
  const GetterEnum = ApiEnums.GetterEnum;

  const namespace: string = 'api';

  @Component({})
  export default class Loading extends Vue {
    $router: Router;
    loadingInterval: any;
    loadingDots: string = '';

    layout (context) {
      return 'loading';
    }

    @Getter(GetterEnum.PORTFOLIO_DATA, {namespace}) portfolioData;
    @Getter(GetterEnum.PROJECTS, {namespace}) projects;
    @Getter(GetterEnum.TECH_GROUPS, {namespace}) techGroups;
    @Getter(GetterEnum.TECH_STACKS, {namespace}) techStacks;

    @Action(ActionEnum.PORTFOLIO_DATA, {namespace}) updatePortfolioData;
    @Action(ActionEnum.PROJECTS, {namespace}) updateProjects;
    @Action(ActionEnum.TECH_GROUPS, {namespace}) updateTechGroups;
    @Action(ActionEnum.TECH_STACKS, {namespace}) updateTechStacks;

    @Watch('portfolioData')
    @Watch('projects')
    @Watch('techGroups')
    @Watch('techStacks')
    onDataChanged() {
      if (this.portfolioData === null || this.projects === null || this.techGroups === null || this.techStacks === null) {
        return;
      }

      this.$router.push('/main');
    }

    updateLoadingDots() {
      const times = ((new Date()).getTime() / 500) % 3;
      let dots = '';
      for (let i = 0; i < times; i += 1) {
        dots += '.';
      }

      this.loadingDots = dots;
    }

    mounted() {
      this.updatePortfolioData();
      this.updateProjects();
      this.updateTechGroups();
      this.updateTechStacks();

      this.loadingInterval = setInterval(() => this.updateLoadingDots(), 500);
    }

    beforeDestroy () {
      clearInterval(this.loadingInterval);
    }
  }
</script>
