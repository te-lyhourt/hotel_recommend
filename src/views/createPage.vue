<template>
<div>
  <div class="background1">
    <div class="container">
      <form>
        <h2 class="header">Create/Update Hotel Form</h2>
        <div class="row">
          <div class="col-50">
            <label for="fname"> Hotel Name</label>
            <input type="text" id="fname" name="firstname"  placeholder="Example hotel name">
            <label for="email"> Date of birth</label>
            <input type="date" id="email" class="w-100 p-3 mb-2" name="email" style="background-color: #00ADB5;">
            <label for="adr"> Website</label>
            <input type="text" id="adr" name="address"  placeholder="www.example-hotel.com">
            <label for="city"> Province</label>
            <select name="province" class="w-100 p-3 mb-2" style="background-color: #00ADB5;">
              <option value="">All</option>
              <option value="01">Banteay Meanchey</option>
              <option value="02">Battambang</option>
              <option value="03">Kampong Cham</option>
              <option value="04">Kampong Chhnang</option>
              <option value="05">Kampong Speu</option>
              <option value="06">Kampong Thom</option>
              <option value="07">Kampot</option>
              <option value="08">Kandal</option>
              <option value="09">Koh Kong</option>
              <option value="10">Kratie</option>
              <option value="11">Mondul Kiri</option>
              <option value="12">Phnom Penh</option>
              <option value="13">Preah Vihear</option>
              <option value="14">Prey Veng</option>
              <option value="15">Pursat</option>
              <option value="16">Ratanak Kiri</option>
              <option value="17">Siemreap</option>
              <option value="18">Preah Sihanouk</option>
              <option value="19">Stung Treng</option>
              <option value="20">Svay Rieng</option>
              <option value="21">Takeo</option>
              <option value="22">Oddar Meanchey</option>
              <option value="23">Kep</option>
              <option value="24">Pailin</option>
              <option value="25">Tboung Khmum</option>
            </select>

            <label> About</label>
            
            <textarea class="p-3 w-100" rows="5"  placeholder="About Hotel" style="background-color: #00ADB5;"></textarea>
            
            <div style="width: 20%;">
              <button type="button" class="btn btn-info" style="background-color: #00ADB5;">Clear</button>
            </div>

            <label for="">Room type</label>

            <div class="d-flex justify-content-between align-items-center">
              <input type="text" class="w-25" placeholder="Bed">
              <input type="text" class="w-25" placeholder="Price">
              <input type="text" class="w-25" placeholder="Optional">
              <!-- <button type="button" class="btn btn-info" style="background-color: #00ADB5;">Bed</button>&nbsp;
              <button type="button" class="btn btn-info" style="background-color: #00ADB5;">Price</button>&nbsp;
              <button type="button" class="btn btn-info" style="background-color: #00ADB5;">Optional</button>
              &nbsp; -->
              <div style="cursor:pointer"><i class="fas fa-plus" style="font-size:24px"></i> </div>
              <div style="cursor:pointer"><i class="fas fa-times" style="font-size:24px"></i></div>
            </div>
            <!-- <div style="width: 20%;">
              <button type="button" class="btn btn-info" style="background-color: #00ADB5;">Add</button>
            </div> -->
          </div>

          <div class="col-50">
            <label for="cname">Location</label>
            <input type="text" id="cname" name="cardname" style="background-color: #00ADB5;" placeholder="Siem Reap/Cambodia">
            <label for="ccnum">Contact</label>
            <input type="text" class="p-3" id="ccnum" name="cardnumber" style="background-color: #00ADB5;" placeholder="+855 11 22 33 44">
            <label for="expmonth">Email</label>
            <input type="text" class="p-3" id="expmonth" name="expmonth" style="background-color: #00ADB5;" placeholder="hotel@gmail.com">
            <br>
            <label for="cname">Star</label>
            <select name="star" class="w-100 p-3 mb-2" style="background-color: #00ADB5;">
              <option value="">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <!-- <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span> -->
            <label for="cname">Images</label>
            <input type="file" id="img" name="img" multiple>
            <br><br><br><br><br>
            <label for="">Service</label>
            <div class="service1">
              <div class="row" style="text-align: center;">
                <div class="column1">
                  <i class="fas fa-wifi"></i>
                  <label for="">Free WIFI</label>
                  <label class="container1">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>

                <div class="column1">
                  <i class="fad fa-spa"></i>
                  <label for="">Spa</label>
                  <label class="container1">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="column1">
                  <i class="fas fa-utensils-alt"></i>
                  <label for="">Food</label>
                  <label class="container1">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              
              <div class="row" style="text-align: center;">
                <div class="column1">
                  <i class="far fa-parking"></i>
                  <label for="">Parking</label>
                  <label class="container1">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="column1">
                  <i class="far fa-swimmer"></i>
                  <label for="">Pool</label>
                  <label class="container1">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="column1">
                  <i class="fal fa-dumbbell"></i>
                  <label for="">Gym</label>
                  <label class="container1">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                  </label>
                </div>
            </div>
            
          </div>
        </div>  
        </div>
        
          <div class="inline1">
            <button type="button" class="btn btn-info" style="background-color: #00ADB5;">Confirm</button>&nbsp;
            <button type="button" class="btn btn-info" style="background-color: #00ADB5;">Cancel</button>
          </div>
      </form>
    </div>

</div>

</div>

</template>

<script>

export default {
  name: 'DetailPage',
  data: () => ({
   
  })
}
</script>

<style scoped>
body {
  font-family: Arial;
  overflow-x: hidden;

}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; 
  flex-wrap: wrap;
}
.col-50 {
  -ms-flex: 50%; 
  flex: 50%;
}
.col-75 {
  -ms-flex: 75%; 
  flex: 75%;
}
.col-25,
.col-50 {
  padding: 0 16px;
  color: white;
}
input[type=text] {
  width: 100%;
  margin-bottom: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #00ADB5
}
label {
  margin-bottom: 10px;
  display: block;
}
.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}
.btn {
  background-color: #04AA6D;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}
.btn:hover {
  background-color: #45a049;
}
a {
  color: #2196F3;
}
hr {
  border: 1px solid lightgrey;
}
span.price {
  float: right;
  color: grey;
}
.header{
    text-align: center;
    color: white;
}
.background1{
    background-color: #393E46;
    padding: 20px;
}
.container{
  border-radius: 20px;
  background-color: #222831;
}

.checked {
  color: #00ADB5;
}

.inline {
  display: inline-block; 
  margin-left: 50px;
  margin-top: 20px;
}
.inline1 button{
  display: inline-block;
  width: 20%;
}
.textarea1{
  background-color: #00ADB5;
  /*color: white*/
}
.service1{
  border-radius: 20px;
  background-color: #00ADB5;
}
.column1 {
  float: left;
  width: 33.33%;
  padding: 15px;
 /* height: 300px; /* Should be removed. Only for demonstration */
}
::placeholder{
  color: white;
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}

</style>
