import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filter/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});