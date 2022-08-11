import type { NextPage } from "next";
import Head from "next/head";
import useSearch, { FetchStatus } from "../search/hooks";
import SearchBar from "../search/SearchBar";
import SearchResultList from "../search/SearchResultList";
import styles from "../styles/Search.module.css";

const Search: NextPage = () => {
  const { data, status, error, getSearchResult } = useSearch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Search App</title>
        <meta name="description" content="Search App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBar
          onSubmit={getSearchResult}
          error={error?.message}
          isLoading={status === FetchStatus.Loading}
        />
        <SearchResultList items={data?.items} />
      </main>
    </div>
  );
};

export default Search;
