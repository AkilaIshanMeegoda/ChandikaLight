import React, { useState} from "react"
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import backgroundImage from '../images/background1.jpeg';
import "./feedback.css";

const DeleteFeedback = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const {enqueueSnackbar} = useSnackbar();

    const handleDeleteFeedback = () => {
        setLoading(true);
        axios
        .delete(`http://localhost:8070/feedback/deleteFeedback/${id}`)
        .then(() => {
            setLoading(false);
            enqueueSnackbar('feedback deleted successfully', {variant: 'success'});
            navigate('/');
        })
        .catch((err) =>{
            setLoading(false);
            //alert('an error happened');
            enqueueSnackbar('Error', {variant: 'error'});
            console.log(err);

        })

    }

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


        <div className="p-4 table-container" style={{ height: "67.5vh" }}>
          <BackButton />
          <h1 className="text-3xl my-4">Delete Feedback</h1>
          {loading ? <Spinner /> : ""}
          <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3 className="text-2xl">
              Are you sure you want to delete this feedback?
            </h3>
    
            <button
              className="p-4 bg-red-600 text-white m-8 w-full"
              onClick={handleDeleteFeedback}
            >
              Yes, Delete It
            </button>
          </div>
        </div>
        </div>
    )  ;  
};

export default DeleteFeedback;