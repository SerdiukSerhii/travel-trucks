import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled?: boolean;
}

const LoadMoreBtn = ({ onClick, disabled = false }: LoadMoreBtnProps) => {
  return (
    <div className={css.btn_container}>
      <button
        type="button"
        className={css.button}
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
