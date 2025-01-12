import{combineReducers,configureStore} from "@reduxjs/toolkit";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";


const persistConfig = {
    key : "root",
    version :1,
    storage
}

const reducers =combineReducers({
    auth : authSlice.reducer,

})

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck : {
            ignoreActions : [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        }
    })
    });
    export let persistor = persistStore(store);