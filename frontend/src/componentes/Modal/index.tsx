import { XCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { API } from "../../api/Axios";
import { RequestApiURI } from "../../api/utils/Requests";
import styles from "./modal.module.css";
type NewJobsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const NewJobModal = ({ isOpen, onRequestClose }: NewJobsModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");

  const handleCreateNewJobSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const jobData = {
      title,
      description,
      companyName,
      cityName,
      stateName,
    };

    const api = await API.post(RequestApiURI.CREATE_VACANCY, jobData);

    if (api.status === 204) {
      setTitle("");
      setDescription("");
      setCompanyName("");
      setCityName("");
      setStateName("");
      onRequestClose();
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles.overlay}
        className={styles.modalContent}
      >
        <form className={styles.jobForm} onSubmit={handleCreateNewJobSubmit}>
          <button
            className={styles.modalCloseButton}
            type="button"
            onClick={onRequestClose}
          >
            <XCircle size={32} />
          </button>

          <h2>Detalhes da vaga</h2>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            required={true}
            placeholder="Título da vaga"
          />
          <input
            type="text"
            placeholder="Descrição da vaga"
            required={true}
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
          <input
            type="text"
            required={true}
            placeholder="Nome da empresa"
            onChange={(event) => setCompanyName(event.target.value)}
            value={companyName}
          />
          <input
            required={true}
            type="text"
            placeholder="Cidade"
            onChange={(event) => setCityName(event.target.value)}
            value={cityName}
          />
          <input
            required={true}
            type="text"
            placeholder="Estado"
            onChange={(event) => setStateName(event.target.value)}
            value={stateName}
          />
          <button type="submit">Salvar</button>
        </form>
      </Modal>
    </>
  );
};

export { NewJobModal };
