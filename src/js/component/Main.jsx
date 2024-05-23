import React from "react";
import Jumbotron from './Jumbotron';
import CardsLayout from './CardsLayout';

function Main(){
    return(
        <div className="flex-fill container-fluid w-100 p-3 m-0">
            <Jumbotron />
            <CardsLayout/>
        </div> 
    );
};

export default Main;