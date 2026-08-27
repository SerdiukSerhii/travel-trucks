import { Camper } from '@/types/camper';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './CamperList.module.css';

interface CamperListProps {
  campers: Camper[];
}

const CamperList = ({ campers }: CamperListProps) => {
  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
