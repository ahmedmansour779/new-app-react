import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreativeSpeakers from "./design-system/components/CreativeSpeakers/CreativeSpeakers";
import speakerData from "./design-system/components/CreativeSpeakers/SpeakersData";
import {
  DescriptionSpeakersWrapper,
  HeaderSpeakersWrapper,
  TitleSpeakersWrapper,
  UpSpeakersWrapper
} from "./design-system/components/CreativeSpeakers/style";
import "./design-system/components/main.css";
import OurPrograms from "./design-system/components/ourPrograms/OurPrograms";
import OurProgramData from "./design-system/components/ourPrograms/OurProgramsData";
import Oursponsours from "./design-system/components/OurSponsours/Oursponsours";
import ourSponsorsData from "./design-system/components/OurSponsours/OurSponsoursData";
import Overview from "./design-system/components/Overview";
import overviewData from "./design-system/components/Overview/OverviewData";
import { UpOverviewWrapper } from "./design-system/components/Overview/Styles";
import Home from "./design-system/components/pages/Home/Home";

function App() {
  return (
    <>
      <>
        <UpOverviewWrapper>
          {overviewData.map(item => {
            return (
              <Overview
                icon={item.icon}
                title={item.title}
                describtion={item.description}
                key={item.id} />
            )
          })}
        </UpOverviewWrapper>
      </>
      <>
        <HeaderSpeakersWrapper>
          <TitleSpeakersWrapper><span style={{ color: "#292626" }}>Creative</span> Speakers</TitleSpeakersWrapper>
          <DescriptionSpeakersWrapper>These are the most important figures in the company</DescriptionSpeakersWrapper>
        </HeaderSpeakersWrapper>
        <UpSpeakersWrapper>
          {(
            speakerData.map(item => {
              return (
                <CreativeSpeakers
                  imag={item.imag}
                  name={item.name}
                  job={item.jop}
                  alt={item.alt}
                  key={item.id} />
              )
            })
          )}
        </UpSpeakersWrapper>
      </>
      <>
        {OurProgramData.map(item => {
          return (
            <OurPrograms
              imag={item.imag}
              alt={item.al}
              title={item.title}
              time={item.time}
              name={item.name}
              roomNumper={item.roomNumper}
              description={item.description}
              key={item.id} />
          )
        })}
      </>
      <>
        <div style={{ display: "flex", gap: "1rem" }}>
          {ourSponsorsData.map(item => {
            return (
              <Oursponsours src={item.src} alt={item.alt} key={item.id} />
            )
          })}
        </div>
      </>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;