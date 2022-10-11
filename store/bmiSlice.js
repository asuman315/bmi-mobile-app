import { createSlice } from "@reduxjs/toolkit";

const bmiSlice = createSlice({
  name: "bmi",
  initialState: {
    age: 0,
    weight: 0,
    height: 0,
    weightUnit: "",
    heightUnit: "",
    bmi: 0,
    bmiCategory: "",
    bmiRange: "",
    bmiColor: "",
    isGenderSelected: false,
    healthyWeightOne: 0,
    healthyWeightTwo: 0,
    healthyWeightRange: '',
  }, // initial state
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => { 
      state.height = action.payload;
    },
    setWeightUnit: (state, action) => {
      state.weightUnit = action.payload;
    },
    setHeightUnit: (state, action) => {
      state.heightUnit = action.payload;
    },
    setBmi: (state, action) => {
      state.bmi = action.payload;
    },
    setBmiCategory: (state, action) => {
      state.bmiCategory = action.payload;
    },
    setBmiRange: (state, action) => {
      state.bmiRange = action.payload;
    },
    setBmiColor: (state, action) => {
      state.bmiColor = action.payload;
    },
    setIsGenderSelected: (state, action) => {
      state.isGenderSelected = action.payload;
    },
    setHealthyWeightOne: (state, action) => {
      state.healthyWeightOne = action.payload;
    },
    setHealthyWeightTwo: (state, action) => {
      state.healthyWeightTwo = action.payload;
    },
    setHealthyWeightRange: (state, action) => {
      state.healthyWeightRange = action.payload;
    }  
  }, // reducers 
});

export const bmiActions = bmiSlice.actions;

//export default bmiSlice.reducer;

export default bmiSlice
