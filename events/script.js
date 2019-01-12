$(document).ready(function(){

  $(".page-prev").hide();
  $(".page-decider").click(function(){
    
      var p=0;
      for(var k=1;k<=4;k++)
            {
              if($(`.page-${k}`).hasClass('active'))
              {
                break;
              }
            }
      
       for(var i=1;i<=4;i++)
       {
         if($(this).hasClass(`page-${i}`))
         {
           p=1;
           break;
         }
       }
       if(p==1)
       {
         if(i==1)
         {

         }
          
         
           if(!$(`.page-${i}`).hasClass('active'))
           {
             
            
            $(`.page-${k}`).removeClass('active');
             
            $(`.page-${i}`).addClass('active');
            if(i==1)
            {
              $(".page-prev").hide(1000);
            }
            else{
              $(".page-prev").show(1000);
            }
            if(i==4)
            {
              $(".page-next").hide(1000);
            }
            else{
              $(".page-next").show(1000);
            }
            $(".events-list").hide(1000,function(){
               $(this).remove();
               $(".header").after(new_array[i-1]);
               $(".events-list").hide();
               $(".events-list").show(1000);
            });
           }
          
        
       }
       else{
         if($(this).hasClass('page-prev'))
         {
           if(k==2)
           {
            $(".page-prev").hide(1000);
           }
           else{
            $(".page-prev").show(1000);
           }
           $(".page-next").show(1000);

              $(`.page-${k-1}`).addClass('active');
              $( `.page-${k}`).removeClass('active');
              $(".events-list").hide(1000,function(){
                $(this).remove();
                $(".header").after(new_array[k-2]);
                $(".events-list").hide();
                $(".events-list").show(1000);
             });
              
         }
         else{
           if(k==3)
           {
            $(".page-next").hide(1000);
           }
           else{
            $(".page-next").show(1000);
           }
            $(".page-prev").show(1000);
            $(`.page-${k+1}`).addClass('active');
            $(`.page-${k}`).removeClass('active');
            $(".events-list").hide(1000,function(){
              $(this).remove();
              $(".header").after(new_array[k]);
              $(".events-list").hide();
              $(".events-list").show(1000);
           });

         }
       }
       
  });
});

