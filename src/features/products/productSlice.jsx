import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase";
import { ref, push, set, get, remove } from "firebase/database";

const productRef = ref(db, "products");

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const snapshot = await get(productRef);
    const data = snapshot.val() || {};

    return Object.entries(data).map(([id, value]) => ({
      id,
      ...value
    }));
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const newRef = push(productRef);

    await set(newRef, product);

    return { id: newRef.key, ...product };
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await remove(ref(db, "products/" + id));
    return id;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: []
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (p) => p.id !== action.payload
        );
      });
  }
});

export default productSlice.reducer;