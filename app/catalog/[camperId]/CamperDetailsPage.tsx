import { getCamperById } from '@/lib/api/campers';
import css from './CamperDetailsPage.module.css';

type CamperDetailsPageProps = {
  camperId: string;
};

const CamperDetailsPage = async ({ camperId }: CamperDetailsPageProps) => {
  const camper = await getCamperById(camperId);

  return (
    <section className={css.details_section}>
      <div className="container">
        <div className={css.details_container}>
          <div className={css.card_container}>
            <div className={css.Gallery_image}></div>
            <div className={css.info_container}></div>
            <h1 className={css.title}>{camper.name}</h1>
            <div className={css.meta}>
              <span className={css.rating}>
                ★ {camper.rating} ({camper.totalReviews} Reviews)
              </span>

              <span className={css.location}>{camper.location}</span>
            </div>
            <p className={css.price}>€{camper.price.toFixed(2)}</p>
          </div>
        </div>
        <div className={css.reviews_container}></div>
      </div>
    </section>
  );
};

export default CamperDetailsPage;
