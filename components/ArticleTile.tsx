import React from "react";
import ArticleStyles from "../styles/components/ArticleTile.module.css";
import Link from "next/link";

const ArticleTile = ({ article }: any) => {
  return (
    // <Link
    //   href="/news/[source]/article/[article]"
    //   as={`/news/${article.source.id}/article/${article.title}`}
    // >
    <a href={article.url} target="_blank" rel="noreferrer noopener">
      <div className={ArticleStyles.card}>
        <img src={article.urlToImage} width="100%" />
        <div className={ArticleStyles.author}>{article.author}</div>
        <div className={ArticleStyles.title}>{article.title}</div>
        <div className={ArticleStyles.description}>{article.description}</div>
      </div>
    </a>
    // </Link>
  );
};

export default ArticleTile;
