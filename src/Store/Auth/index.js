import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: null,
    // error: "",
    isAuthenticated: false,
    // role: null,
    // token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setLogin: (state, action) => {
            state.employee = action.payload.employee;
            // state.token = action.payload.token;
            (state.isAuthenticated = action.payload.isAuthenticated);
            // (state.role = action.payload.employee.role);
        },

        setLogout: (state, action) => {
            state.employee = null;
            // state.token = null;
            state.isAuthenticated = false;
            // state.role = null;
        },


    },
});

export const authActions = authSlice.actions;

export default authSlice;