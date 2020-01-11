import { combineReducers, createStore } from 'redux'

// Constants
const ADD_OPERATION_NUMBER = `ADD_OPERATION_NUMBER`

// Actions
export const addOperationNumber = (operationNumber: any) => ({
  type: ADD_OPERATION_NUMBER,
  operationNumber
})

// Reducers
export const currentData = (state: any = {}, action: any) => {
  switch (action.type) {
    case ADD_OPERATION_NUMBER:
      return state + 1

    default:
      return state
  }
}

// Combine Reducers
export const reducers = combineReducers({
  currentData
})

// Configure Store
export function configureStore(initialState: any) {
  const store = createStore(reducers, initialState)
  return store
}

// Export Store
export const store = configureStore({})
