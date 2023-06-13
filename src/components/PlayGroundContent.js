import React from 'react';
import CatArena from '../assets/img/cat-arena.jpeg';
import CatGarden from '../assets/img/cat-garden.jpg';
import CatToy from '../assets/img/cat-toy.jpg';

const CatPlayground = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row clearfix">
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="title">CAT PLAYGROUND</h2>
              </div>
              <div className="text">
                <p>Kitty Corner's Cat Playground is a delightful space designed to provide a fun and engaging environment for our feline visitors. We understand that cats have natural instincts and needs for physical activity and mental stimulation. That's why we have dedicated a special area in our pet store where cats can explore, play, and interact with various toys and structures.</p>
              </div>
              <div className="text">
                <p>The Cat Playground at Kitty Corner is thoughtfully designed with different levels, platforms, tunnels, and climbing structures to cater to cats of all sizes and ages. Whether your cat is an adventurous climber or a curious explorer, they will find plenty of opportunities to engage in their favorite activities. The playground is designed to mimic a natural setting, with scratching posts, perches, and hideouts that allow cats to exercise their natural behaviors.</p>
              </div>
            </div>
          </div>
          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="image-playground">
                <img src={CatArena} alt="Cat Arena" />
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="image-playground">
                <img src={CatGarden} alt="Cat Garden" />
              </div>
            </div>
          </div>
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="title">CAT PLAYGROUND</h2>
              </div>
              <div className="text">
                <p>At Kitty Corner, we prioritize the safety and well-being of our feline friends. The Cat Playground is equipped with secure enclosures to ensure that cats can play freely without any risk of escape or injury. Our trained staff members are always present in the playground area to monitor the cats' activities and ensure a peaceful and enjoyable experience for everyone.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="title">CAT PLAYGROUND</h2>
              </div>
              <div className="text">
                <p>We believe that a happy and enriched cat is a healthy cat, and the Cat Playground at Kitty Corner is designed with this philosophy in mind. Whether your cat is a regular visitor or you're looking to introduce them to a new and exciting experience, our Cat Playground is the perfect place to let them unleash their inner adventurer and have a purr-fectly enjoyable time.</p>
              </div>
            </div>
          </div>
          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="image-playground">
                <img src={CatToy} alt="Cat Toy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatPlayground;
