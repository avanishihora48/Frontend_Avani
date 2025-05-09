import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reducer from './reducer'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
