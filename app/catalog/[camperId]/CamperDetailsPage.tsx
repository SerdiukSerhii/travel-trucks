import { getCamperById } from '@/lib/api/campers';
import { FaStar } from 'react-icons/fa';
import css from './CamperDetailsPage.module.css';
import { LuMapPin } from 'react-icons/lu';
import Badge from '@/components/Badge/Badge';
import { formatLabel } from '@/utils/formatLabel';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import Reviews from '@/components/Reviews/Reviews';
import BookingForm from '@/components/BookingForm/BookingForm';

type CamperDetailsPageProps = {
  camperId: string;
};

const CamperDetailsPage = async ({ camperId }: CamperDetailsPageProps) => {
  const camper = await getCamperById(camperId);
  const { name, price, rating, location, form, totalReviews } = camper;

  return (
    <section className={css.details_section}>
      <div className="container">
        <div className={css.details_container}>
          <div className={css.card_container}>
            <div className={css.gallery_image}>
              <CamperGallery gallery={camper.gallery} />
            </div>
            <div className={css.info_container}>
              <div className={css.header_container}>
                <div className={css.meta_container}>
                  <h3 className={css.meta_title}>{name}</h3>
                  <div className={css.rating_container}>
                    <div className={css.meta_reviews_container}>
                      <FaStar className={css.star} />
                      <span className={css.rating}>{rating}</span>
                      <span className={css.rating}>
                        ({totalReviews} Reviews)
                      </span>
                    </div>
                    <div className={css.location}>
                      <LuMapPin className={css.locationIcon} />
                      <span>{location}</span>
                    </div>
                  </div>

                  <p className={css.meta_price}>€{price.toFixed(0)}</p>
                </div>

                <p className={css.meta_desc}>{camper.description}</p>
              </div>

              <div className={css.vehicle_container}>
                <h2 className={css.vehicle_title}>Vehicle details</h2>

                <div className={css.badgesContainer}>
                  {camper.amenities.map(amenity => (
                    <Badge key={amenity}>{formatLabel(amenity)}</Badge>
                  ))}
                </div>
                <div className={css.vehicle_details}>
                  <div className={css.detail_row}>
                    <span>Form</span>
                    <span>{formatLabel(form)}</span>
                  </div>

                  <div className={css.detail_row}>
                    <span>Length</span>
                    <span>{camper.length}</span>
                  </div>

                  <div className={css.detail_row}>
                    <span>Width</span>
                    <span>{camper.width}</span>
                  </div>

                  <div className={css.detail_row}>
                    <span>Height</span>
                    <span>{camper.height}</span>
                  </div>

                  <div className={css.detail_row}>
                    <span>Tank</span>
                    <span>{camper.tank}</span>
                  </div>

                  <div className={css.detail_row}>
                    <span>Consumption</span>
                    <span>{camper.consumption}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={css.reviews_container}>
            <h2 className={css.reviews_title}> Reviews</h2>
            <div className={css.reviews_info_container}>
              <Reviews camperId={camperId} />

              <BookingForm camperId={camperId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamperDetailsPage;
