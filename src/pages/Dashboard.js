import React, { useState, useEffect } from "react";
import { CommonGet } from "../utils/API";

import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker";
import Header from "../partials/Header";

import dotenv from "dotenv";

dotenv.config();

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const defaultProps = {
    center: {
      lat: 8.3114,
      lng: 80.4037,
    },
    zoom: 9.0,
  };

  useEffect(() => {
    getLocations();
    const interval = setInterval(() => {
      getLocations();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const filteredArr = markers.filter((marker) =>
      marker.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setFilteredMarkers(filteredArr);
  }, [searchKey, markers]);

  const getLocations = () => {
    CommonGet("getSites", "")
      .then((res) => res.json())
      .then((json) => {
        setMarkers(json);
      });
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            getLocations={getLocations}
            setSearchKey={setSearchKey}
          />
          <main>
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_KEY,
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                {searchKey == ""
                  ? markers.map((item, i) => (
                      <Marker
                        key={i}
                        _id={item._id}
                        lat={item.lat}
                        lng={item.lng}
                        name={item.name}
                        status={item.status}
                        getLocations={getLocations}
                      />
                    ))
                  : filteredMarkers.map((item, i) => (
                      <Marker
                        key={i}
                        _id={item._id}
                        lat={item.lat}
                        lng={item.lng}
                        name={item.name}
                        status={item.status}
                        getLocations={getLocations}
                      />
                    ))}
              </GoogleMapReact>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
