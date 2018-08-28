<template>
  <div class="Aligner">
    <div class="Aligner-item Aligner-item--top">&nbsp;</div>
    <div class="Aligner-item" v-bind:class="{'transparent-block': !loading}">
      <bounce-loader :loading="true" :color="'#6bbdde'" :size="'152px'"></bounce-loader>
    </div>
    <div class="Aligner-item Aligner-item--bottom">&nbsp;</div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from "nuxt-property-decorator";
  import {Action, Getter} from "vuex-class";
  import {ApiEnums} from "../store/enums/ApiEnums";
  import Router from "vue-router";
  import BounceLoader from "vue-spinner/src/BounceLoader.vue";

  const ActionEnum = ApiEnums.ActionEnum;
  const GetterEnum = ApiEnums.GetterEnum;

  const namespace: string = 'api';

  @Component({
    components: {
      BounceLoader
    }
  })
  export default class Loading extends Vue {
    $router: Router;
    loading: boolean = true;

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

      this.loading = false;
      const self = this;
      setTimeout(function () {
        self.$router.push('/main');
      }, 500);
    }

    mounted() {
      this.loading = true;
      this.updatePortfolioData();
      this.updateProjects();
      this.updateTechGroups();
      this.updateTechStacks();
    }
  }
</script>
