function getArticleGenerator(articles) {
  const mainDiv = document.querySelector("#content");

  return function () {

    const currentLine = articles.shift();
    
    if (currentLine !== undefined) {
      const article = document.createElement("article");
      article.innerHTML = currentLine;
      mainDiv.appendChild(article);
      return articles;
    }
    
  };
}
