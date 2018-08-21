import config from '~/app/config';
import axios, {AxiosPromise} from "axios";
import {ApiTypes} from "~/app/types/api";


const axiosClient = axios.create({
  baseURL: config.api.url,
});

enum RequestMethod {
  POST = 'post',
  GET = 'get',
}

export class ApiService {
  public static async sendContactForm(model: ApiTypes.ContactD): Promise<ApiTypes.StatusD> {
    return <ApiTypes.StatusD> (await this.call(RequestMethod.POST, 'contact/send', {
      name: model.name,
      email: model.email,
      message: model.message,
      captcha: model.captcha,
    })).data;
  }

  public static async getProjects(): Promise<ApiTypes.ProjectD[]> {
    const projects = (await this.call(RequestMethod.GET, 'projects')).data;
    const projectModels: ApiTypes.ProjectD[] = [];
    for (const k in projects) {
      projectModels.push(<ApiTypes.ProjectD> projects[k]);
    }

    return projectModels;
  }

  public static async getPortfolioData(): Promise<ApiTypes.PortfolioD> {
    return <ApiTypes.PortfolioD> (await this.call(RequestMethod.GET, 'getData')).data;
  }

  public static async getTechGroups(): Promise<ApiTypes.TechGroupD[]> {
    const techGroups = (await this.call(RequestMethod.GET, 'techGroups')).data;
    const techGroupModels: ApiTypes.TechGroupD[] = [];
    for (const k in techGroups) {
      techGroupModels.push(<ApiTypes.TechGroupD> techGroups[k]);
    }

    return techGroupModels;
  }

  static async getTechStacks(): Promise<ApiTypes.TechStackD[]> {
    const techStacks = (await this.call(RequestMethod.GET, 'techStacks')).data;
    const techStackModels: ApiTypes.TechStackD[] = [];
    for (const k in techStacks) {
      techStackModels.push(<ApiTypes.TechStackD> techStacks[k]);
    }

    return techStackModels;
  }

  private static call(method: RequestMethod, url: string, params: Object = {}): AxiosPromise<any> {
    try {
      if (method === RequestMethod.POST) {
        return axiosClient.post(url, params);
      }
      return axiosClient.get(url, params);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
