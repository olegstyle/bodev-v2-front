export namespace ApiEnums {
  export enum MutationEnum {
    PORTFOLIO_DATA = 'setPortfolioData',
    PROJECTS = 'setProjects',
    TECH_STACKS = 'setTechStacks',
    TECH_GROUPS = 'setTechGroup',
  }

  export enum ActionEnum {
    PORTFOLIO_DATA = 'updatePortfolioData',
    PROJECTS = 'updateProjects',
    TECH_STACKS = 'updateTechStacks',
    TECH_GROUPS = 'updateTechGroups',
  }

  export enum GetterEnum {
    PORTFOLIO_DATA = 'portfolioData',
    PROJECTS = 'projects',
    TECH_STACKS = 'techStacks',
    TECH_GROUPS = 'techGroups',
  }
}
