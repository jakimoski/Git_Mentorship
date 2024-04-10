import AboutBlock from "@/components/AboutBlock";
import FeatureBlock from "@/components/FeatureBlock";
import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import React from "react";

async function fetchAboutData() {
  const aboutData = await fetch("http://localhost:5001/about_page").then(
    (res) => res.json()
  );

  const team = await fetch("http://localhost:5001/team").then((res) =>
    res.json()
  );

  const homeContent = await fetch("http://localhost:5001/homepage").then(
    (res) => res.json()
  );

  return {
    aboutData,
    team,
    homeContent,
  };
}

export default async function About() {
  const { aboutData, team, homeContent } = await fetchAboutData();

  return (
    <main>
      <PageBanner title={aboutData.about_block.preTitle} />
      <AboutBlock {...aboutData.about_block} />

      <FeatureBlock {...aboutData.feature_block} />
      <Team
        team={team}
        preTitle={homeContent.team_block.preTitle}
        title={homeContent.team_block.title}
      />
    </main>
  );
}
