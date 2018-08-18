import {BaseModel} from './BaseModel';

export class PortfolioModel extends BaseModel {
  constructor(portfolioData) {
    super();
    
    this.locale = portfolioData.locale;
    this.fullName = portfolioData.fullName;
    this.email = portfolioData.email;
    this.birthday = portfolioData.birthday;
    this.birthplace = portfolioData.birthplace;
    this.skype = portfolioData.skype;
    this.position = portfolioData.position;
    this.subposition = portfolioData.subposition;
    this.aboutMeLong = portfolioData.aboutMeLong;
    this.aboutMeShort = portfolioData.aboutMeShort;
    this.socialLinks = {
      vk: portfolioData.socialLinks.vk,
      fb: portfolioData.socialLinks.fb,
      instagram: portfolioData.socialLinks.instagram,
      linkedin: portfolioData.socialLinks.linkedin,
    };
  }
}
