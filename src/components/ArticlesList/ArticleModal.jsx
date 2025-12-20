import './ArticleModal.css';

export function ArticleModal({ title, image, article, onClose }) {
  return (
    <div className="overlay overlayOpenModal" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalButtonClose" onClick={onClose}>✕</button>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{article}</p>
      </div>
    </div>
  );
}