import React from 'react'
import { Link } from 'react-router-dom'

export default function AddressForm() {

  const amount = JSON.parse(localStorage.getItem("totalAmount"))
  const firstname = JSON.parse(localStorage.getItem("firstName"))
  const lastname = JSON.parse(localStorage.getItem("lastName"))
  const email = JSON.parse(localStorage.getItem("email"))
  const gst = 0.18 * amount;
  return (
    <div className='container mt-5'>

      <div class="row">
        <div class="col-md-8 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Biling details</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input defaultValue={firstname} type="text" id="form7Example1" class="form-control" />
                      <label class="form-label" for="form7Example1">First name</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input defaultValue={lastname} type="text" id="form7Example2" class="form-control" />
                      <label class="form-label" for="form7Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form7Example4" class="form-control" />
                  <label class="form-label" for="form7Example4">Address</label>
                </div>


                <div class="form-outline mb-4">
                  <input defaultValue={email} type="email" id="form7Example5" class="form-control" />
                  <label class="form-label" for="form7Example5">Email</label>
                </div>


                <div class="form-outline mb-4">
                  <input type="number" id="form7Example6" class="form-control" />
                  <label class="form-label" for="form7Example6">Phone</label>
                </div>

                <div class="form-outline mb-4">
                  <textarea class="form-control" id="form7Example7" rows="4"></textarea>
                  <label class="form-label" for="form7Example7">Additional information</label>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>₹{amount}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Taxes(18% GST)
                  <span>₹{gst}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Delivery Mode
                  <span>Cash On Delivery</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including all taxes)</p>
                    </strong>
                  </div>
                  <span><strong>₹{amount + gst}</strong></span>
                </li>
              </ul>
             
             <Link to={"/OrderCompleted"}>
              <button type="button" class="btn btn-primary btn-block">
                Make purchase
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
