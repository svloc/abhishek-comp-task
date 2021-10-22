import React from "react";
export default function Home() {
  return (
    <>
      <div
        className="header-poster"
        style={{ backgroundImage: "url(../header-img.png)" }}
      ></div>
      <div className="container">
        <h1 className="heading">
          How to save those extra bucks while shopping 🏬
        </h1>
        <div className="row sub-heading">
          <a>Lifestyle</a>
          <span style={{ margin: "0 0.75em" }}>•</span>
          <span>Oct 12, 2021</span>
        </div>
        <article>
          <p>
            📜 Make a shopping list - This is the most commonly heard advice but
            hey what's common sense is not common practice. So let's start with
            this - Make a shopping list and most importantly stick to the list.
            Add literally every small thing you want to buy to it, and avoid any
            impulse purchases.
          </p>
          <br />
          <p>
            ⚖ Price Police - The only place to compare is in the market. If
            you're on a grocery haul, take that extra minute to look at the
            price, compare it with other brands, check the quantity and
            ingredients they provide, etc. Believe me, it's almost therapeutic!
            You can also do it on a number of apps and websites that are easily
            available.
          </p>
          <img className="shopping-man-img" src="../../s-man.webp" />
          <a href="" target="_blank">
            Via GIFHY
          </a>
          <p style={{ marginTop: "1em" }}>
            Discounts! - This is the most common way of saving money. Buy
            alternates which have a higher discount percentage. Lookout for
            cashbacks too. Don't forget to check out the FamStore to see if your
            favourite brands can be found there. Our guess? They are! With those
            extra rewards, cashbacks and offers - spending on FamPay will legit
            change your life!
          </p>
        </article>
      </div>

      <div className="row subscribe">
        <div className="text-container">
          <h2>Subscribe to our newsletter</h2> 
          <h3>Get the latest posts delivered right to
          your inbox.</h3>
        </div>
        <div className="input-container row">
          <input placeholder="Your email address" />
          <button className="button">Subscribe</button>
        </div>
      </div>

      <div className="container fampay-container row">
           <div><img src='../../logo.png'/></div>
           <div className='icon-wrapper'>
             <h2>FamPay Team</h2>
           <div className='icon'>
           <i class="fas fa-globe-americas"></i>
           <i class="fab fa-facebook-square"></i>
           <i class="fab fa-twitter"></i>
           </div>
           </div>
      </div>

      <div className="row card">
         <div className='col-4'>
           <img className='card-img' src='https://images.unsplash.com/photo-1496449903678-68ddcb189a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDZ8fGZ1bnxlbnwwfHx8fDE2MjkxODMwMTM&ixlib=rb-1.2.1&q=80&w=2000'/>
           <div className="card-body">
            <p className="card-p">Culture</p>
            <h2 className="card-text">13 Things to do when you're bored - Boredom busters for teens 🤳</h2>
            <div className="row">
          <a>2 months ago</a>
          <span style={{ margin: "0 0.75em" }}>•</span>
          <span>4 min read</span>
        </div>
           </div>
         </div>

         <div className='col-4'>
           <img className='card-img' src='../../card-man.png'/>
           <div className="card-body">
            <p className="card-p">FamSays</p>
            <h2 className="card-text">Social Commerce - Making Money just through Social Media! 💸</h2>
            <div className="row">
          <a>2 months ago</a>
          <span style={{ margin: "0 0.75em" }}>•</span>
          <span>3 min read</span>
        </div>
           </div>
         </div>


         <div className='col-4'>
           <img className='card-img' src='../../card-girl.png'/>
           <div className="card-body">
            <p className="card-p">LifeStyle</p>
            <h2 className="card-text">It's time for teens to open shop on Instagram! 🛍️</h2>
            <h2 style={{margin:'1em'}}></h2>
            <div className="row">
          <a>6 months ago</a>
          <span style={{ margin: "0 0.75em" }}>•</span>
          <span>5 min read</span>
        </div>
           </div>
         </div>

         
      </div>


      <footer className="row">
        <div className="footer-content">
           <h3>UnRead by FamPay © 2021</h3>
        <div className="footer-icon">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-linkedin"></i>
           <i class="fab fa-twitter"></i>
        </div>
        </div>
      </footer>
    </>
  );
}

