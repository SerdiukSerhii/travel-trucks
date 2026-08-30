import { getCamperById } from '@/lib/api/campers';
import { FaStar } from 'react-icons/fa';
import css from './CamperDetailsPage.module.css';
import { LuMapPin } from 'react-icons/lu';
import Badge from '@/components/Badge/Badge';
import { formatLabel } from '@/utils/formatLabel';
import CamperGallery from '@/components/CamperGallery/CamperGallery';

type CamperDetailsPageProps = {
  camperId: string;
};

const CamperDetailsPage = async ({ camperId }: CamperDetailsPageProps) => {
  const camper = await getCamperById(camperId);
  const {
    name,
    price,
    rating,
    location,
    form,
    transmission,
    engine,
    totalReviews,
  } = camper;

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

                  <p className={css.meta_price}>€{price.toFixed(1)}</p>
                </div>

                <p className={css.meta_desc}>{camper.description}</p>
                {/* <p className={css.meta_desc}>
                  Embrace simplicity and freedom with the Mavericks panel truck,
                  an ideal choice for solo travelers or couples seeking a
                  compact and efficient way to explore the open roads. This
                  no-frills yet reliable panel truck offers the essentials for a
                  comfortable journey, making it the perfect companion for those
                  who value simplicity and functionality.
                </p> */}
              </div>
              <div className={css.vehicle_container}>
                <h2 className={css.vehicle_title}>Vehicle details</h2>

                <div className={css.badgesContainer}>
                  <Badge>{formatLabel(transmission)}</Badge>
                  <Badge>{formatLabel(engine)}</Badge>

                  {camper.amenities.map(amenity => (
                    <Badge key={amenity}>{formatLabel(amenity)}</Badge>
                  ))}

                  <Badge>{formatLabel(form)}</Badge>
                  {/* <Badge>{formatLabel(engine)}</Badge>
                  <Badge>{formatLabel(transmission)}</Badge>
                  <Badge>{formatLabel(form)}</Badge> */}
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
            <h3 className={css.reviews_title}> Reviews</h3>
            <div className={css.reviews_info_container}>
              <div className={css.reviews_clients}>
                <div className={css.client_review}></div>
              </div>
              <div className={css.form_booking}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamperDetailsPage;
