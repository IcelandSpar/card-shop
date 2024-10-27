import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Home from './Home.jsx';

describe('Home Page is rendered', () => {
    render(<Home/>)
    const header = screen.getByRole('banner');
    const navLogoPlaceholder = screen.getAllByRole('listitem');
    const navCartPlaceholder = screen.getByText('Cart');
    const navShopButton = screen.getByText('Shop')
    const count = screen.getByRole('paragraph');

    test('If Header is rendered on home page', () => {
        expect(header).toBeInTheDocument();
    })

    test('If Logo is rendered on nav', () => {
        expect(navLogoPlaceholder[0]).toHaveTextContent('Logo');
    })

    test('If Shopping Cart is rendered on Home', () => {
        expect(navCartPlaceholder).toHaveTextContent('Cart');
    })

    test('If Shop Button is on nav bar', () => {
       
        expect(navShopButton).toHaveTextContent('Shop');
    })

    test('If count is not in document if 0', () => {
        const copyCount = count;
        
        if(parseInt(copyCount.textContent) == 0) {
            expect(count).not.toBeInTheDocument()
        }
    })
})