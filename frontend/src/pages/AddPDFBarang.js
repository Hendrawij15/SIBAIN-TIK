import React, { useEffect } from "react";
import Layout from "./Layout";
import AddPDFBarang from "../components/Barang/AddPDFBarang.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice";

const AddBarangPDF = () => {
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
      <AddPDFBarang />
    </Layout>
  );
};

export default AddBarangPDF;
