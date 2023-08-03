import React, { useEffect } from "react";
import Layout from "./Layout";
import AddPDFPeminjaman from "../components/Peminjaman/AddPDFPeminjaman.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice";

const AddPeminjamanPDF = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getSTAFF());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <AddPDFPeminjaman />
    </Layout>
  );
};

export default AddPeminjamanPDF;
