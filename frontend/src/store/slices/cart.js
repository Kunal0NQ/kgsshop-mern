import { createAction, createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// const initialState = {
//   cart: { cartItems: cartItemsFromStorage },
// };
const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

// ------------------------------------------------------------
// Actions
// const addToCart = (id, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get('http://localhost:5000/api/products');
//   //   const addTodo = createAction('ADD_TODO');
//   dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//       product: data._id,
//       name: data.name,
//       image: data.image,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty,
//     },
//     // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
//   });
// };
// {type : "ADD_TODO", payload : {text : "Buy milk"}})

// ------------------------------------------------------------
// ------------------------------------------------------------
//   Reducers
// const cartReducer = createReducer((state = { cartItems: [] }), (builder) => {
//   builder
//     .addCase('CART_ADD_ITEM', (state, action) => {
//       const item = action.payload;

//       const existItem = state.cartItems.find((x) => x.product === item);

//       if (existItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((x) =>
//             x.product === existItem.product ? item : x
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }
//       state.push(action.payload);
//     })
//     .addCase('TOGGLE_TODO', (state, action) => {
//       const todo = state[action.payload.index];
//       // "mutate" the object by overwriting a field
//       todo.completed = !todo.completed;
//     })
//     .addCase('REMOVE_TODO', (state, action) => {
//       // Can still return an immutably-updated value if we want to
//       return state.filter((todo, i) => i !== action.payload.index);
//     })
//     .addCase('DEFAULT', (state, action) => {
//       return state;
//     });
// });
const addItem = createAction('cart/addItem');

const cartSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    cartAdded(state, action) {
      const py = action.payload;
      function getAll() {
        return createAsyncThunk('cart/getItem', async () =>
          axios.create({
            baseURL: 'http://localhost:5000/api/products',
            headers: {
              'Content-type': 'application/json',
            },
          })
        );
      }
      getAll();

      py = {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      };
    },
  },
});

export const { postAdded, cartAdded } = cartSlice.actions;
export default cartSlice.reducer;
