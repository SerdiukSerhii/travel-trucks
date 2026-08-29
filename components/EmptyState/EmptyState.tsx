import Image from 'next/image';
import ButtonBase from '@/components/ButtonBase/ButtonBase';
import css from './EmptyState.module.css';
import { IoCloseOutline } from 'react-icons/io5';

const EmptyState = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.image_wrapper}>
        <Image
          src="/images/empty-camper.webp"
          alt="Camper in the mountains"
          width={488}
          height={463}
          className={css.image}
        />
      </div>

      <div className={css.text_content}>
        <h3 className={css.title}>No campers found</h3>

        <p className={css.desc}>
          We couldn&apos;t find any campers matching your filters. Try adjusting
          your search or clearing some filters.
        </p>
      </div>

      <div className={css.actions}>
        <ButtonBase
          type="button"
          variant="secondary"
          className={css.clear_btn}
        >
          <IoCloseOutline className={css.clearIcon} />
          Clear filters
        </ButtonBase>

        <ButtonBase
          href="/catalog"
          className={css.allButton}
        >
          View all campers
        </ButtonBase>
      </div>
    </div>
  );
};

export default EmptyState;
