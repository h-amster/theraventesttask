import { createRoot } from 'react-dom/client';
import 'reset-css';
import { Root } from './Root';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <Root />
  </Provider>,
);
