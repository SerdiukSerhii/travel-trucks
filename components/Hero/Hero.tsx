import ButtonBase from '@/components/ButtonBase/ButtonBase';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.hero_section}>
      <div className={css.image_wrapper}>
        <div className="container">
          <div className={css.title_container}>
            <div className={css.text_container}>
              <h1 className={css.title}>Campers of your dreams</h1>

              <p className={css.desc}>
                You can find everything you want in our catalog
              </p>
            </div>

            <ButtonBase
              href={`/catalog`}
              className={css.button}
            >
              View Now
            </ButtonBase>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
