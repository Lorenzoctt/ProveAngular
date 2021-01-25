// Converti il seguente codice da JavaScript a TypeScript
class Article {

    description:string;
    sku:string;
    price:number;

  constructor(description:string, sky:string, price:number) {
    this.description = description;
    this.sku = sky;
    this.price = price;
  }

  getDescription() {
    return this.description;
    ;
  }

  getSku() {
    return this.sku;
  }

  getPrice() {
    return this.price;
  }
}

class Articles {

    articles:number[];
    id:number;
    sku:string;

  constructor() {
    this.articles = [];
  }

  add(article) {
    this.articles.push(article);
  }

  retrieve(articleId) {
    return this.articles.filter((article) => this.id === articleId);
  }

  list() {
    for (const article of this.articles) {
      console.log(article);
    }
  }
}

function makeArticle(description:string, sku:string, price:number) {
  return new Article(description, sku, price);
}

function makeArticleList() {
  return new Articles();
}

const redHat = makeArticle("Red Hat", "k66734", 99.88);
const whiteHat = makeArticle("White Hat", "k66731", 99.88);

const catalog = makeArticleList();
catalog.add(redHat);
catalog.add(whiteHat);
catalog.list();