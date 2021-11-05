import React, { FunctionComponent } from "react";
import TileStyles from "../styles/components/SourceTile.module.css";
import { Source } from "../types/source";
import Link from "next/link";

type Props = {
  source: Source;
};

const SourceTile: FunctionComponent<Props> = ({ source }) => {
  return (
    <Link href="/news/[source]" as={`/news/${source.id}`}>
      <a>
        <div className={TileStyles.card}>
          <div className={TileStyles.name}>{source.name}</div>
          <div className={TileStyles.category}>{source.category}</div>
          <div className={TileStyles.description}>{source.description}</div>
          {/* <div className={TileStyles.visit}>
            <a href={source.url} rel="noreferrer noopener" target="_blank">
              Visit Site
            </a>
          </div> */}
        </div>
      </a>
    </Link>
  );
};

export default SourceTile;
