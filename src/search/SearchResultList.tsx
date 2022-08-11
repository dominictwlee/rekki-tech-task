import { GetSearchResponse } from "./api";
import styles from "../styles/Search.module.css";

interface SearchResultListProps {
  items?: GetSearchResponse["data"]["items"];
}
export default function SearchResultList({ items }: SearchResultListProps) {
  return (
    <dl style={{ height: "40vh", overflowY: "auto" }}>
      {items?.length === 0 ? (
        <dt>No search results</dt>
      ) : (
        items?.map(({ name, description, authors, global_id }) => (
          <SearchResultListItem
            key={global_id}
            title={name}
            description={description}
            authors={authors}
          />
        ))
      )}
    </dl>
  );
}

interface SearchResultListItemProps {
  title: string;
  authors: string[];
  description: string;
}
function SearchResultListItem({
  title,
  authors,
  description,
}: SearchResultListItemProps) {
  return (
    <>
      <dt className={styles.searchResultTitle}>{title}</dt>
      <dd>{`by ${authors.join(" & ")}`}</dd>
      <dd className={styles.searchResultDescription}>{description}</dd>
    </>
  );
}
