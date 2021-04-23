import React from 'react';
import NavBar from './Components/Navbar';

import Grid from './Components/Grid';
import Back1 from './Components/Back1';

import FlipGrid from './Components/FlipGrid';
import FlipProduc from './Components/FlipProducts2';
import FlipProduct3 from './Components/FlipProduct3';
import FlipProduct4 from './Components/FlipProduct4';
import GridOffer from './Components/GridOffer';
import FlipGrid2 from './Components/FlipGrid2';
import FlipGrid3 from './Components/FlipGrid3';

function Main() {
    return (
        <div>
            <NavBar/>
           
         
            <Grid/>
            <hr style={{height:'12px', backgroundColor:'#eaf2e9'}}/>
            <Back1/>
            <hr style={{height:'12px', backgroundColor:'#eaf2e9'}}/>
            <FlipGrid/>
           
            < FlipProduc/>
            <GridOffer/>
            <FlipGrid2/>
            <FlipProduct3/>
            <FlipGrid3/>
            <FlipProduct4/>

        </div>
    )
}

export default Main
