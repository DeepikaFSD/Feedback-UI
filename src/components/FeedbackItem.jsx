import Card from './shared/Card';
import { FaTimes , FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const FeedbackItem = ({ item, handleDelete }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [unlikeCount, setUnlikeCount] = useState(0);

  const handleLike = () => {
  
    setLikeCount(likeCount + 1);
  
  
  };

  const handleUnlike = () => {
    setUnlikeCount(unlikeCount + 1);
  };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    <div className='btn-like-dislike'>
    
      <button style={{ border: 'none' }} onClick={handleLike}>
      <FaHeart style={{color: 'red'}}/>
       ({likeCount})
      </button>
      <button onClick={handleUnlike} style={{ border: 'none' }}>
      <FaHeart style={{color: 'black'}}/>
        ({unlikeCount})
      </button>


      </div>

     
      
    
     
    </Card>
  );
};

export default FeedbackItem;
