import Image from "next/image";
import React from "react";

type Team = {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  position: string;
};

type TTeamProps = {
  team: Team[];
  preTitle: string;
  title: string;
};

const Team = ({ team, preTitle, title }: TTeamProps) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">{preTitle}</h4>
          <h1 className="display-5 mb-4">{title}</h1>
        </div>
        <div className="row g-0 team-items">
          {team.map((el: Team) => (
            <div key={el.id} className="col-lg-3 col-md-6">
              <div className="team-item position-relative">
                <div className="position-relative">
                  <Image
                    className="img-fluid"
                    src={el.avatar}
                    alt=""
                    width={500}
                    height={600}
                  />
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-light text-center p-4">
                  <h3 className="mt-2">
                    {el.first_name} {el.last_name}
                  </h3>
                  <span className="text-primary">{el.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
