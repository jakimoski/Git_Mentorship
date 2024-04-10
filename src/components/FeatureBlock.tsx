import React from "react";

type TUspItems = {
  id: string;
  title: string;
  content: string;
  icon: string;
};

type TFeatureProps = {
  preTitle: string;
  title: string;
  first_paragraph: string;
  image_one: string;
  image_two: string;
  usp_items: TUspItems[];
};

const FeatureBlock = ({
  preTitle,
  title,
  first_paragraph,
  image_one,
  image_two,
  usp_items,
}: TFeatureProps) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h4 className="section-title">{preTitle}</h4>
            <h1 className="display-5 mb-4">{title}</h1>
            <p className="mb-4">{first_paragraph}</p>
            <div className="row g-4">
              {usp_items.map((el) => (
                <div key={el.id} className="col-12">
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src={el.icon} alt="Icon" />
                    <div className="ms-4">
                      <h3>{el.title}</h3>
                      <p className="mb-0">{el.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-img">
              <img className="img-fluid" src={image_two} alt="" />
              <img className="img-fluid" src={image_one} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
