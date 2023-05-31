import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

function HotelList({ activeTab, onTabClick }) {
  const [allHotel, setAllHotel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/all-hotels');
      setAllHotel(request.data);
      return request;
    }
    fetchData();
  });

  return (
    <div className="content">
      <div className="card-large shadow">
        <div className="head">
          <h1>Danh sách Khách sạn</h1>
          <button
            className="btn btn-outline-success"
            onClick={() => onTabClick('add-hotel')}
          >
            Add New
          </button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Title</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allHotel.map((hotel, i) => {
              return (
                <tr key={i}>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <td>{hotel._id}</td>
                  <td>{hotel.name}</td>
                  <td>hotel</td>
                  <td>{hotel.title}</td>
                  <td>{hotel.city}</td>
                  <td>
                    <button className="btn btn-outline-danger adjust">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HotelList;
