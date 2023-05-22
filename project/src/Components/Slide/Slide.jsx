import "./Slide.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slide = () => {
  return (
    <div className="imageSlider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-alpha-sig.figma.com/img/f2ef/4795/0c978653fd038ec01f9154c325d54af3?Expires=1685318400&Signature=gdaaRT0DrfYuhJ2mDN~V6jk05lgPW6tujkYFeeHzsMNy~SolY7H73v8HWSZ8Zev8pOZ6hxBUX23FlnaVGuwSlwgcHePS7~bmciiu8G9Nl5qEBTWOSFsO2-NJIIOR1Ac3NDV5teMMrxXE7uONwKO9w91rWd3Hu35xMKwSDTiG3JlToWX7YdWfwUep8WAkehy8aSBOhE42R2IPWkJ2nQ9F-EoMn0wtkqFtoM~C73HRBWS~63oTf0il6sKPn0nDuVPiPnUE~oJCrPqyJcXM5QXvzfvnjsyKIZz1RKp9WwuXyYoish-tKAL3B7DQ5BPLJcOQerh2eZpHKcOhbvNDAUAYIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="First slide"
            width="1440px"
            height="450px"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-alpha-sig.figma.com/img/3fd1/a9c2/33841d20b706fb0e5e59e7cb146d8319?Expires=1685318400&Signature=K9SRfzl5q7F~0IWHGu9agZ6EFlhVi8dUh~lul6DjuccJD2XCKTr2WQUu5HnOltdAgbz4Pl4cLkbXeABlg~JdRbcOnowu0OfQ~Jy0UEfEXjjNhEiQQecLkrt1h6scx36wgnb9RGtaXdhsQW9U~5u4cXvuL9sZw2s-KnvSCYKfiXlNiVIaxSscKER1VXe1su8saRuau02jyZ5osgl4d-vXv9k6wGDspOaGM82HCdd0avcqN0tn9C8rE4y-A7MOQX9p-T89OtQ8trJd83jVJ2O~TRriH6HHzOMYMLICzjVAj40EVtTH9SVIA8uxz4WcaAhFTZFN3QdtrPV4m~pMNN7R1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Second slide"
            width="1440px"
            height="450px"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-alpha-sig.figma.com/img/8dfd/966f/0d024e7869161e1e1fbaf3db23ebc171?Expires=1685318400&Signature=cOD8qkvbpxGzft2pBI4fX7jf7rDaHnHJqT~Hy2ux8xkHeBfMg-fkTkDDOW1QLns~WB2fGLdKdYpPQ2M3XZJ0e5yh6D~xnoS1zHmMrhh93knuP9NpQHFwJhRaorGl8NXU74iOofZQURjxO8vWbLdS6J55yCKwIujd4AJoO3gczbVRA0RiOMB3mBJRC7SOwvtu9vAxd7Cm-Z4RR1yWJplg2cN30pPrypdyMC4Gr4xt4okhP0SUq1DiVDlxIPi~ZSFhy-SwWtppaYHszdUwxlcxveLNjMuUqCs7IBSt30j3X5efls~BJpYzlOTjeVoYG9~U2Tp3yzdBeAEpdWSEAJ6Pgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Third slide"
            width="1440px"
            height="450px"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-alpha-sig.figma.com/img/95fb/dbcf/b35c816f4f6eb0c6203a472e9dd6a3f2?Expires=1685318400&Signature=EAosKKoMi17Uu4NJEie3bKI9Tu~6wy6z4dvJMF9bqLr-Rkji7rY1lolE37Ku7SVj01bzqLlZTJdPk7djOCMYoX0f~G-mslJotGuspoR1ed8D~x0IpsB6gKW84343QL3hiv1Ela1Cawffy1bXR5TH8AUMSxdFOMn9omcq2roW6TSdQ6qEwSB7ZPh157N4iOdI3kGx2fUllkSdqKi9mlcOUPCLgt21FBoaruKdOjQWGiaqikjb59JEKhecHnIL1WKIoC4I~QtGDy~jEBvjCnc010Q3cpzCN6g97jaJGjfqHxSCTRv-o6Zfl58Egr0rMVHQRCPiqREZ52yB9cSz5Z84YQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="First slide"
            width="1440px"
            height="450px"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
