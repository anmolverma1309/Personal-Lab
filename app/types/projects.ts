export interface ProjectUrl {
  text: string;
  url: string;
}

export interface Project {
  id?: string;
  title: string;
  date: string;
  subtext: string;
  url?: string;
  urls?: ProjectUrl[];
}