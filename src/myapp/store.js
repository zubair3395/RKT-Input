import {configureStore} from '@reduxjs/toolkit';
import postSliceCounter  from '../Features/PostSlices';
export const store = configureStore({
    reducer: {
      post : postSliceCounter
    }
})
