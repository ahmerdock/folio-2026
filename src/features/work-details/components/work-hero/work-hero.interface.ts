import { IWorkDetails } from "@/interfaces";

export interface IWorkHeroProps {
  title: string;
  tags: string[];
  meta: IWorkDetails["meta"];
  links?: IWorkDetails["links"];
  stack?: IWorkDetails["stack"];
  status?: IWorkDetails["status"];
}
