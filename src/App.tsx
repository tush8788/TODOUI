import { BrowserRouter } from 'react-router-dom'
import Navigation from './component/layouts/routes/Navigation'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
