import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from './App.jsx';


it('expect true to be true', () => {
    expect(true).toBe(true);
})

it('expect to render', () => {
    render(<App/>);
    const greetingElement = screen.getByText('Hello World');
    expect(greetingElement).toBeInTheDocument();
    
})

it('count is 0', () => {
    render(<App/>);
    const headerCount = screen.getByRole('heading', {name: '0'})
    expect(headerCount).toHaveTextContent('0');
})

it('count is 1 on button click', async () => {
    const user = userEvent.setup();
    render(<App/>);
    const headerCount = screen.getByRole('heading')
    const buttonIncrement = screen.getByRole('button', {name: 'Increment'});
    await user.click(buttonIncrement);
    await user.click(buttonIncrement);
    expect(headerCount).toHaveTextContent('2');



})

