import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Redirect from './Redirect';
import {
  GooglePlayButton,
  AppGalleryButton,
  ButtonsContainer,
  AppStoreButton,
} from "react-mobile-app-button";
import TestPage from './TestPage';
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg,rgb(255, 241, 223) 0%,rgb(255, 209, 144) 100%);
  padding: 20px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #1a1a1a;
  margin-bottom: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
  max-width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

// const AppStoreButton = styled(motion.a)`
//   background-color: black;
//   color: white;
//   padding: 12px 24px;
//   border-radius: 8px;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   font-weight: 500;
//   margin-top: 2rem;
  
//   &:hover {
//     opacity: 0.9;
//   }
// `;

const ImagePlaceholder = styled(motion.div)`
  width: 80%;
  max-width: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin: 2rem 0;
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
//Swiping never felt so sweet
//swiping with your stomach

function LandingPage() {
  console.log('Landing page');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return (
    <PageContainer>
      <ContentContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          Restaurant finding reimagined.
        </Title>
        
        <Subtitle variants={itemVariants}>
          Find small restaurants with Flavorfy. Where you can swipe to find what you like.
        </Subtitle>

        <ImagePlaceholder variants={itemVariants} />

        <motion.div variants={itemVariants}>
        
        <AppStoreButton
        url={IOSUrl}
        theme={"light"}
        
      />
        
        </motion.div>

        <LogoContainer variants={itemVariants}>
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </LogoContainer>
      </ContentContainer>
    </PageContainer>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/share" element={<Redirect/>} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;