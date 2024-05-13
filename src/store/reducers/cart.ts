import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Clothing } from '../../pages/Home'

type CartState = {
  items: Clothing[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Clothing>) => {
      state.items.push(action.payload)
    }
  }
})

cartSlice.actions.add

export const { add } = cartSlice.actions
export default cartSlice.reducer
