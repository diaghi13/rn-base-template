import React from 'react';
import { ThemeProvider } from '@shopify/restyle';

import { Navigator } from "./src/routes";
import { darkTheme, theme } from "./src/components";
import { useCachedResources, useColorScheme } from './src/hooks';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxTunk from 'redux-thunk';

enableScreens();

const fakeReducer = (state = {}, action: any) => {
  switch (action) {

  }
  return state;
};

const rootReducer = combineReducers({
  fake: fakeReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxTunk));

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
          <Provider store={store}>
            <Navigator colorScheme={colorScheme} />
          </Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
