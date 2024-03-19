import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateFeedback from './pages/CreateFeedback';
import DeleteFeedback from './pages/DeleteFeedback';
import EditFeedback from './pages/EditFeedback';
import HomeFeedback from './pages/HomeFeedback';
import ShowFeedback from './pages/ShowFeedback';

const App = () => {
  return (
      <Routes>
         <Route path='/' element={<HomeFeedback />} />
         <Route path='/feedback/addFeedback' element={<CreateFeedback />} />
         <Route path='/feedback/getFeedback/:id' element={<ShowFeedback />} />
         <Route path='/feedback/updateFeedback/:id' element={<EditFeedback />} />
         <Route path='/feedback/deleteFeedback/:id' element={<DeleteFeedback />} />
      </Routes>
  );
};

export default App;