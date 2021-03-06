import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import Modal from '../modal/Modal'

const MenuList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="menu_Main">
      <div className="menuTop">
        <h2 className="header_text">Available Restaurants</h2>
        <div className="search_filter">
          <div className="searchBar">
            <BsSearch className="searchIcon" />
            <input placeholder="Search Restaurants" className="searchInput" />
          </div>
          <div className="filter_wrapper">
            <FiFilter className="filterIcon" />
            <h5 className="filter_text">Filter</h5>
          </div>
        </div>
      </div>
      <div className="menuList">
        <div className="list__item" onClick={() => {
          setModalOpen(true);
        }}>
          <h3>ID 816495</h3>
          <h4>Annapurna Hotels &amp; Restaurants</h4>
          <div className="address">
            <h5>24 Km Away</h5> <div className="period"></div>
            <h4>821 Jadiac Parkaway, City Center, Durgapur</h4>
          </div>
          <div className="quantity">
            <h5>Available For:</h5>
            <h5>25 People</h5>
          </div>
        </div>
        <div className="list__item">
          <h3>ID 816495</h3>
          <h4>Annapurna Hotels &amp; Restaurants</h4>
          <div className="address">
            <h5>24 Km Away</h5> <div className="period"></div>
            <h4>821 Jadiac Parkaway, City Center, Durgapur</h4>
          </div>
          <div className="quantity">
            <h5>Available For:</h5>
            <h5>25 People</h5>
          </div>
        </div>
        <div className="list__item">
          <h3>ID 816495</h3>
          <h4>Annapurna Hotels &amp; Restaurants</h4>
          <div className="address">
            <h5>24 Km Away</h5> <div className="period"></div>
            <h4>821 Jadiac Parkaway, City Center, Durgapur</h4>
          </div>
          <div className="quantity">
            <h5>Available For:</h5>
            <h5>25 People</h5>
          </div>
        </div>
        <div className="list__item">
          <h3>ID 816495</h3>
          <h4>Annapurna Hotels &amp; Restaurants</h4>
          <div className="address">
            <h5>24 Km Away</h5> <div className="period"></div>
            <h4>821 Jadiac Parkaway, City Center, Durgapur</h4>
          </div>
          <div className="quantity">
            <h5>Available For:</h5>
            <h5>25 People</h5>
          </div>
        </div>
        <div className="list__item">
          <h3>ID 816495</h3>
          <h4>Annapurna Hotels &amp; Restaurants</h4>
          <div className="address">
            <h5>24 Km Away</h5> <div className="period"></div>
            <h4>821 Jadiac Parkaway, City Center, Durgapur</h4>
          </div>
          <div className="quantity">
            <h5>Available For:</h5>
            <h5>25 People</h5>
          </div>
        </div>
        <div className="list__item">
          <h3>ID 816495</h3>
          <h4>Annapurna Hotels &amp; Restaurants</h4>
          <div className="address">
            <h5>24 Km Away</h5> <div className="period"></div>
            <h4>821 Jadiac Parkaway, City Center, Durgapur</h4>
          </div>
          <div className="quantity">
            <h5>Available For:</h5>
            <h5>25 People</h5>
          </div>
        </div>
        <div className="list__item">
          <h3>ID 816495</h3>
          <h4>Annapurna Hotels &amp; Restaurants</h4>
          <div className="address">
            <h5>24 Km Away</h5> <div className="period"></div>
            <h4>821 Jadiac Parkaway, City Center, Durgapur</h4>
          </div>
          <div className="quantity">
            <h5>Available For:</h5>
            <h5>25 People</h5>
          </div>
        </div>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default MenuList;
