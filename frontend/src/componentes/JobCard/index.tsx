import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import avatarLogo from "../../assets/avatar.svg";
import { Avatar } from "../Avatar";
import styles from "./jobcard.module.css";

interface IListJobs {
  title: string;
  description: string;
  companyName: string;
  cityName: string;
  stateName: string;
  updatedAt: Date;
}

const JobCard = ({
  cityName,
  companyName,
  description,
  stateName,
  title,
  updatedAt,
}: IListJobs) => {
  const updatedDateFormated = format(
    new Date(updatedAt),
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const updatedDateRelativeToNow = formatDistanceToNow(new Date(updatedAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.jobCard}>
      <header>
        <div className={styles.jobDetails}>
          <Avatar src={avatarLogo} />
          <div className={styles.jobInfo}>
            <strong>{companyName}</strong>
            <span>{title}</span>
          </div>
        </div>
        <time title={updatedDateFormated} dateTime={updatedDateFormated}>
          {updatedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>{description}</p>
      </div>
      <span className={styles.jobLocation}>{`${cityName} - ${stateName}`}</span>
    </article>
  );
};

export { JobCard };
