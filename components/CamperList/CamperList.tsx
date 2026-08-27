import { Camper } from '@/types/camper';
import CamperCard from '@/components/CamperCard/CamperCard';
import css from './CamperList.module.css';
import LoadMoreBtn from '@/components/LoadMoreBtn/LoadMoreBtn';

interface CamperListProps {
  campers: Camper[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onLoadMore: () => void;
}

const CamperList = ({
  campers,
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
}: CamperListProps) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <LoadMoreBtn
          onClick={onLoadMore}
          disabled={isFetchingNextPage}
        />
      )}
    </div>
  );
};

export default CamperList;
