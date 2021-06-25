import styled from "styled-components";
import List from "../../elements/List";
import { NewsArticles } from "../../types";
import NewsTeaserItem from "./NewsTeaserItem";
import NewsListItem from "./NewsListItem";

export type NewsListContainerProps = { articles: NewsArticles };
function NewsContainer({ articles }: NewsListContainerProps) {
  const newestArticle = articles[0];
  const slicedArticles = articles.slice(1, 4);

  return (
    <>
      {articles.length === 0 && (
        <NoNewsMessage>
          Sorry, but there is nothing we can talk about.
        </NoNewsMessage>
      )}
      {articles.length > 0 && (
        <List>
          <NewsTeaserItem article={newestArticle} />
          {slicedArticles.map((article, index) => (
            <NewsListItem key={index} article={article} />
          ))}
        </List>
      )}
    </>
  );
}

export default NewsContainer;

const NoNewsMessage = styled.p`
  background-color: var(--content-background-alternative);
  padding: var(--medium-spacing);
  text-align: center;
`;
