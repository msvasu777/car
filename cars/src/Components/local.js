import React from 'react';
//import logo from './logo.svg';
//import './Journytable.css';

export default function Journytable() {
  return (
    <div>
      <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">I want a cab from</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Bangalore"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">I want a cab for</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" id="inputPassword3" placeholder="2 hours"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Pickup Date</label>
    <div class="col-sm-6">
      <input type="date" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Pickup Time</label>
    <div class="col-sm-6">
      <input type="date" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  
  <div class="form-group row">
    <div class="col-sm-6">
      <button type="submit" class="btn btn-primary">Make Your Booking Now</button>
    </div>
  </div>
</form>
          </div>
          
  
      
    
  );
}

