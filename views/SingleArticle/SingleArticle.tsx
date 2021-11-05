import React from "react";
import ArticleStyles from "../../styles/components/SingleArticleView.module.css";
const SingleArticle = ({ article }: any) => {
  return (
    <div className={ArticleStyles.container}>
      <div className={ArticleStyles.image}>
        <img src={article?.urlToImage} width="100%" />
      </div>
      <div className={ArticleStyles.author}>{article?.author}</div>
      <div className={ArticleStyles.title}>{article?.title}</div>
      {/* <div className={ArticleStyles.description}>{article?.description}</div> */}
      <div className={ArticleStyles.content}>{article?.content}</div>
    </div>
  );
};

export default SingleArticle;
