import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

import backgroundImage from '../images/background1.jpeg';
import "./feedback.css";



const HomeFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8070/feedback`)
      .then((res) => {
        setFeedbacks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  //useEffect(() => {
  //  console.log(feedbacks);  // Log the feedbacks array to the console
  // }, [feedbacks]);

  return (
    <div className="home-feedback-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        margin: 0,
        padding: 150,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Roboto, sans-serif',
       
        
      }}>
      
      
      <div className='p-4 table-container'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>Feedback List</h1>



          <Link to='/feedback/addFeedback'>
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>

        </div>

        {loading ? (

          <Spinner />
        ) : (

          <table
            className="t1 table table-lg table-pin-rows table-pin-cols highlighted-table "
            style={{
              border: '2px solid black',
              bordercollapse: 'collapse',


            }}
          >
            <thead>
              <tr style={{
                textAlign: "center",
                border: '1px solid #ffcc00',
                padding: 20,
               
              }}>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Name</th>
                <th className='border border-slate-600 rounded-md'>Email</th>
                <th className='border border-slate-600 rounded-md'>Rating</th>
                <th className='border border-slate-600 rounded-md'>Service</th>
                <th className='border border-slate-600 rounded-md'>Feedback</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>

              </tr>
            </thead>
            <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={feedback._id} style={{}}>
                <td className='border border-slate-700 rounded-md text-center'> {index + 1}</td>
                <td className='border border-slate-600 rounded-md text-center'>{feedback.name}</td>
                <td className='border border-slate-600 rounded-md text-center'>{feedback.email}</td>
                <td className='border border-slate-600 rounded-md text-center'>{feedback.rating}</td>
                <td className='border border-slate-600 rounded-md text-center'>{feedback.service}</td>
                <td className='border border-slate-600 rounded-md text-center'>{feedback.feedback}</td>

                <td>
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/feedback/getFeedback/${feedback._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/feedback/updateFeedback/${feedback._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/feedback/deleteFeedback/${feedback._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>

              </tr>



            ))}

          </tbody>

          </table>



        )}
    </div>
    </div >


  );
};

export default HomeFeedback