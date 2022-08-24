import React from 'react'
import CourseCard from "../../components/courses/CourseCard";
import UImg from "../../assets/images/UiUx.png";
import HtmlImg from "../../assets/images/html.png";
import PythonImg from "../../assets/images/python.png";
import ProductImg from "../../assets/images/productMgt.png";
import tutorImg from "../../assets/images/tutor1.png";
import tutorImg1 from "../../assets/images/tutor2.png";
import tutorImg2 from "../../assets/images/tutor3.png";

function CourseCards() {
    return (
        <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 py-2 md:py-4">
            <CourseCard
                backgroundImg={UImg}
                courseReviews="4.5"
                Reviews="(120)"
                courseViews="28,500"
                courseDuration="36"
                courseTitle="Product Management Into-Course"
                tutorImg={tutorImg}
                tutorName="Kera David"
                slashPrice="$55.0"
                currentPrice="$37.67"
            />

            <CourseCard
                backgroundImg={HtmlImg}
                courseReviews="5"
                Reviews="(200)"
                courseViews="78,500"
                courseDuration="96"
                courseTitle="Introduction to html, css and javascript"
                tutorImg={tutorImg1}
                tutorName="Jerry Thomas"
                slashPrice="$87.0"
                currentPrice="$217.67"
            />

            <CourseCard
                backgroundImg={PythonImg}
                courseReviews="4.5"
                Reviews="(120)"
                courseViews="28,500"
                courseDuration="36"
                courseTitle="Introductio to Python, Django & API's"
                tutorImg={tutorImg2}
                tutorName="Patrick James"
                slashPrice="$95.0"
                currentPrice="$237.67"
            />
        </div>
    )
}

export default CourseCards

{/* <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 py-2 md:py-4">
            <CourseCard
              backgroundImg={ProductImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Product Management Into-Course"
              tutorImg={tutorImg}
              tutorName="Kera David"
              slashPrice="$55.0"
              currentPrice="$37.67"
            />

            <CourseCard
              backgroundImg={UImg}
              courseReviews="5"
              Reviews="(200)"
              courseViews="78,500"
              courseDuration="96"
              courseTitle="Introduction to html, css and javascript"
              tutorImg={tutorImg1}
              tutorName="Jerry Thomas"
              slashPrice="$87.0"
              currentPrice="$217.67"
            />

            <CourseCard
              backgroundImg={PythonImg}
              courseReviews="4.5"
              Reviews="(120)"
              courseViews="28,500"
              courseDuration="36"
              courseTitle="Introductio to Python, Django & API's"
              tutorImg={tutorImg2}
              tutorName="Patrick James"
              slashPrice="$95.0"
              currentPrice="$237.67"
            />
          </div> */}
