import React from "react";
import CreativeSpeakers from "./design-system/components/CreativeSpeakers/CreativeSpeakers";
import speakerData from "./design-system/components/CreativeSpeakers/SpeakersData";
import { DescriptionSpeakersWrapper, HeaderSpeakersWrapper, TitleSpeakersWrapper, UpSpeakersWrapper } from "./design-system/components/CreativeSpeakers/style";
import "./design-system/components/main.css";
import OurPrograms from "./design-system/components/ourPrograms/OurPrograms";
import OurProgramData from "./design-system/components/ourPrograms/OurProgramsData";
import Overview from "./design-system/components/Overview";
import overviewData from "./design-system/components/Overview/OverviewData";
import { UpOverviewWrapper } from "./design-system/components/Overview/Styles";

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
    </>
  );
}

export default App;