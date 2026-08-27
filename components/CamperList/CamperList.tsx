import { Camper } from '@/types/camper';

interface CamperListProps {
  campers: Camper[];
}

const CamperList = ({ campers }: CamperListProps) => {
  return (
    <ul>
      {campers.map(camper => (
        <li key={camper.id}>{camper.name}</li>
      ))}
    </ul>
  );
};

export default CamperList;
