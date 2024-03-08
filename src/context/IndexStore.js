import { configureStore } from '@reduxjs/toolkit'

import dataReducer from './sliceData'

export const store = configureStore({
    reducer: {
        data: dataReducer,
    }
})