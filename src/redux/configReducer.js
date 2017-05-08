import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export default function configureStore(initialState) {
  // compose  applyMiddleware 是redux触发action重新更新需要的 “热键” 如果不加会报错，“Action must be Object"之类的错误
    let createStoreWithMiddleware;
    const middleware = applyMiddleware(thunk);
    if (window.__REDUX_DEVTOOLS_EXTENSION__){
        createStoreWithMiddleware = compose(
            middleware,
            __REDUX_DEVTOOLS_EXTENSION__()
        );
    }else{
        createStoreWithMiddleware = compose(middleware);
    }
    const Store = createStoreWithMiddleware(createStore)(
        rootReducer, initialState
    );
    if (module.hot) {
      module.hot.accept('./reducers', () =>
        Store.replaceReducer(require('./reducers').default)
      );
    }
  return Store;
}
