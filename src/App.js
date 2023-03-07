import React from "react";
import "./app.css";
import CreativeSpeakers from "./design-system/components/CreativeSpeakers/CreativeSpeakers";
import speakerData from "./design-system/components/CreativeSpeakers/SpeakersData";
import { DescriptionSpeakersWrapper, HeaderSpeakersWrapper, TitleSpeakersWrapper, UpSpeakersWrapper } from "./design-system/components/CreativeSpeakers/style";
import Overview from "./design-system/components/Overview";
import overviewData from "./design-system/components/Overview/OverviewData";
import { UpOverviewWrapper } from "./design-system/components/Overview/Styles";

function App() {
  return (
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
  );
}

export default App;