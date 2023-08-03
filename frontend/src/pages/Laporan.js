import React, { useEffect } from "react";
import Layout from "./Layout.js";
import Laporan from "../components/Laporan/Laporan.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice.js";

const FormLaporan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getSTAFF());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    // if (user && user.role !== "admin") {
    //   navigate("/dasboard");
    // }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <Laporan />
    </Layout>
  );
};

export default FormLaporan;
