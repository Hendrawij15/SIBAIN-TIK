import React, { useEffect } from "react";
import Layout from "./Layout.js";
import ListUser from "../components/ListUser.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSTAFF } from "../features/authenSlice.js";

const Users = () => {
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
      navigate("/dasboard");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <ListUser />
    </Layout>
  );
};

export default Users;
