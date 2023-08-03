import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: user.email,
        Password: user.Password,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Akun tidak ditemukan",
        text: "Periksa kembali username dan password anda!",
      });
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getSTAFF = createAsyncThunk(
  "user/getSTAFF",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/staff");
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete("http://localhost:3001/logout");
});

export const authenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // Get User Login
    builder.addCase(getSTAFF.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSTAFF.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getSTAFF.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authenSlice.actions;
export default authenSlice.reducer;
