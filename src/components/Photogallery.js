import React from 'react'
//import './Photogallery.css'
import p1 from './photos/p1.jpg'
import p2 from './photos/p2.jpg'
import p3 from './photos/p3.jpg'
import p4 from './photos/p4.jpg'
import p5 from './photos/p5.jpg'
import p6 from './photos/p6.jpg'
import p7 from './photos/menu.jpg'
import p8 from './photos/p8.jpg'
import p9 from './photos/p9.jpg'
import p10 from './photos/p10.jpg'
import p11 from './photos/drink.jpg'
import p12 from './photos/p12.jpg'
import p13 from './photos/drink (2).jpg'
import p14 from './photos/p14.jpg'
import p15 from './photos/p15.jpg'


export default function Photogallery() {
  return (
    <div class="welcome ">
    <div class="welcome-text">
        <h1 class="font1">OUR DISHES</h1>
        <hr/>
    </div>


<div className="container row">

    <div class="Row col-md-4">
        <figure><img src={p1} alt="pic"/></figure>
        <figure><img src={p2} alt="pic"/></figure>
        <figure><img src={p3} alt="pic"/></figure>
        <figure><img src={p4} alt="pic"/></figure>
        <figure><img src={p5} alt="pic"/></figure>
    </div>

    <div class="Row col-md-4">
        <figure><img src={p6} alt="pic"/></figure>
        <figure><img src={p7} alt="pic"/></figure>
        <figure><img src={p8} alt="pic"/></figure>
        <figure><img src={p9} alt="pic"/></figure>
        <figure><img src={p10} alt="pic"/></figure>
    </div>

    <div class="Row col-md-4">
        <figure><img src={p11} alt="pic"/></figure>
        <figure><img src={p12} alt="pic"/></figure>
        <figure><img src={p13} alt="pic"/></figure>
        <figure><img src={p14} alt="pic"/></figure>
        <figure><img src={p15} alt="pic"/></figure>
    </div>


</div>

</div>

  )
}
