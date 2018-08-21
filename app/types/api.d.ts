export namespace ApiTypes {
  type StatusD = {
    success: boolean;
    errors: any[];
  }

  type ContactD = {
    name: string;
    email: string;
    message: string;
    captcha: string;
  }

  type PortfolioD = {
    locale: string;
    fullName: string;
    email: string;
    birthday: string;
    birthplace: string;
    skype?: string;
    position: string;
    subposition?: string;
    aboutMeLong?: string;
    aboutMeShort?: string;
    socialLinks: {
      vk?: string;
      fb?: string;
      instagram?: string;
      linkedin?: string;
    };
  }

  type ProjectD = {
    id: number;
    name_ru?: string;
    gist_ru?: string;
    description_ru?: string;
    name_en?: string;
    gist_en?: string;
    description_en?: string;
    image_url?: string;
    date_start?: string;
    date_end?: string;
    link?: string;
    created_at: string;
    updated_at?: string;
    stacks: StackD[];
  }

  type StackD = {
    id: number;
    project_id: number;
    tech_id: number;
    created_at: string;
    updated_at: string;
  }

  type TechGroupD = {
    id: number;
    name: string;
    order?: number;
    created_at?: string;
    updated_at?: string;
  }

  type TechStackD = {
    id: number;
    name: string;
    image_url?: string;
    level?: string;
    date_start?: string;
    created_at?: string;
    updated_at?: string;
    group_id?: number;
  }

  type StateD = {
    portfolioData: ApiTypes.PortfolioD | null;
    projects: ApiTypes.ProjectD[] | null;
    techStacks: ApiTypes.TechStackD[] | null;
    techGroups: ApiTypes.TechGroupD[] | null;
  };
}
