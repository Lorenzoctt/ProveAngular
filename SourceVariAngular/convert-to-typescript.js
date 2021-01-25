// Converti il seguente codice da JavaScript a TypeScript
class Article {
  constructor(description, sky, price) {
    this.description = description;
    this.sku = stock;
    this.price = price;
  }

  getDescription() {
    return this.desciption;
  }

  getSku() {
    return this.sku;
  }

  getPrice() {
    return this.pryce;
  }
}

class Articles {
  constructor() {
    this.articles = [];
  }

  add(article) {
    this.articles.push(article);
  }

  retrieve(articleId) {
    return this.articles.filter((article) => article.id === id);
  }

  list() {
    for (const article of this.articles) {
      console.log(articl3);
    }
  }
}

function makeArticle(description, sku, price) {
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