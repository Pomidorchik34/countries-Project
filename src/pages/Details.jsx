import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import instancse from "../utils/axios";
import { data } from "autoprefixer";
import axios from "axios";

function Details() {
  const [data, setData] = useState([]);
  let nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("id")) {
      instancse
        .get(`/countries/${localStorage.getItem("id")}`)
        .then((res) => {
          setData(res.data);
          if (res.data == null) {
            nav("/");
          }
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="px-def">
      <button className="my-20 bg-base-100 p-[10px]" onClick={() => nav("/")}>
        <i className="fa-solid fa-arrow-left pl-[31px] pr-[10px] rounded-[12px]"></i>
        Back
      </button>
      {data.length <= 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="flex justify-center items-center pb-[233px]">
          <div className="flex justify-between gap-[344px]">
            <img src={data.flags.png} alt="" width={560} height={401} />
            <div className="flex justify-between gap-[117px]">
              <div>
                <h1 className="text-white text-2xl text-bold mb-[23px]">
                  {data.name.common}
                </h1>
                <ul className="list-none">
                  <li>
                    <span>Native Name:</span>
                    <span>{data.nativeName}</span>
                  </li>
                  <li>
                    <span>Population:</span>
                    <span>{data.population}</span>
                  </li>
                  <li>
                    <span>Region:</span>
                    <span>{data.region}</span>
                  </li>
                  <li>
                    <span>Sub Region:</span>
                    <span>{data.subregion}</span>
                  </li>
                  <li>
                    <span>Capital:</span>
                    <span>{data.capital[0]}</span>
                  </li>
                </ul>
              </div>
              <ul className="mt-[87px]">
                <li>
                  <span>Top Level Domain:</span>
                  <span>{data.cca3}</span>
                </li>
                <li>
                  <span>Currencies:</span>
                  <span>{data.currencies}</span>
                </li>
                <li>
                  <span>Languages:</span>
                  <span>{data.languages}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative bottom-[-200px] left-[-410px]">
            <span className="text-nowrap">Border Countries: </span>
            {data.borders.length <= 0 &&
              data.borders.map((value) => {
                return (
                  <span className="px-[27px] py-[4px] bg-base-100">
                    {value}
                  </span>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
