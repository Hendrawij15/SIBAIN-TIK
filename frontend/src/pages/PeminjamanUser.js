import React, { useEffect } from "react";
import Layout from "./Layout.js";
import ListPeminjamanUser from "../components/PeminjamanUser/ListPeminjamanUser.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice.js";

const PeminjamanUser = () => {
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
      <ListPeminjamanUser />
    </Layout>
  );
};

export default PeminjamanUser;
