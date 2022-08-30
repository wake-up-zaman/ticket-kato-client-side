import React from 'react';
import bag from "../../assests/checked.png"
import "./BagInfo.css";

const BagInfo = () => {
    return (
        <div className='t'>
            <h2 className='h1 text-center mt-16 pt-5'>Bagging Info</h2>
            <div className='container bg-slate-100'>
                <h2 className='font-weight-bold h2'>Checked Baggage</h2>
                <h3>When flying with Biman you can enjoy the following checked baggage allowances:</h3>
                <h4>Weight Concept</h4>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Business Class</th>
      <th scope="col">Economy Class</th>
      <th scope="col">Infants</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>30kg</td>
      <td>20kg</td>
      <td>10kg</td>
    </tr>
  </tbody>
</table>
   <p>Note: Please see note under serial no.- 1.7 in detail baggage policy for restrictive items not allowed in cabin baggage and checked-in baggage.</p>
   <div>
   <div className='row p-10 pe-10'>
   <div className='col-md-6 text-justify'>
        <ul className='p-1'><strong>Business Class</strong></ul> <hr/>
        <li>Free Baggage Allowance: 30 Kgs limited within maximum two pieces.</li>
        <li>The sum of the 3 dimensions (length + breadth + height) must not exceed 62 inches or 158 centimeters for each piece.</li>
        <li>The maximum weight permissible for a single piece of baggage is 30 Kgs.</li>
        <ul className='p-1'><strong>Economy Class</strong></ul> <hr/>
        <li>Free Baggage Allowance: 20 Kgs limited within maximum two pieces.</li>
        <li>The sum of the 3 dimensions (length + breadth + height) of both must not exceed 62 inches or 158 centimeters.</li>
        <li>The weight of each bag must not exceed 20 Kgs.</li>
        <ul className='p-1'><strong>Infants in all Classes</strong></ul><hr/>
        <li>Free Baggage Allowance: 10Kgs limited to one piece.</li>
        <li>The sum of the 3 dimensions (length + breadth + height) must not exceed 45 inches or 115 centimeters.</li>
        <li>In addition they are entitled to one collapsible stroller/carrycot/infant car seat subject to availability of space.</li>
        </div>
        <div className='col-md-6'>
        <img src={bag} alt='img'/>
        
    </div>
    <h2>passenger.

The Following Items Constitute One Piece Of Cabin Baggage:</h2>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Trolley Bag</th>
      <th scope="col">Garment Bag</th>
      <th scope="col">Briefcase</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>55cm x 36cm x</td>
      <td>Dimensions not exceeding 115cm, thickness not</td>
      <td>50cm x 36cm x</td>
    </tr>
    <tr>
      <td>20cm</td>
      <td>exceeding 20cm when folded</td>
      <td>20 cm</td>
    </tr>
  </tbody>
</table>
<h2>Articles Allowed On-Board</h2>
<ul>You may carry on-board the articles listed below free of charge, over and above your free baggage allowance (subject to local country specific restrictions, if any):</ul>
<li>Walking stick, Notebook, Small camera</li>
<li>Reasonable Reading material, Infant’s food for consumption in flight / infant’s carrying basket
</li>
<li>A pair of crutches and/or other prosthetic devices for the passenger’s use provided the passenger is dependent upon them.
</li>
<li>Ladies' handbag, Overcoat, Umbrella</li>
   </div>
        
    </div>
   
   </div>
            
        </div>
    );
};

export default BagInfo;