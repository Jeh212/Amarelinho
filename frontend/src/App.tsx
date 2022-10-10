import styles from "./App.module.css";
import { Header } from "./componentes/Header";
import { NewJobModal } from "./componentes/Modal";
import { SearchBar } from "./componentes/SearchBar";
import "./global.css";

import { FormEvent, useEffect, useState } from "react";
import { API } from "./api/Axios";
import { RequestApiURI } from "./api/utils/Requests";
import { JobCard } from "./componentes/JobCard";

interface IListJobs {
  id: string;
  title: string;
  description: string;
  companyName: string;
  cityName: string;
  stateName: string;
  updatedAt: Date;
  createdAt: Date;
}

const App = () => {
  const [isNewJobModalOpen, setIsNewJobModalOpen] = useState(false);
  const [listAllJobs, setListAllJobs] = useState<IListJobs[]>([]);
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState<IListJobs[]>([]);

  async function handleSearchJob(event: FormEvent) {
    event.preventDefault();

    const { data } = await API.get(
      `${RequestApiURI.LIST_FILTERED}/?title=${searchData}&cityName=${searchData}`
    );

    setFilteredData(data);
  }

  const handleOpenNewJobModal = () => {
    setIsNewJobModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsNewJobModalOpen(false);
  };

  useEffect(() => {
    API.get(RequestApiURI.LIST_VACANCY).then(({ data }) => {
      setListAllJobs(data);
    });
  }, [isNewJobModalOpen]);

  return (
    <>
      <Header />

      <NewJobModal
        isOpen={isNewJobModalOpen}
        onRequestClose={handleCloseModal}
      />
      <button className={styles.modalButton}></button>

      <div className={styles.wrapper}>
        <h3>Cadastrar nova vaga</h3>

        <button className={styles.newJob} onClick={handleOpenNewJobModal}>
          Add Job
        </button>

        <SearchBar
          searchData={searchData}
          setSearchData={setSearchData}
          handleSearchJob={handleSearchJob}
        />
        <main>
          {filteredData.length > 0
            ? filteredData.map((job) => {
                return (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    description={job.description}
                    companyName={job.companyName}
                    cityName={job.cityName}
                    stateName={job.stateName}
                    updatedAt={job.updatedAt}
                  />
                );
              })
            : listAllJobs.map((job) => {
                return (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    description={job.description}
                    companyName={job.companyName}
                    cityName={job.cityName}
                    stateName={job.stateName}
                    updatedAt={job.updatedAt}
                  />
                );
              })}
        </main>
      </div>
    </>
  );
};
export default App;
