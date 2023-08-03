import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditPeminjaman from "../components/Peminjaman/FormEditPeminjaman.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice";

const EditPeminjaman = () => {
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
      <FormEditPeminjaman />
    </Layout>
  );
};

export default EditPeminjaman;
