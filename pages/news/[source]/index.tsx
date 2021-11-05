import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import {
  getAllArticlesForParticularSource,
  getAllNewsSources,
} from "../../../api";
import TileList from "../../../components/TileList";
import { Source } from "../../../types/source";
import Link from "next/link";

const ListOfArticles = ({ articles }: any) => {
  return (
    <div>
      <div style={{ margin: 60 }}>
        <div style={{ fontSize: 35, fontWeight: "bold" }}>
          {articles[0].source.name}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#00a0ff",
            textDecoration: "underline",
            textAlign: "left",
          }}
        >
          {" "}
          <Link href="/">
            <a>Go back</a>
          </Link>
        </div>
      </div>

      <TileList articles={articles} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const source = context.params?.source;
  const articles = await getAllArticlesForParticularSource(source);
  return {
    props: {
      articles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { sources } = await getAllNewsSources();
  const filtered = sources.filter((source: Source) => source.language === "en");
  const paths = filtered.map((source: Source) => {
    return { params: { source: source.id } };
  });
  return {
    paths,
    fallback: false,
  };
};

export default ListOfArticles;
