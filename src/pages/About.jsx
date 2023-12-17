import React from "react";
import './About.css'
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import {ImageGallery} from '../components/ImageGallery';
import { Reviews } from "../components/Reviews";


function About() {
    return (  
        <div className="about-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center
                    justify-content-center">
                    <h1 className="text-light">About</h1>
                </div>
            </header>
            <div className="container my-5">
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit itaque repellat, non vitae sapiente quo
                    explicabo libero sit, sed natus, distinctio e
                    a! Harum cum atque aut magni, alias possimus hic
                    vitae. Adipisci quos officia harum ducimus volup
                    tate sed corporis molestiae et, voluptatibus rep
                    ellendus autem nulla id aperiam expedita dolorem
                    que tempore?
                       
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisici
                    ng elit. Temporibus fuga animi perfer
                    endis nulla quod quia ea accusamus neque repudiandae vero, debitis, non unde tem
                    pore ratione voluptatibus pariatur ducimus rem officiis fugiat, alias explicabo itaque expedita. Deleniti exercit
                    ationem placeat velit ab rerum delectus amet, perspiciatis, quam dolorum ipsum fugit dolores totam atque libero natus optio. Natus adip
                    isci fugit reiciendis rerum excepturi dolorum non sed eius? Excepturi, expedita incidunt voluptas dolorum magni veniam eum hic. Maxime nemo nesciunt, rem at aperi
                    am perspiciatis!
                </p>

                <div className="row">
                    <div className="cpl-lg-6">
                        <img src={AboutChef1}  className="img-fluid my-4"
                            alt="" />
                    </div>

                    <div className="cpl-lg-6">
                        <img src={AboutChef2}  className="img-fluid my-4"
                        alt="" />
                    </div>

                </div>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis similique dolor et hic, ipsam numquam praesentium debitis exercitationem iusto dolores aliquam natus voluptatem deserunt ratione repudiandae magnam distinctio, quas fuga! Accusantium labore, dolorum vitae sunt nemo consequatur quae cumque earum asperiores explicabo quos odio animi, porro, sit vel? Saepe deleniti esse neque ad doloribus eaque minus nemo at ipsum ipsa, cum ab atque veritatis beatae pariatur, architecto nesciunt possimus, recusandae non? Consequatur unde veniam ducimus commodi nostrum fuga illo officiis eum debitis culpa quod, laborum sint ratione, quia repellat excepturi?
                </p>
            </div>

            <div className="bg-dark text-light">
                <ImageGallery />
            </div>

            <div className="my-5">
                < Reviews/>
            </div>
        </div>
    )
}

export default About;