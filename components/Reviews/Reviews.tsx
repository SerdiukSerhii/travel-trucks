import { getCamperReviews } from '@/lib/api/campers';
import { FaStar } from 'react-icons/fa';
import css from './Reviews.module.css';

type ReviewsProps = {
  camperId: string;
};

const Reviews = async ({ camperId }: ReviewsProps) => {
  const reviews = await getCamperReviews(camperId);

  return (
    <div className={css.reviews}>
      {reviews.map(review => (
        <article
          className={css.review}
          key={review.id}
        >
          <div className={css.reviewer}>
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>

            <div className={css.reviewer_info}>
              <h4 className={css.name}>{review.reviewer_name}</h4>

              <div className={css.stars}>
                {[1, 2, 3, 4, 5].map(star => (
                  <FaStar
                    key={star}
                    className={
                      star <= review.reviewer_rating ? css.star : css.star_empty
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </article>
      ))}
    </div>
  );
};

export default Reviews;
