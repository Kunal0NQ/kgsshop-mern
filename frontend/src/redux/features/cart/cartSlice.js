import { createSlice, current } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

// const dispatch = useDispatch()

const initialState = {
  cartItems: [],
  totalCount: 0,
  tax: 0,
  subAmount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartItems: (state, actions) => {
      return {
        ...state,
      };
    },
    cartAdded: {
      reducer(state, action) {
        state.cartItems.push(action.payload);

        localStorage.setItem(
          'cartItem',
          JSON.stringify(current(state).cartItems)
        );
        // console.log("r",current(state));
        // console.log("j",current(state).cartItems);
        // console.log("j",state.cartItems);
        // console.log((dispatch, getState)=>getState());
      },

      prepare(id, qty, data) {
        console.log('F', data);
        return {
          payload: {
            // product: 'p',
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          },
        };
      },
    },

    cartReactionAdded(state, action) {
      const items = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },

    removeFromCart: {
      reducer(state, action) {
        state.cartItems.filter((x) => x.product !== action.payload);
        localStorage.setItem(
          'cartItems',
          Json.stringify(current(state).cartItems)
        );
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      customEntityAdapter.removeAll(state);
    });
  },
});

export const { cartAdded, cartReactionAdded, removeFromCart, getCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;

// postAdded: {
//   reducer(state, action) {
//     state.push(action.payload)
//   },
//   prepare(title, content, userId) {
//     return {
//       payload: {
//         id: nanoid(),
//         date: new Date().toISOString(),
//         title,
//         content,
//         user: userId,
//         reactions: {
//           thumbsUp: 0,
//           hooray: 0,
//           heart: 0,
//           rocket: 0,
//           eyes: 0,
//         },
//       },
//     }
//   },
// },

// reactionAdded(state, action) {
//   const { postId, reaction } = action.payload
//   const existingPost = state.find((post) => post.id === postId)
//   if (existingPost) {
//     existingPost.reactions[reaction]++
//   }
// },

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };
