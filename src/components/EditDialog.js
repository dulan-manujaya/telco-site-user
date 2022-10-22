import React, { useState } from "react";
import { CommonUpdate, CommonDeleteById } from "../utils/API";

const EditDialog = (props) => {
  const [name, setName] = useState(props.name);
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);
  const [status, setStatus] = useState(props.status);

  const updateSite = () => {
    const site = {
      _id: props._id,
      name: props.name,
      lat: props.lat,
      lng: props.lng,
      status: status,
    };
    CommonUpdate("sites", site)
      .then((res) => res.json())
      .then((json) => {
        props.getLocations();
        props.closeModal();
      });
  };

  const deleteSite = () => {
    const site = {
      _id: props._id
    };
    CommonDeleteById("sites", site)
      .then((res) => res.json())
      .then((json) => {
        props.getLocations();
        props.closeModal();
      });
  };
  return (
    <>
      <div className="container mx-auto my-2 p-2"></div>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-lat"
            >
              Latitude
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-lat"
              type="text"
              value={lat}
              disabled
              // onChange={(e) => setLat(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-lng"
            >
              Longitude
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-lng"
              type="text"
              value={lng}
              disabled
              // onChange={(e) => setLng(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              type="text"
              value={name}
              disabled
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-status"
            >
              Status
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Normal - EB</option>
                <option>Normal - BDG</option>
                <option>MDG On</option>
                <option>BDG On</option>
                <option>Power Down</option>
                <option>Site Down</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
      {/* <button
          className="text-white bg-red-600 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute left-5"
          type="button"
          onClick={() => deleteSite()}
        >
          Delete
        </button> */}
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => props.closeModal()}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => updateSite()}
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default EditDialog;
