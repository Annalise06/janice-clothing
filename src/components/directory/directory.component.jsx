import CardItem from '../card-items/card-item.component';
import './directory.styles.scss';


const Directory = ({Card}) => {
  return (
    <div className="directory-container">
      {Card.map(( cards ) => (
        <CardItem key={cards.id} cards={cards} />
      ))}
      

    </div>
  )
}

export default Directory;