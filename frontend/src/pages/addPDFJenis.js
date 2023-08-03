import React, { useEffect } from "react";
import Layout from "./Layout";
import AddPDFJenis from "../components/JenisBarang/AddPDFJenis.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice";

const AddJenisPDF = () => {
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
      <AddPDFJenis />
    </Layout>
  );
};

export default AddJenisPDF;
