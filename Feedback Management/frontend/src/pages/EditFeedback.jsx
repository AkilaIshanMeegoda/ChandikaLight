import React, { useState, useEffect } from "react"
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import backgroundImage from '../images/background1.jpeg';
import "./feedback.css";


const EditFeedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [service, setService] = useState('');
  const [feedback, setFeedback] = useState('');


  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8070/feedback/getFeedback/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setRating(res.data.rating);
        setService(res.data.service);
        setFeedback(res.data.feedback);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(err);
      });
  }, []);




  const handleEditFeedback = () => {
    const data = {
      name,
      email,
      rating,
      service,
      feedback,

    };
    setLoading(true);
    axios
      .put(`http://localhost:8070/feedback/updateFeedback/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('feedback edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        setLoading(false);
        //alert('an error happened.');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(err);
      });
  };


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


    <div className="p-4 table-container">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Feedback</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto form-input">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            disabled={loading}
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            disabled={loading}
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Rating(On a scale of 1 to 5)</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            disabled={loading}
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Service</label>
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            disabled={loading}
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Review</label>
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            disabled={loading}
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditFeedback}>
          Save
        </button>


      </div>
    </div>
    </div>
  );
};

export default EditFeedback;