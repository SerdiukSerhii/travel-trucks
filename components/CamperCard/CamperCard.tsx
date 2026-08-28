import { Camper } from '@/types/camper';
import Image from 'next/image';
import css from './CamperCard.module.css';
import { FaGasPump, FaCog, FaCar, FaStar } from 'react-icons/fa';
import Badge from '@/components/Badge/Badge';
import { formatLabel } from '@/utils/formatLabel';
import ButtonBase from '@/components/ButtonBase/ButtonBase';

interface CamperCardProps {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProps) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    form,
    transmission,
    engine,
    coverImage,
    totalReviews,
  } = camper;

  return (
    <article className={css.card}>
      <div className={css.content}>
        <div className={css.imageWrapper}>
          <Image
            src={coverImage}
            alt={name}
            fill
            sizes="219px"
            className={css.image}
            unoptimized
          />
        </div>

        <div className={css.info}>
          <div className={css.card__header}>
            <div className={css.top}>
              <h2 className={css.title}>{name}</h2>

              <p className={css.price}>€{price.toFixed(1)}</p>
            </div>
            <div className={css.details}>
              <div className={css.reviews}>
                <FaStar className={css.star} />
                <span className={css.rating}>{rating}</span>
                <span className={css.rating}>({totalReviews} Reviews)</span>
              </div>

              <span className={css.location}>{location}</span>
            </div>
          </div>

          <div className={css.desc_container}>
            <p className={css.description}>
              A comfortable camper with everything you need for a great trip, a
              comfortable camper with everything you need for a great tri.
            </p>
          </div>

          <div className={css.badgesContainer}>
            <Badge icon={<FaGasPump className={css.badgeIcon} />}>
              {formatLabel(engine)}
            </Badge>
            <Badge icon={<FaCog className={css.badgeIcon} />}>
              {formatLabel(transmission)}
            </Badge>
            <Badge icon={<FaCar className={css.badgeIcon} />}>
              {formatLabel(form)}
            </Badge>
          </div>

          <ButtonBase
            href={`/catalog/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={css.button}
          >
            Show more
          </ButtonBase>
        </div>
      </div>
    </article>
  );
};

export default CamperCard;
