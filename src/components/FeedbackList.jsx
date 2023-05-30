import FeedbackItem from './FeedbackItem';
import {motion,AnimatePresence} from 'framer-motion'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div key ={item.id}  animate={{opacity:1}} exit={{opacity:0}}initial={{opacity:0}} >
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} /></motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
