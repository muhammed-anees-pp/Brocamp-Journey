import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE_COLOR: 'CHANGE_COLOR',
}

const initialState = {
  count: 0,
  color: 'blue',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + (action.payload ?? 1) }

    case ACTIONS.DECREMENT:
      return { ...state, count: Math.max(0, state.count - (action.payload ?? 1)) }

    case ACTIONS.RESET:
      return initialState

    case ACTIONS.CHANGE_COLOR:
      return { ...state, color: action.payload }

    default:
      return state
  }
}

export default function CounterColor() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2 style={{ color: state.color }}>Counter: {state.count}</h2>

      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: 1 })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT, payload: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>
        Reset
      </button>

      <br /><br />

      <button onClick={() => dispatch({ type: ACTIONS.CHANGE_COLOR, payload: 'red' })}>
        Red
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.CHANGE_COLOR, payload: 'green' })}>
        Green
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.CHANGE_COLOR, payload: 'blue' })}>
        Blue
      </button>
    </div>
  )
}
