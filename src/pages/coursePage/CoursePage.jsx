import React from "react";
import Navbar from "../../components/navbars/Landing-Page-Navbar";
import CategoryCard from "../../components/courses/CategoryCard";
import CategoriesHeader from "../../components/courses/CategoriesHeader";
import Footer from "../../components/footer/Footer";
// images
import UiUxBackgrond from "../../assets/images/UiUx.png";
import backEnd from "../../assets/images/backEnd.jpeg";
import mobileDev from "../../assets/images/mobileDev.jpg";
import digitalMarketting from "../../assets/images/digitalMarketting.jpg";
import frontEnd from "../../assets/images/frontEnd.jpeg";

function CoursePage() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between flex-wrap mt-16 mb-4">
            <h3 className="text-[#00349A] text-2xl">Explore Courses</h3>
            <form className="flex items-center bg-gray-light px-4 py-1 border rounded-full sm:px-7 sm:py-2">
              <input
                type="text"
                placeholder="what do you want to learn"
                className="placeholder:text-sm max-w-[200px] outline-none"
              />
              <i className="bi bi-search text-[#00349A]"></i>
            </form>
          </div>

          <div className="grid gap-4 grid-rows-[200px,_200px,_200px,_200px,_200px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-[minmax(0,_200px),minmax(0,_200px),minmax(0,_200px)] md:grid-rows-[minmax(0,_200px),minmax(0,_200px)] ">
            <CategoryCard
              backgroundImg={UiUxBackgrond}
              categoryText="UI/UX Design"
              rowSpan="sm:row-span-2"
            />
            <CategoryCard backgroundImg={frontEnd} categoryText="Front-end" />
            <CategoryCard
              backgroundImg={digitalMarketting}
              categoryText="Digital Marketting"
            />
            <CategoryCard backgroundImg={backEnd} categoryText="Back-end" />
            <CategoryCard
              backgroundImg={mobileDev}
              categoryText="Mobile Development"
            />
          </div>

          <CategoriesHeader header="Beginners Courses" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CoursePage;
