import React, { useEffect, useRef, useState } from "react";
import instancse from "../utils/axios";
import useAxios from "../hooks/useAxios";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  let nav = useNavigate();
  const id = useSelector((state) => state.id);
  console.log(id);
  let distpach = useDispatch();
  // distpach({ type: "SENT", payload: "5" });
  const [copiedData, setCopiedData] = useState([]);
  const [data] = useAxios(instancse, `/countries`);
  function Filter(e) {
    instancse
      .get(`/countries?region=${e.target.value}`)
      .then((res) => setCopiedData(res.data.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="px-def">
      <div className="main justify-between">
        <div>
          <i className="fa-solid fa-magnifying-glass relative left-[2.56rem] z-10"></i>
          <input
            type="text"
            onChange={(e) => {
              setTimeout(() => {
                instancse
                  .get(`/countries?search=${e.target.value}`)
                  .then((res) => setCopiedData(res.data.data))
                  .catch((err) => console.log(err));
              }, [500]);
            }}
            placeholder="Search for a country…"
            className="shadow-lg py-[1.125rem] px-[0.5rem] pl-[4.625rem] pr-[5.625rem] max-w-xs bg-base-100 rounded-[0.375rem] relative right-[0.25rem]"
          />
        </div>
        <select onChange={Filter} className="filter rel-1">
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="cards rel-2 flex flex-wrap gap-[3.6875rem] relative justify-center">
        {data.length <= 0 ? (
          <div className="w-full h-full flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : copiedData.length <= 0 ? (
          data.map((value, index) => {
            return (
              <div
                onClick={() => {
                  distpach({ type: "SENT", payload: value.name.slug });
                  localStorage.setItem("isId", value.name.slug);
                  nav("/details");
                }}
                key={index}
                className="shadow-lg flex flex-col bg-base-100 w-[16.5rem] rounded-[0.25rem]"
              >
                <img
                  className="rounded-[0.25rem]"
                  src={value.flags.svg}
                  loading="lazy"
                  alt=""
                />
                <div className="flex flex-col p-[1.5rem]">
                  <h3 className="text-base-500 font-bold mb-4">
                    {value.name.common}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span>
                      <span className="text-base-500">Population: </span>
                      <span>{value.population}</span>
                    </span>
                    <span>
                      <span className="text-base-500">Region: </span>
                      <span>{value.region}</span>
                    </span>
                    <span>
                      <span className="text-base-500">Capital: </span>
                      <span>{value.capital[0]}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          copiedData.map((value, index) => {
            return (
              <div
                onClick={() => {
                  distpach({ type: "SENT", payload: value.name.slug });
                  localStorage.setItem("isId", value.name.slug);
                  nav("/details");
                }}
                key={index}
                className="flex flex-col bg-base-100 w-[16.5rem] rounded-[0.25rem]"
              >
                <img
                  className="rounded-[0.25rem]"
                  src={value.flags.svg}
                  loading="lazy"
                  alt=""
                />
                <div className="flex flex-col p-[1.5rem]">
                  <h3 className="text-base-500 font-bold mb-4">
                    {value.name.common}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span>
                      <span className="text-base-500">Population: </span>
                      <span>{value.population}</span>
                    </span>
                    <span>
                      <span className="text-base-500">Region: </span>
                      <span>{value.region}</span>
                    </span>
                    <span>
                      <span className="text-base-500">Capital: </span>
                      <span>{value.capital[0]}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
