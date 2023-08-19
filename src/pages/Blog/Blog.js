import React from 'react'
import "./blog.scss"


export default function Blog() {
  return (
    <section className="blog">
          <div className="container">
            <div className="blog__inner">
              <div className="blog__items">
              <div className="blog__item">
                <img className="blog__item-img" src="images/blog/big-1.jpg" alt="" />
                <div className="blog__item-info">
                  <span className="blog__item-date">  August 15, 2020</span> | 
                  <a href="blog__item-author" className="">by Ann Summers</a>|
                  <a href="blog__item-theme" className="">Bedroom Furniture</a>
                </div>
                <h3 className="blog__item-title">
                  Red selfies edison bulb four dollar toast humblebrag for the furniture
                </h3>
                <p className="blog__item-text">
                  Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                </p>
              </div>
           
              <blockquote className="blog__blockquote">
                “Simplicity is not the goal. It is the by-product of a good idea and modest expectations” 
                <div className="blog__blockquote-author">
                  Paul Rand
                </div>
              </blockquote>

              <div className="blog__item article-popup">
                <div className="article__popup-box">
                <img className="blog__item-img" src="images/blog/big-2.jpg" alt="" />
                <a className="blog__item-popup" data-fancybox href="#" >
                  <img src="images/play_button.svg" className="blog__item-play" alt=""/>
                </a>
              </div>
              <div className="blog__item-info">
                <span className="blog__item-date">  August 12, 2020</span> | 
                <a href="blog__item-author"className=""> by Lux Morningstar</a>|
                <a href="blog__item-theme" className="">Design</a>
              </div>
              <h3 className="blog__item-title">
                Authentic kogi shabby chic
              </h3>
              </div>

              <div className="blog__item article-slider">
               <div className="article-slider-box">
                <img src="images/blog/big-3.jpg" alt=""className="article-slider__img"/>
                <div className="blog__item-info">
                  <span className="blog__item-date">  August 18, 2020</span> | 
                  <a href="blog__item-author"className="">by Ann Summers</a>|
                  <a href="blog__item-theme" className="">Bedroom Furniture</a>
                </div>
                <h3 className="blog__item-title">
                  Semiotics fixie four dollar toast, next level woke
                </h3>
                <p className="blog__item-text">
                  Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                </p>
               </div>
              </div>

              <div className="pagination">
                <ul className="pagination__list">
                  <li className="pagination__list-item">
                    <a  className="pagination__list-num pagination__list-num--active"  href="#">
                        1
                    </a>
                  </li>
                  <li className="pagination__list-item">
                    <a className="pagination__list-num"  href="#">
                        2
                    </a>
                  </li>
                </ul>
                
                  <a href="" className="pagination__arrow">
                    <img src="images/blog/arrow-right.svg" alt="" className="pagination__arrow-icon"/>
                  </a>
                
              </div>
              </div>
         
          <aside className="aside">
            <form className= "aside__search">
              <input type="text" className="aside__search-input" placeholder="Search"/>
              <button className="aside__search-btn" type="submit">
                <img src="images/Shape.svg" alt="" className=""/>

              </button>
            </form>
            <div  className="blog__category">
              <h6  className="blog__category-title">
                Categories
              </h6>
              <ul  className="blog__category-list">
                <li  className="blog__category-item">
                  <a href=""  className="blog__category-link">
                    Dining room (1)
                  </a>
                </li>
                <li  className="blog__category-item">
                  <a href=""  className="blog__category-link">
                    Office furniture (12)
                  </a>
                </li>
                <li  className="blog__category-item">
                  <a href=""  className="blog__category-link">
                    Simple interiror design (2)
                  </a>
                </li>
                <li  className="blog__category-item">
                  <a href=""  className="blog__category-link">
                    Design (4)
                  </a>
                </li>
                <li  className="blog__category-item">
                  <a href=""  className="blog__category-link">
                    Bedroom Furniture (1)
                  </a>
                </li>
              </ul>
            </div>

            <div  className="resent-posts">
              <h6  className="resent-posts__title">
                Recent Posts
              </h6>
              <ul  className="resent-posts__list">
                <li  className="resent-posts__item">
                  <a href=""  className="resent-posts__item-title">
                    Cred selfies edison bulb four dollar toast humblebrag
                  </a>
                  <span  className="resent-posts__date" >August 10, 2020  </span>|
                  <a href=""  className="resent-posts__author">by Ann Summers</a>
                  
                </li>
                <li  className="resent-posts__item">
                  <a href=""  className="resent-posts__item-title">
                    Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
                  </a>
                  <span  className="resent-posts__date" > September 30 ,2020</span> |
                  <a href=""  className="resent-posts__author">by Ann Summers</a>
                  
                </li>
                <li  className="resent-posts__item">
                  <a href=""  className="resent-posts__item-title">Cred selfies edison bulb four dollar toast humblebrag</a>
                  <span class="resent-posts__date" >May 2, 2020 </span>|
                  <a href=""  className="resent-posts__author">by Ann Summers</a>
                </li>
              </ul>
            </div>
            <div  className="blog__tags">
              <h6  className="blog__tags-title">
                Tags
              </h6>
              <a href=""  className="blog__tags-link">
                Dining room futniture
              </a>
              <a href=""  className="blog__tags-link">
                Chair
              </a>
              <a href=""  className="blog__tags-link">
                Table
              </a>
              <a href=""  className="blog__tags-link">
                Bedroom
              </a>
              <a href=""  className="blog__tags-link">
                Office Furniture
              </a>
            </div>
            <ul  className="blog__social">
              <li  className="blog__social-item">
                <a href="#"  className="contact__social-link">
                  <img   className="blog__social-link" src="images/facebook.svg" alt="facebook"/>
                </a>
              </li>
              <li  className="blog__social-item">
                <a href="#"  className="blog__social-link">
                  <img   className="blog__social-link " src="images/instagram.svg" alt="facebook"/>
                </a>
              </li>
              <li  className="blog__social-item">
                <a href="#"  className="blog__social-link">
                  <img   className="blog__social-link" src="images/pinterest.svg" alt="facebook"/>
                </a>
              </li>
              <li  className="blog__social-item">
                <a href="#"  className="blog__social-link">
                  <img   className="blog__social-link" src="images/whatsapp.svg" alt="facebook"/>
                </a>
              </li>
              <li  className="blog__social-item">
                <a href="#"  className="blog__social-link">
                  <img   className="blog__social-link" src="images/youtube.svg" alt="facebook"/>
                </a>
              </li>
            </ul>
          </aside>
          </div>
          </div>
        </section>

  )
}
