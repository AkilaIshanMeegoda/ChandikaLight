import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

import backgroundImage from '../images/background1.jpeg';
import "./feedback.css";

const ShowFeedback = () => {
  const [feedback, setFeedback] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8070/feedback/getFeedback/${id}`)
      .then((res) => {
        console.log("Feedback details:", res.data);
        setFeedback(res.data.feedback); 
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
  <div className="home-feedback-container"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    margin: 0,
    padding: 100,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Roboto, sans-serif',
   
    
  }}>



    <div className='p-4 table-container'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Feedback</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto my-auto'>
          {Object.keys(feedback).map((key) => (
            <div key={key} className='my-4'>
              <span className="text-xl mr-4 text-gray-500">{key}</span>
              <span>{feedback[key]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default ShowFeedback;
