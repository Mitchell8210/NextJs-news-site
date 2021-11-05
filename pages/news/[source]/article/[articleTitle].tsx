import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import React from "react";
import { getAllArticlesForParticularSource } from "../../../../api";
import SingleArticle from "../../../../views/SingleArticle/SingleArticle";

const Article = ({ article }: any) => {
  return (
    <div>
      <SingleArticle article={article} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const source = context.params?.source;
  const articleTitle = context.params?.articleTitle;
  const potentialArticles = await getAllArticlesForParticularSource(source);

  const article = potentialArticles.find(
    (article: any) => article.title === articleTitle
  );
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { source: "", articleTitle: "" } }];
  return {
    paths,
    fallback: true,
  };
};

export default Article;
