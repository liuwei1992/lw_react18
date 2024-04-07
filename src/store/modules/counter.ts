import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'counter',
  initialState: {
    count: 10,
  },
  reducers: {
    addCountAction: (store, { payload }) => {
      store.count += payload
    },
  },
})

export const { addCountAction } = slice.actions

export default slice.reducer
