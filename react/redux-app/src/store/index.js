import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import storage from "redux-persist/lib/storage"
import {persistStore, persistReducer} from "redux-persist";

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";


const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist : ["token"]
}

const persistAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: persistAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)