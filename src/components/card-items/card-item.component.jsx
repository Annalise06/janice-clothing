import "./card-item.styles.scss";

const CardItem = ({ cards }) => {
  const { imageUrl, title } = cards;
  return (
  <div className="card-container">
        <div 
          className="bg-image" 
          style={{
          backgroundImage: `url(${imageUrl})`,
          }}
          />
          <div className="card-button">
            <h2>{title}</h2>
            <p>OPEN</p>
          </div>
      </div>
  )
}

export default CardItem;