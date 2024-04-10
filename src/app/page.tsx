import Banner from "@/components/Banner";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import Services from "@/components/Services";
import Team from "@/components/Team";

async function fetchData() {
  const bannerContent = await fetch("http://localhost:5001/homepage").then(
    (res) => res.json()
  );

  const servicesPage = await fetch("http://localhost:5001/services_page").then(
    (res) => res.json()
  );

  const services = await fetch("http://localhost:5001/services").then((res) =>
    res.json()
  );

  const team = await fetch("http://localhost:5001/team").then((res) =>
    res.json()
  );
  return {
    bannerContent,
    servicesPage,
    services,
    team,
  };
}

export default async function Home() {
  const { bannerContent, servicesPage, services, team } = await fetchData();

  return (
    <main className="main">
      <Banner
        title={bannerContent.banner_content.title}
        content={bannerContent.banner_content.content}
      />
      <Services
        preTitle={servicesPage.services_block.preTitle}
        title={servicesPage.services_block.title}
        services={services}
      />
      <Team
        team={team}
        preTitle={bannerContent.team_block.preTitle}
        title={bannerContent.team_block.title}
      />
    </main>
  );
}
