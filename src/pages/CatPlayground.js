import React from 'react';
import CatArena from '../assets/img/cat-arena.jpeg';
import CatGarden from '../assets/img/cat-garden.jpg';
import CatToy from '../assets/img/cat-toy.jpg';


const CatPlayground = () => {
  return (
    <section class="about-section">
    <div class="container">
        <div class="row clearfix">
          
            <div class="content-column col-md-6 col-sm-12 col-xs-12">
                <div class="inner-column">
                    <div class="sec-title">
                        <div class="title">CAT PLAYGROUND</div>
                        <h2><br></br></h2>
                    </div>
                    <div class="text">"Unleash the excitement with our irresistible cat toys! 🐾 Watch your feline friend's eyes light up with delight as they discover endless hours of play. 🎉 Our carefully crafted toys are designed to stimulate their natural instincts, keeping them entertained and engaged. 🐈 From interactive puzzles to feather teasers, we offer a wide range of toys to satisfy every cat's curiosity. 🐾 Whether your cat loves to chase, pounce, or bat, our toys are guaranteed to provide endless fun and exercise. 🌟 Treat your furry companion to the best with our high-quality, durable toys that are built to withstand their playful energy. 🐾 Give your cat the gift of entertainment and enrichment. Get our cat toys today and witness pure feline bliss!"</div>
                    <div class="email">Request Quote: <span class="theme_color">Make your cat happy</span></div>
                </div>
            </div>
           
            <div class="image-column col-md-6 col-sm-12 col-xs-12">
                <div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="image">
                        <img src={CatArena} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
                            <div class="content-column col-md-6 col-sm-12 col-xs-12">
                                <div class="inner-column">
                                    <div class="sec-title">
                                        <div class="title">CAT PLAYGROUND</div>
                                        <h2><br></br></h2>
                                    </div>
                                    <div class="text">Discover feline paradise at the Cat Park! 🐾 Unleash the purrfect adventure for you and your furry friends. 🌳 Experience a world tailored to cats, where fun and relaxation intertwine. 🏞️ Embrace nature's playground with spacious enclosures, climbing trees, and cozy hideouts. 😺 Witness joyful whiskers, daring leaps, and endless exploration. 🌿 Indulge in feline camaraderie and make lifelong memories. 🐈 Join us at the Cat Park and let your feline companions thrive in their own slice of paradise. 🌺 Pawsome adventures await</div>
                                    <div class="email">Request Quote: <span class="theme_color">Let your cat start their jorney</span></div>
                                </div>
                            </div>
                        
                            <div class="image-column col-md-6 col-sm-12 col-xs-12">
                                <div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="image">
                                        <img src={CatGarden} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="content-column col-md-6 col-sm-12 col-xs-12">
                                <div class="inner-column">
                                    <div class="sec-title">
                                        <div class="title">CAT PLAYGROUND</div>
                                        <h2><br></br></h2>
                                    </div>
                                    <div class="text">"Step into a world of feline wonder at our Cat Play Room! 🐾 Experience the ultimate haven where cats reign supreme. 🌈 Our play room is a paradise filled with interactive toys, climbing structures, and cozy nooks for your furry friends to explore and unwind. 😺 Watch as their playful spirits soar, chasing toys, scaling towers, and leaping with joy. 🐈 Create magical moments as your cats engage in friendly feline interactions, forming new bonds and friendships. 🐾 Our dedicated staff ensures a safe and stimulating environment, providing supervision and care. 🌟 Treat your cats to a day of endless amusement and enrichment at our Cat Play Room. 🐾 Discover a space designed to make your feline companions feel like kings and queens of their own kingdom. Join us today and witness pure feline joy!"</div>
                                    <div class="email">Request Quote: <span class="theme_color">Make your cat cozy</span></div>
                                </div>
                            </div>
                            
                            
                            <div class="image-column col-md-6 col-sm-12 col-xs-12">
                                <div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="image">
                                        <img src={CatToy} alt=""></img>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
    </div>
</section>

  );
}

export default CatPlayground;