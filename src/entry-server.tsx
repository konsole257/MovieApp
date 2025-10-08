import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from './app/store';
import CryptoJS from 'crypto-js';
import LZString from 'lz-string';
import { fetchHomeFeeds } from '@/features/home/homeFeedThunk';
import { fetchTrailerContents } from '@/features/trailer/trailerContentThunk';

import { App } from './App';

export async function render(_url: string) {
	const store = createStore();

	switch (true) {
		case _url === '/': {
			await store.dispatch(fetchHomeFeeds());
			break;
		}

		case _url.startsWith('/Trailer/'): {
			const id = _url.split('/Trailer/')[1];
			await store.dispatch(fetchHomeFeeds());
			await store.dispatch(fetchTrailerContents(id));
			break;
		}
	}

	const html = renderToString(
		<StrictMode>
			<Provider store={store}>
				<StaticRouter location={_url}>
					<App />
				</StaticRouter>
			</Provider>
		</StrictMode>
	);

	const state = store.getState();
	// const safeState = {
	//   homeFeeds: state.homeFeeds,
	//   trailerContent: state.trailerContent
	// };

	const preloadedState = state;
	const jsonState = JSON.stringify(preloadedState);

	const compressed = LZString.compressToUTF16(jsonState);
	const secretKey = 'my-secret-key';
	const encrypted = CryptoJS.AES.encrypt(compressed, secretKey).toString();

	return { html, encrypted };
}
