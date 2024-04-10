import React from "react";
import Image from "next/image";
import bannerImg from "../../public/images/carousel-1.jpg";

interface Banner {
  title: string;
  content: string;
}

const Banner = ({ title, content }: Banner) => {
  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          <Image
            width={1920}
            height={1080}
            src={bannerImg}
            alt="Picture of the author"
            priority
          />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-1 text-white animated slideInDown">
                    {title}
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">
                    {content}
                  </p>
                  <a
                    href=""
                    className="btn btn-primary py-3 px-5 animated slideInLeft"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
