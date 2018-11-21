# useStore
Redux like store with React Hooks and Context API.

To run:
```
yarn global add parcel-bundler
parcel index.html
```

Open at localhost:1234.

I named this repo - useStore thinking that I was going to write a hook. But turned out what was needed was a StoreContext and a Store component. The Store component uses the useReducer hook to get the dispatch. useContext hook can be used in conjuction with StoreContext. I cleverly added the reducer dispatch into the context so it is available everywhere. And finally, I make use of combineReducers in Redux to combine multiple reducers. So, it is almost Good Bye to Redux.

