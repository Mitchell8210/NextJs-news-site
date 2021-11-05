import React, { FunctionComponent } from "react";
import ListStyles from "../styles/components/TileList.module.css";
import { Source } from "../types/source";
import ArticleTile from "./ArticleTile";
import SourceTile from "./SourceTile";

type Props = {
  sources?: Source[];
  articles?: any;
};

const TileList: FunctionComponent<Props> = ({ sources, articles }) => {
  return (
    <div className={ListStyles.container}>
      {sources &&
        sources.map((source: Source) => (
          <SourceTile source={source} key={source.id} />
        ))}
      {articles &&
        articles.map((article: any) => (
          <ArticleTile article={article} key={article.source.id} />
        ))}
    </div>
  );
};

export default TileList;
