import React from 'react';

import Header from './Header/Header';
import EventGalleryContainer from '../containers/EventGalleryContainer';
import LoadMoreButtonContainer from '../containers/LoadMoreButtonContainer';

export const Dashboard = () => {
    return (
        <React.Fragment>
          <EventGalleryContainer/>
          <LoadMoreButtonContainer/>
        </React.Fragment>
    );
}

export default Dashboard;