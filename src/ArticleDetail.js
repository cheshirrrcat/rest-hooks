import React from 'react';

const ArticleDetail = ({article}) => {
  return (
    <article>
      <h2>{article.employee_name}</h2>
      <div>{article.employee_salary}</div>
    </article>
  );
}

export default ArticleDetail;
