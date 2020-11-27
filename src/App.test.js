import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import {Provider} from 'react-redux'
import store from './store' 
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('testing App component', () => {
  test('should have Home text/link', () => {
    const {getByText} = render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)
    const textAnchor = getByText('Home')
    expect(textAnchor).toBeInTheDocument()
  })
  test('should have Favorite text/link', () => {
    const {getByText} = render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>)
    const textAnchor = getByText('Favorite')
    expect(textAnchor).toBeInTheDocument()
  })
})
