import { BrowserRouter } from 'react-router-dom'
import Navigation from './component/layouts/routes/Navigation'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
    <GoogleOAuthProvider clientId='123325143947-405lsr4ggsu74bt5nrujieu88db8c5jg.apps.googleusercontent.com'>
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
