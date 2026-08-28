import ButtonBase from '@/components/ButtonBase/ButtonBase';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled?: boolean;
}

const LoadMoreBtn = ({ onClick, disabled = false }: LoadMoreBtnProps) => {
  return (
    <div className={css.btn_container}>
      <ButtonBase
        type="button"
        variant="secondary"
        className={css.button}
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? 'Loading...' : 'Load More'}
      </ButtonBase>
    </div>
  );
};

export default LoadMoreBtn;
