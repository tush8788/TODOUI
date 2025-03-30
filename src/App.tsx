import { BrowserRouter } from 'react-router-dom'
import Navigation from './component/layouts/routes/Navigation'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {config} from './config'

function App() {

  return (
    <>
    <GoogleOAuthProvider clientId={config.googleClientId}>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
