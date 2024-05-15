import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Clothing } from '../../pages/Home'

type CartState = {
  items: Clothing[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Clothing>) => {
      const clothing = state.items.find((item) => item.id === action.payload.id)

      if (!clothing) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

cartSlice.actions.add

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
