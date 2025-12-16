import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import userReducer from "./slices/userSlice";
import dialogReducer from "./slices/dialogSlice";
import postItemReducer from "./slices/postSlice";

// 🧩 Combine reducers
const rootReducer = combineReducers({
  userDetails: userReducer,
  dialog: dialogReducer,
  postItem:postItemReducer
});

// ⚙️ Redux Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userDetails"], // ✅ Only persist user slice
};

// 💾 Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🏗️ Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 🚀 Persistor
export const persistor = persistStore(store);
