import styles from "./search.module.css";

type NewJobsModalProps = {
  searchData: string;
  setSearchData: any;
  handleSearchJob: any;
};

export const SearchBar = ({
  searchData,
  setSearchData,
  handleSearchJob,
}: NewJobsModalProps) => {
  return (
    <>
      <form className={styles.formBar} onSubmit={handleSearchJob} method="get">
        <input
          className={styles.inputSearch}
          type="search"
          value={searchData}
          onChange={(event) => setSearchData(event.target.value)}
          placeholder="Digite o nome da vaga ou da cidade"
          name="search"
        />
        <button type="submit">Procurar</button>
      </form>
    </>
  );
};
