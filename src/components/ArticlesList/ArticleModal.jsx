import styles from './ArticleModal.module.css';

export function ArticleModal({ title, image, article, onClose, date }) {
  return (
    <div className={`${styles.overlay} ${styles.overlayOpenModal}`}onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalButtonClose} onClick={onClose}>✕</button>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <div className={styles.boxes}><p className={styles.date}>Дата публікації: {date}</p></div>
        <p>{article}</p>
      </div>
    </div>
  );
}