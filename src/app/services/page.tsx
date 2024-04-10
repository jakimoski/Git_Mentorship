import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Team from "@/components/Team";
import React from "react";

async function servicesData() {
  const servicesBanner = await fetch(
    "http://localhost:5001/services_page"
  ).then((res) => res.json());

  const servicesPage = await fetch("http://localhost:5001/services_page").then(
    (res) => res.json()
  );

  const services = await fetch("http://localhost:5001/services").then((res) =>
    res.json()
  );

  const team = await fetch("http://localhost:5001/team").then((res) =>
    res.json()
  );

  const homeData = await fetch("http://localhost:5001/homepage").then((res) =>
    res.json()
  );

  return {
    servicesBanner,
    servicesPage,
    services,
    team,
    homeData,
  };
}

export default async function ServicesPage() {
  const { servicesBanner, servicesPage, services, team, homeData } =
    await servicesData();
  return (
    <main>
      <PageBanner title={servicesBanner.services_block.preTitle} />
      <Services
        preTitle={servicesPage.services_block.preTitle}
        title={servicesPage.services_block.title}
        services={services}
      />
      <Team
        team={team}
        preTitle={homeData.team_block.preTitle}
        title={homeData.team_block.title}
      />
    </main>
  );
}
