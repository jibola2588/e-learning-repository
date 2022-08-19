import React from "react";

function CategoryCard({ backgroundImg, categoryText, rowSpan }) {
  return (
    <>
      <div className={`bg-[url(${backgroundImg})] bg-blend-darken bg-black/[0.6] relative rounded-lg bg-no-repeat bg-cover ${rowSpan}`}>
       
        <h1 className="text-white text-2xl m-5 absolute bottom-0">
          {categoryText}
        </h1>
      </div>
    </>
  );
}

export default CategoryCard;
