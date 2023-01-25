import { createSlice } from "@reduxjs/toolkit";

export const  postSliceCounter = createSlice({
    name: "post",
    initialState:{
        data: [
        {
        id: 1,
        title: "Instagram",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, magnam"
    },
   
]},
  reducers: {
    savePost: (state, action)=>{
        return{
            ...state,
          data: [...state.data, action.payload]
           
        }  
    }
  }
})
export const {savePost} = postSliceCounter.actions;
export default postSliceCounter.reducer;