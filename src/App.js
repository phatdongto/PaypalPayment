import React, { useState } from "react";
import "./App.css";
import PayPal from "./components/PayPal";

function App() {
  // const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App" style={{display:"flex", justifyContent:'center'}}>
      <main id="cart-main" style={{}}>
      <div class="site-title text-center">
        <h1 className="font-title">Team 1-Dong Phat</h1>
      </div>
      <div class="">
        <div class="grid ">
          <div class="">
            <div class="flex item justify-content-between">
              <div class="flex">
                <div class="img text-center">
                  <img src="./assets/pro1.png" alt=""/>
                </div>
                <div class="title">
                  <h3>Thầy Min</h3>
                  <span>Lecturer of HCMUS</span>
                  <div class="buttons">
                    <lable>Amount: </lable>
                    <input type="text" class="font-title" value="1"/>
                  </div>
                </div>
              </div>
              <div class="price">
                <h4 class="text-red">$1</h4>
              </div>
            </div>
          </div>

        </div>

        <div class="payment__detail" style={{marginTop : "40px"}}>
          <div class="subtotal text-center">
            <h3>Price Details</h3>
            <ul style={{marginBot:'20px'}}>
              <li class="flex justify-content-between">
                <label for="price">Total : </label>
                <span>$1</span>
              </li>
              {/* <li class="flex justify-content-between">
                <label for="price">Delivery Charges : </label>
                <span>Free</span>
              </li> */}
              <hr/>
              <li class="flex justify-content-between">
                <label for="price">Amount Payble : </label>
                <span class="text-red font-title">$1</span>
              </li>
            </ul>
            <PayPal  />
          </div>
        </div>
      </div>
    </main>


      {/* <div>hello</div> */}
    </div>
  );
}

export default App;
