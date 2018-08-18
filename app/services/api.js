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
  async sendContactForm(model) {
    try {
      return new StatusModel(
        await axios.post('contact/send', model.toBaseObject()));
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<ProjectsModel>}
   */
  async getProjects() {
    try {
      return new ProjectsModel(await axios.get('projects'));
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<PortfolioModel>}
   */
  async getPortfolioData() {
    try {
      return new PortfolioModel(await axios.get('getData'));
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<TechGroupsModel>}
   */
  async getTechGroups() {
    try {
      return new TechGroupsModel(await axios.get('techGroups'));
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * @return {Promise<TechGroupsModel>}
   */
  async getTechStacks() {
    try {
      return new TechStacksModel(await axios.get('techStacks'));
    } catch (e) {
      console.error(e);
    }
  }
}
