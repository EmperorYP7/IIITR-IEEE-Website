import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import logo from './ieee.jpg'
class About extends React.Component {

render () {

return (

<div>

<hr className="hori-line"/>

<div class="jumbotron jumbotron-fluid">
  <div class="container">

    <p class="lead"><span className="about"> " Student Branch </span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      </p>
  </div>

</div>
<hr className="hori-line"/>

<section id="card-column">

 <div class="row">
 <div class="card-col col-lg-6 col-md-6">
   <div class="card rounded-lg ">
     <div class="card-header ">
   <img src={logo} className="ieee" alt="logo"/>
     </div>
     <div class="card-body">
       <p>" Student Branch  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>

     </div>
   </div>
 </div>

   <div class="card-col col-lg-6 col-md-6">
     <div class="card">
       <div class="card-header">
         <img src={logo} className="ieee" alt="logo"/>
       </div>
       <div class="card-body">
         <p>" Student Branch  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>

       </div>
     </div>
   </div>
</div>
</section>
<hr className="hori-line"/>


</div>




);



}
}

export default About;
