import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CryptoJS from 'crypto-js';
import LZString from 'lz-string';
import { createStore } from './app/store';
import { App } from './App';

interface WindowWithState extends Window {
	__PRELOADED_STATE__?: string;
}

const encrypted = (window as WindowWithState).__PRELOADED_STATE__;

if (!encrypted) throw new Error('__PRELOADED_STATE__가 없습니다.');

const secretKey = 'my-secret-key';
const compressed = CryptoJS.AES.decrypt(encrypted, secretKey).toString(
	CryptoJS.enc.Utf8
);
const preloadedState = JSON.parse(LZString.decompressFromUTF16(compressed)!);

const store = createStore(preloadedState);

hydrateRoot(
	document.getElementById('root') as HTMLElement,
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
