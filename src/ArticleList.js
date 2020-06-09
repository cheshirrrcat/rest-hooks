import React from 'react';
import { useResource } from 'rest-hooks';
import ArticleResource from './resources/article';
import ArticleDetail from './ArticleDetail';

const ArticleList = () => {
  const {data: articles} = useResource(ArticleResource.listShape(), {});
  console.log(articles);
  
  return (
    <section>
      {articles.map(article => (
        <ArticleDetail key={article.pk()} article={article} />
      ))}
    </section>
  );
}

export default ArticleList;
