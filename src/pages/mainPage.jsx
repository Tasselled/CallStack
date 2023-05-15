import React from 'react';
import '../stylesheets/mainPageStyles.scss';
import MainPageNavBar from '../components/MainPageNavBar';
import PostBar from '../components/postBar';
import SubContainer from '../containers/subContainer';
import { useSelector } from 'react-redux';
import WelcomePage from './WelcomePage';

function MainPage() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  if (currentUser) {
    return (
      <div>
        <MainPageNavBar />
        <PostBar />
        <SubContainer />
      </div>
    );
  } else {
    return <WelcomePage />;
  }
}

export default MainPage;
