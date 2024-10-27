import HeaderNav from './HeaderNav.jsx';
import { useState } from 'react';

function Home() {
    const [shoppingCartCount, setshoppingCartCount] = useState(1);

    return (
        <>
            <HeaderNav shoppingCartCount={shoppingCartCount}/>
            <h1 className='hello'>Hello</h1>
        </>
    )
}

export default Home;