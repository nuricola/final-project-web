import React from "react";
import './Menu.css'
import { Card, CardBody, CardText,CardTitle } from "react-bootstrap";
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id:1,
        name:"English Breakfast",
        description: 'smoked bacon, sausage,salat',
        price:'$12'
    },
    {
        id:2,
        name:"Fried Eggs",
        description: 'fried eggs , sausage',
        price:'$7'
    },
    {
        id:3,
        name:"Avocado Toast",
        description: 'egg,avocado,onion,toast',
        price:'$8'
    }
]

const lunch = [
    {
        id:1,
        name:"Caeser Salad",
        description: 'chicken breast, eggs, romaine lettuce,parmesan',
        price:'$15'
    },
    {
        id:2,
        name:"Pasta",
        description: 'spaghetti, pancetta, garlic,eggs,chicken',
        price:'$14'
    },
    {
        id:3,
        name:"Pizza",
        description: 'Salami,mshrooms,tomato',
        price:'$11'
    }
];

const dinner=[
    {
        id:1,
        name:"Murakami",
        description: 'rice,krevetki,soya',
        price:'$15'
    },
    {
        id:2,
        name:"Bolognesse",
        description: 'fried eggs , onion, carrot, chicken , pasta',
        price:'$15'
    },
    {
        id:3,
        name:"Doner Kebab",
        description: 'Beef,durum,onion,sauses,fries',
        price:'$8'
    }
];

const dessert =[
    {
        id:1,
        name:"Cheesecake",
        description: 'default cheesecake',
        price:'$7'
    },
    {
        id:2,
        name:"Lemon Cake",
        description: 'default lemon cake',
        price:'$7'
    },
    {
        id:3,
        name:"Cinnamon",
        description: 'default cinnamon',
        price:'$8'
    }
];

function Menu() {
    return (  
        <div className="menu-page">
            <header className="mt-5">
                <div className="conrainer h-100 d-flex
                 align-items-center justify-content-center">
                    <h1 className="text-light">Menu</h1>
                </div>
            </header>


            <div className="breakfast my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 text-uppercase fw-bold text-success">
                        Breakfast
                    </h2>
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={BreakfastImg} className="img-fluid
                            w-75 mt-4 mt-lg-0" alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column
                        justify-content-around">
                            {breakfast.map((breakfast) =>(
                                <div key={breakfast.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3">
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className="text-center fs-3
                                            fw-bold text-success">
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="lunch bg-dark text-light my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 text-uppercase fw-bold text-success">
                        Lunch
                    </h2>
                    <div className="row">

                        <div className="col-lg-6 d-flex flex-column
                        justify-content-around">
                            {lunch.map((lunch) =>(
                                <div key={lunch.id}>
                                    <Card className="border-0 bg-dark
                                    text-light">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3">
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {lunch.description}
                                            </CardText>
                                            <CardText className="text-center fs-3
                                            fw-bold text-success">
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={LunchImg} className="img-fluid
                            w-75 mt-4 mt-lg-0" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="dinner my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 text-uppercase fw-bold text-success">
                        Dinner
                    </h2>
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DinnerImg} className="img-fluid
                            w-75 mt-4 mt-lg-0" alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column
                        justify-content-around">
                            {dinner.map((dinner) =>(
                                <div key={dinner.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3">
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {dinner.description}
                                            </CardText>
                                            <CardText className="text-center fs-3
                                            fw-bold text-success">
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="dessert bg-dark text-light my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 text-uppercase fw-bold text-success">
                        Dessert
                    </h2>
                    <div className="row">

                        <div className="col-lg-6 d-flex flex-column
                        justify-content-around">
                            {dessert.map((dessert) =>(
                                <div key={dessert.id}>
                                    <Card className="border-0 bg-dark
                                    text-light">
                                        <CardBody>
                                            <CardTitle className="text-center fs-3">
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-5">
                                                {dessert.description}
                                            </CardText>
                                            <CardText className="text-center fs-3
                                            fw-bold text-success">
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={DessertImg} className="img-fluid
                            w-75 mt-4 mt-lg-0" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Menu;