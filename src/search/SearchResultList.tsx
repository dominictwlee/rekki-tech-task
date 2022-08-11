import { GetSearchResponse } from "./api";

interface SearchResultListProps {
  items?: GetSearchResponse["data"]["items"];
}
export default function SearchResultList({ items }: SearchResultListProps) {
  return (
    <dl style={{ height: "40vh", overflowY: "auto" }}>
      {items?.map(({ name, description, authors, global_id }) => (
        <SearchResultListItem
          key={global_id}
          title={name}
          description={description}
          authors={authors}
        />
      ))}
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
      <dt style={{ marginTop: "10px" }}>{title}</dt>
      <dd>{`by ${authors.join(" & ")}`}</dd>
      <dd>{description}</dd>
    </>
  );
}
