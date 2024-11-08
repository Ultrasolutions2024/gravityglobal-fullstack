import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <section className="d-flex flex-column flex-md-row align-items-center justify-content-between bg-orange-500 text-white py-2 px-3">
      <div className="d-flex align-items-center mb-2 mb-md-0 ms-md-3">
        <i className="fa-solid fa-envelope pe-2"></i>
        <a href="mailto:info@gravityglobalexports.com" className="text-white">
          info@gravityglobalexports.com
        </a>
      </div>


      <div className="d-flex align-items-center mb-2 mb-md-0 ms-md-3">
        <a href="tel:60184641754" className="text-white">
          60184641754
        </a>
      </div>

      <div className="d-none d-md-block me-md-3">
        <Link to="/Contact">
          <button
            className="btn btn-dark text-white d-flex align-items-center justify-content-center shadow-lg"
            type="submit"
          >
            Contact Us
            <IoArrowForward className="ms-2" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default TopHeader;