const html1 = `<div class="row events-list events-list-1 justify-content-center">
<div class="col-md-3 event-column">
    <div class="row event-row justify-content-center">
        <div class="col-md-10 event-column-1">
             <div class="card card-1" data-effect="zoom">


                     <figure  class="card__image">
                       <img src="./images/nat-2-large.jpg" alt="Short description">
                     </figure>
                     <div class="card__header">
                       <figure class="card__profile">
                         <img src="./images/drishya (1).jpg" alt="Short description">
                       </figure>
                     </div>
                     <div class="card__body">
                      
                       <h4 class="card__bio"> Name of the event</h4>
                     </div>
                    
             </div>
        </div>
    </div>
</div>
<div class="col-md-3 event-column">
     <div class="row event-row justify-content-center">
         <div class="col-md-10 event-column-1">
              <div class="card card-1" data-effect="zoom">


                      <figure  class="card__image">
                        <img src="./images/nat-3-large.jpg" alt="Short description">
                      </figure>
                      <div class="card__header">
                        <figure class="card__profile">
                          <img src="./images/swara_logo.jpg" alt="Short description">
                        </figure>
                      </div>
                      <div class="card__body">
                       
                        <h4 class="card__bio"> Name of the event</h4>
                      </div>
                     
              </div>
         </div>
     </div>
 </div>
 <div class="col-md-3 event-column">
         <div class="row event-row justify-content-center">
             <div class="col-md-10 event-column-1">
                  <div class="card card-1" data-effect="zoom">


                          <figure  class="card__image">
                            <img src="./images/nat-2-large.jpg" alt="Short description">
                          </figure>
                          <div class="card__header">
                            <figure class="card__profile">
                              <img src="./images/GOALS.png" alt="Short description">
                            </figure>
                          </div>
                          <div class="card__body">
                           
                            <h4 class="card__bio"> Name of the event</h4>
                          </div>
                         
                  </div>
             </div>
         </div>
     </div>
     <div class="col-md-3 event-column">
             <div class="row event-row justify-content-center">
                 <div class="col-md-10 event-column-1">
                      <div class="card card-1" data-effect="zoom">


                              <figure  class="card__image">
                                <img src="./images/nat-3-large.jpg" alt="Short description">
                              </figure>
                              <div class="card__header">
                                <figure class="card__profile">
                                  <img src="./images/Culturals.png" alt="Short description">
                                </figure>
                              </div>
                              <div class="card__body">
                               
                                <h4 class="card__bio"> Name of the event</h4>
                              </div>
                             
                      </div>
                 </div>
             </div>
         </div>

</div>`;
const html2 = `<div class="row events-list events-list-2 justify-content-center">
<div class="col-md-3 event-column">
    <div class="row event-row justify-content-center">
        <div class="col-md-10 event-column-1">
             <div class="card card-1" data-effect="zoom">


                     <figure  class="card__image">
                       <img src="./images/nat-2-large.jpg" alt="Short description">
                     </figure>
                     <div class="card__header">
                       <figure class="card__profile">
                         <img src="./images/drishya (1).jpg" alt="Short description">
                       </figure>
                     </div>
                     <div class="card__body">
                      
                       <h4 class="card__bio"> Name of the event</h4>
                     </div>
                    
             </div>
        </div>
    </div>
</div>
<div class="col-md-3 event-column">
     <div class="row event-row justify-content-center">
         <div class="col-md-10 event-column-1">
              <div class="card card-1" data-effect="zoom">


                      <figure  class="card__image">
                        <img src="./images/nat-3-large.jpg" alt="Short description">
                      </figure>
                      <div class="card__header">
                        <figure class="card__profile">
                          <img src="./images/swara_logo.jpg" alt="Short description">
                        </figure>
                      </div>
                      <div class="card__body">
                       
                        <h4 class="card__bio"> Name of the event</h4>
                      </div>
                     
              </div>
         </div>
     </div>
 </div>
 <div class="col-md-3 event-column">
         <div class="row event-row justify-content-center">
             <div class="col-md-10 event-column-1">
                  <div class="card card-1" data-effect="zoom">


                          <figure  class="card__image">
                            <img src="./images/nat-2-large.jpg" alt="Short description">
                          </figure>
                          <div class="card__header">
                            <figure class="card__profile">
                              <img src="./images/GOALS.png" alt="Short description">
                            </figure>
                          </div>
                          <div class="card__body">
                           
                            <h4 class="card__bio"> Name of the event</h4>
                          </div>
                         
                  </div>
             </div>
         </div>
     </div>
     <div class="col-md-3 event-column">
             <div class="row event-row justify-content-center">
                 <div class="col-md-10 event-column-1">
                      <div class="card card-1" data-effect="zoom">


                              <figure  class="card__image">
                                <img src="./images/nat-3-large.jpg" alt="Short description">
                              </figure>
                              <div class="card__header">
                                <figure class="card__profile">
                                  <img src="./images/Culturals.png" alt="Short description">
                                </figure>
                              </div>
                              <div class="card__body">
                               
                                <h4 class="card__bio"> Name of the event</h4>
                              </div>
                             
                      </div>
                 </div>
             </div>
         </div>

</div>`;
const html3 = `<div class="row events-list events-list-3 justify-content-center">
<div class="col-md-3 event-column">
    <div class="row event-row justify-content-center">
        <div class="col-md-10 event-column-1">
             <div class="card card-1" data-effect="zoom">


                     <figure  class="card__image">
                       <img src="./images/nat-2-large.jpg" alt="Short description">
                     </figure>
                     <div class="card__header">
                       <figure class="card__profile">
                         <img src="./images/drishya (1).jpg" alt="Short description">
                       </figure>
                     </div>
                     <div class="card__body">
                      
                       <h4 class="card__bio"> Name of the event</h4>
                     </div>
                    
             </div>
        </div>
    </div>
</div>
<div class="col-md-3 event-column">
     <div class="row event-row justify-content-center">
         <div class="col-md-10 event-column-1">
              <div class="card card-1" data-effect="zoom">


                      <figure  class="card__image">
                        <img src="./images/nat-3-large.jpg" alt="Short description">
                      </figure>
                      <div class="card__header">
                        <figure class="card__profile">
                          <img src="./images/swara_logo.jpg" alt="Short description">
                        </figure>
                      </div>
                      <div class="card__body">
                       
                        <h4 class="card__bio"> Name of the event</h4>
                      </div>
                     
              </div>
         </div>
     </div>
 </div>
 <div class="col-md-3 event-column">
         <div class="row event-row justify-content-center">
             <div class="col-md-10 event-column-1">
                  <div class="card card-1" data-effect="zoom">


                          <figure  class="card__image">
                            <img src="./images/nat-2-large.jpg" alt="Short description">
                          </figure>
                          <div class="card__header">
                            <figure class="card__profile">
                              <img src="./images/GOALS.png" alt="Short description">
                            </figure>
                          </div>
                          <div class="card__body">
                           
                            <h4 class="card__bio"> Name of the event</h4>
                          </div>
                         
                  </div>
             </div>
         </div>
     </div>
     <div class="col-md-3 event-column">
             <div class="row event-row justify-content-center">
                 <div class="col-md-10 event-column-1">
                      <div class="card card-1" data-effect="zoom">


                              <figure  class="card__image">
                                <img src="./images/nat-3-large.jpg" alt="Short description">
                              </figure>
                              <div class="card__header">
                                <figure class="card__profile">
                                  <img src="./images/Culturals.png" alt="Short description">
                                </figure>
                              </div>
                              <div class="card__body">
                               
                                <h4 class="card__bio"> Name of the event</h4>
                              </div>
                             
                      </div>
                 </div>
             </div>
         </div>

</div>`;
const html4 = `<div class="row events-list events-list-4 justify-content-center">
<div class="col-md-3 event-column">
    <div class="row event-row justify-content-center">
        <div class="col-md-10 event-column-1">
             <div class="card card-1" data-effect="zoom">


                     <figure  class="card__image">
                       <img src="./images/nat-2-large.jpg" alt="Short description">
                     </figure>
                     <div class="card__header">
                       <figure class="card__profile">
                         <img src="./images/drishya (1).jpg" alt="Short description">
                       </figure>
                     </div>
                     <div class="card__body">
                      
                       <h4 class="card__bio"> Name of the event</h4>
                     </div>
                    
             </div>
        </div>
    </div>
</div>
<div class="col-md-3 event-column">
     <div class="row event-row justify-content-center">
         <div class="col-md-10 event-column-1">
              <div class="card card-1" data-effect="zoom">


                      <figure  class="card__image">
                        <img src="./images/nat-3-large.jpg" alt="Short description">
                      </figure>
                      <div class="card__header">
                        <figure class="card__profile">
                          <img src="./images/swara_logo.jpg" alt="Short description">
                        </figure>
                      </div>
                      <div class="card__body">
                       
                        <h4 class="card__bio"> Name of the event</h4>
                      </div>
                     
              </div>
         </div>
     </div>
 </div>
 <div class="col-md-3 event-column">
         <div class="row event-row justify-content-center">
             <div class="col-md-10 event-column-1">
                  <div class="card card-1" data-effect="zoom">


                          <figure  class="card__image">
                            <img src="./images/nat-2-large.jpg" alt="Short description">
                          </figure>
                          <div class="card__header">
                            <figure class="card__profile">
                              <img src="./images/GOALS.png" alt="Short description">
                            </figure>
                          </div>
                          <div class="card__body">
                           
                            <h4 class="card__bio"> Name of the event</h4>
                          </div>
                         
                  </div>
             </div>
         </div>
     </div>


</div>`;
const new_array =[html1,html2,html3,html4];
var btns = document.querySelectorAll('.btn');
var paginationWrapper = document.querySelector('.pagination-wrapper');
var bigDotContainer = document.querySelector('.big-dot-container');
var littleDot = document.querySelector('.little-dot');

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', btnClick);
}

function btnClick() {
  if(this.classList.contains('btn--prev')) {
    paginationWrapper.classList.add('transition-prev');
  } else {
    paginationWrapper.classList.add('transition-next');  
  }
  
  var timeout = setTimeout(cleanClasses, 500);
}

function cleanClasses() {
  if(paginationWrapper.classList.contains('transition-next')) {
    paginationWrapper.classList.remove('transition-next')
  } else if(paginationWrapper.classList.contains('transition-prev')) {
    paginationWrapper.classList.remove('transition-prev')
  }
}
 
