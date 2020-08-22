import {configureStore} from '@reduxjs/toolkit';

import reducer from './todo-slice';

const store = configureStore({reducer: reducer});
export {store};
