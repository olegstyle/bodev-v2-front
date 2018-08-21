import {ApiService} from '~/app/services/api';
import {ApiTypes} from "~/app/types/api";
import {ApiEnums} from "~/store/enums/ApiEnums";

const MutationEnum = ApiEnums.MutationEnum;
const ActionEnum = ApiEnums.ActionEnum;
const GetterEnum = ApiEnums.GetterEnum;

const _getters = {};
_getters[GetterEnum.PORTFOLIO_DATA] = (state: ApiTypes.StateD) => state.portfolioData;
_getters[GetterEnum.PROJECTS] = (state: ApiTypes.StateD) => state.projects;
_getters[GetterEnum.TECH_STACKS] = (state: ApiTypes.StateD) => state.techStacks;
_getters[GetterEnum.TECH_GROUPS] = (state: ApiTypes.StateD) => state.techGroups;

const _mutations = {};
_mutations[MutationEnum.PORTFOLIO_DATA] = (store: ApiTypes.StateD, data: ApiTypes.PortfolioD) => store.portfolioData = data;
_mutations[MutationEnum.PROJECTS] = (store: ApiTypes.StateD, data: ApiTypes.ProjectD[]) => store.projects = data;
_mutations[MutationEnum.TECH_STACKS] = (store: ApiTypes.StateD, data: ApiTypes.TechStackD[]) => store.techStacks = data;
_mutations[MutationEnum.TECH_GROUPS] = (store: ApiTypes.StateD, data: ApiTypes.TechGroupD[]) => store.techGroups = data;

const _actions = {};
_actions[ActionEnum.PORTFOLIO_DATA] = ({commit}) => {
  ApiService.getPortfolioData().then(function (portfolioData: ApiTypes.PortfolioD) {
    commit(MutationEnum.PORTFOLIO_DATA, portfolioData);
  });
};
_actions[ActionEnum.PROJECTS] = ({commit}) => {
  ApiService.getProjects().then(function (projects: ApiTypes.ProjectD[]) {
    commit(MutationEnum.PROJECTS, projects);
  });
};
_actions[ActionEnum.TECH_GROUPS] = ({commit}) => {
  ApiService.getTechGroups().then(function (techGroups: ApiTypes.TechGroupD[]) {
    commit(MutationEnum.TECH_GROUPS, techGroups);
  });
};
_actions[ActionEnum.TECH_STACKS] = ({commit}) => {
  ApiService.getTechStacks().then(function (techStacks: ApiTypes.TechStackD[]) {
    commit(MutationEnum.TECH_STACKS, techStacks);
  });
};

export const state = (): ApiTypes.StateD => ({
  portfolioData: null,
  projects: null,
  techStacks: null,
  techGroups: null,
});
export const getters = _getters;
export const mutations = _mutations;
export const actions = _actions;
