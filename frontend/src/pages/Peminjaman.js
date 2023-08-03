import React, { useEffect } from "react";
import Layout from "./Layout.js";
import PeminjamanList from "../components/Peminjaman/PeminjamanList.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice.js";

const Peminjaman = () => {
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
    if (user && user.role !== "admin") {
      navigate("/peminjamanuser");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <PeminjamanList />
    </Layout>
  );
};

export default Peminjaman;
