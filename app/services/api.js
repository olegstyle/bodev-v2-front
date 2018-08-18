import {ContactModel} from '~/app/models/ContactModel';
import {StatusModel} from '~/app/models/StatusModel';
import config from '~/app/config';
import {ProjectsModel} from '~/app/models/ProjectsModel';
import {PortfolioModel} from '~/app/models/PortfolioModel';
import {TechGroupsModel} from '~/app/models/TechGroupsModel';
import {TechStacksModel} from '~/app/models/TechStacksModel';

const axios = require('axios').create({
  baseURL: config.api.url,
});

export class ApiService {
  /**
   * @param {ContactModel} model
   * @return {Promise<StatusModel>}
   */
  static async sendContactForm(model) {
    try {
      return new StatusModel(
        (await axios.post('contact/send', model.toBaseObject())).data);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<ProjectsModel>}
   */
  static async getProjects() {
    try {
      return new ProjectsModel((await axios.get('projects')).data);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<PortfolioModel>}
   */
  static async getPortfolioData() {
    try {
      return new PortfolioModel((await axios.get('getData')).data);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<TechGroupsModel>}
   */
  static async getTechGroups() {
    try {
      return new TechGroupsModel((await axios.get('techGroups')).data);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<TechGroupsModel>}
   */
  static async getTechStacks() {
    try {
      return new TechStacksModel((await axios.get('techStacks')).data);
    } catch (e) {
      console.error(e);
    }
  }
}
