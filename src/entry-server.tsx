import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from './app/store';

import App from './App';

export function render(_url: string) {
  const store = createStore();
  const html = renderToString(
    <StrictMode>
      <Provider store={store}>
        <StaticRouter location={_url}>
          <App />
        </StaticRouter>
      </Provider>
    </StrictMode>
  )
  return { 
    html
  }
}
  