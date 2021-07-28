import { observable, action } from "mobx";

export interface IUrl {
  name: string;
  done: boolean;
}

export class UrlStore {
  @observable urls: IUrl[] = [];

  constructor() {
    this.loadUrls();
  }
  @action
  public loadUrls() {
    this.urls = JSON.parse(localStorage.getItem("urls") || "");
  }

  @action
  public setUrls(newUrls: IUrl[]) {
    this.urls = newUrls;
  }

  @action
  addUrl = (name: string): void => {
    let newUrl: IUrl[] = [...this.urls, { name, done: false }];
    this.setUrls(newUrl);
    localStorage.setItem("urls", JSON.stringify(newUrl));
  };

  @action
  removeUrl = (i: number): void => {
    let newUrls: IUrl[] = [...this.urls];
    newUrls.splice(i, 1);
    this.setUrls(newUrls);
    localStorage.setItem("urls", JSON.stringify(newUrls));
  };
  @action
  toggleDoneUrl = (i: number): void => {
    const newUrls: IUrl[] = [...this.urls];
    newUrls[i].done = !newUrls[i].done;
    this.setUrls(newUrls);
    localStorage.setItem("urls", JSON.stringify(newUrls));
  };
}

export default new UrlStore();
