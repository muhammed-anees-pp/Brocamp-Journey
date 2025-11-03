import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import QuotesTable from './QuotesTable'




function App() {
  return (
    <Provider store={store}>
      <QuotesTable/>
    </Provider>
  )
}

export default App