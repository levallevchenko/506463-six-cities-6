import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import Favorites from './favorites';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
it(`Favorites should render correctly`, () => {

  const store = mockStore({
    [NameSpace.USER]: {
      authInfo: {},
    },
    [NameSpace.OFFERS]: {
      favoriteOffers: [{
        city: {
          name: `test`
        },
        hotelId: 1},
      {
        city: {
          name: `test2`
        },
        hotelId: 2
      }],
    },
  });

  store.dispatch = () => Promise.resolve();
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
});
