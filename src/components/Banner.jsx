import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ page }) => {
  return (
    <div className="relative w-full h-[400px] flex flex-col justify-center items-center">
      {/* <img src="/banner.png" loading='lazy' className=" object-cover object-top w-full h-full" /> */}
      <img src="https://ik.imagekit.io/mshcgnjju/Banner.png" loading='lazy' className=" object-cover object-top w-full h-full" />
      <div className="absolute z-10 mt-20 left-1/2 -translate-x-1/2 px-6 md:px-10 xl:px-36 ">
        <h2 className="text-5xl md:text-7xl text-center font-semibold mb-4 font-serif">{page.title}</h2>

        <nav aria-label="breadcrumb" className="text-[12px] md:text-sm text-[#F7921E] flex flex-row items-center justify-center mt-10">
          <ol className="list-reset flex items-center justify-center space-x-1 font-bold">
            <li>
              <Link to="/" className="text-[#F7921E] hover:underline">HOME</Link>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F7921E" className="" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" stroke="#F7921E" strokeWidth="4"></path>
              </svg>
            </li>
            {page.breadcrumb.map((crumb, index) => (
              <React.Fragment key={index}>
                {/* Breadcrumb link */}
                <li>
                  {crumb.path ? (
                    <Link to={crumb.path} className="text-[#F7921E] hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-gray-500">{crumb.name}</span>
                  )}
                </li>
                {index < page.breadcrumb.length - 1 && <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F7921E" className="" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" stroke="#F7921E" strokeWidth="4"></path>
                  </svg>
                </li>}
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Banner;