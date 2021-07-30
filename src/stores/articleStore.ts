import { action, observable } from "mobx";
import { IArticle } from "../interfaces/IArticle";



export class ArticleStore {
    @observable article: IArticle = 
    {title:"",description:"", articleUrl:"", blog:"",imageUrl:""};

  constructor() {
    this.article.title= "";
    this.article.description = "";
    this.article.articleUrl = "";
    this.article.blog ="";
    this.article.imageUrl = "";
  }

  @action
  setArticle(title:string, description:string, articleUrl:string, blog:string, imageUrl:string):void {
    this.article.title= title;
    this.article.description = description;
    this.article.articleUrl = articleUrl;
    this.article.blog = blog;
    this.article.imageUrl = imageUrl;
    }


}

export default new ArticleStore();
