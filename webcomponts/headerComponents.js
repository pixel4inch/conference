
$(window).scroll(function() {
   if ($(this).scrollTop() > 20) {
       $('.navbar').addClass('navbackground-color');
   } else {
       $('.navbar').removeClass('navbackground-color');
   }
});



class HeaderComponent extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
     
   <!---NAVGATION START--->
    <nav class="navbar main-nav navbar-expand-xl customeNavBar fixed-top">
    <div class="container-fluid">

       <a class="navbar-brand" href="index.html">
         <h1 class="brandName">EVOLVE SV 2024 </h1>
      </a>
      
      <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="ti-menu"></span>
       </button>

       <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
		  
		  
		  
			<li class="nav-item ">		
               <a class="nav-link" href="./tabspage.html?tabName=agenda">AGENDA</a>
            </li>
			
            <li class="nav-item ">			
               <a class="nav-link " href="./tabspage.html?tabName=innovator">INNOVATOR EXPO</a>
            </li>
			
           <li class="nav-item ">		
               <a class="nav-link " href="./tabspage.html?tabName=startup">STARTUPS</a>
            </li>
                   <li class="nav-item ">		
                     <a class="nav-link" href="./tabspage.html?tabName=investors">INVESTORS</a>
                  </li>
                  <li class="nav-item ">		
                        <a class="nav-link" href="./tabspage.html?tabName=enterprises">ENTERPRISES</a>
                     </li>
					 
					 <li class="nav-item">		
                     <a class="nav-link" href="./tabspage.html?tabName=domainexperts">DOMAIN EXPERTS</a>
                     </li>
					 
					 <li class="nav-item ">		
                     <a class="nav-link" href="./tabspage.html?tabName=ecoconnect">ECO-CONNECT</a>
                     </li>
                  <li class="nav-item ">		
                     <a class="nav-link" href="./tabspage.html?tabName=presskit">PRESS KIT</a>
                     </li>
					 
					 
					  <li class="nav-item ">	
                     <a class="nav-link" href="Javascript:valid(0)">CODE</a>
                     </li>
					 
					 <li class="nav-item ">	
                     <a class="nav-link" href="Javascript:valid(0)">FAQS</a>
                     </li>
		  
		  
	
        
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
             <!---li class="nav-item dropdown @@forvisitor ">
                     <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">FOR VISITORS
                     <span><i class="ti-angle-down"></i></span>
                     </a>
                     <ul class="dropdown-menu">
                        <li>			
                           <a class="dropdown-item @STARTUPS" href="Javascript:valid(0)">STARTUPS</a>
                        </li>
                        <li>			
                           <a class="dropdown-item @INVESTORS " href="Javascript:valid(0)">INVESTORS</a>
                        </li>
                        <li>			
                           <a class="dropdown-item @ATTENDEES " href="Javascript:valid(0)">ATTENDEES</a>
                        </li>
                        <li>			
                           <a class="dropdown-item @MEDIA" href="Javascript:valid(0)">MEDIA</a>
                        </li>
                        <li>			
                        <a class="dropdown-item @LIMITED PARTNERS" href="Javascript:valid(0)">LIMITED PARTNERS</a>
                     </li>
                        <li>			
                           <a class="dropdown-item @MEDIA" href="Javascript:valid(0)">VOLUNTEERS</a>
                           </li>
                        <li>			
                        <a class="dropdown-item @MEDIA" href="Javascript:valid(0)">PARTNERS</a>
                        </li>
                     </ul>
             </li>

             <li class="nav-item dropdown @@PROGRAM ">
             <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">PROGRAM
             <span><i class="ti-angle-down"></i></span>
             </a>
             <ul class="dropdown-menu">
                <li>			
                   <a class="dropdown-item @STAGEAGENDA" href="Javascript:valid(0)">STAGE AGENDA</a>
                </li>
                <li>			
                   <a class="dropdown-item @FOUNDERS DAY " href="Javascript:valid(0)">FOUNDERS DAY</a>
                </li>
                <li>			
                   <a class="dropdown-item @INVESTOR DAY " href="Javascript:valid(0)">INVESTOR DAY</a>
                </li>
                <li>			
                   <a class="dropdown-item @MEDIA DAY" href="Javascript:valid(0)">MEDIA DAY</a>
                </li>
                <li>			
                <a class="dropdown-item @SLUSH OFFICIAL SIDE EVENTS" href="Javascript:valid(0)">SLUSH OFFICIAL SIDE EVENTS</a>
             </li>
                <li>			
                   <a class="dropdown-item @ALL SIDE EVENTS" href="Javascript:valid(0)">ALL SIDE EVENTS</a>
                   </li>
                <li>			
                <a class="dropdown-item @AFTERPARTY" href="Javascript:valid(0)">AFTERPARTY</a>
                </li>

                <li>			
                <a class="dropdown-item @ASPEAKERS" href="Javascript:valid(0)">SPEAKERS</a>
                </li>
				
				
				 <li class="nav-item @@LOGIN">
            <a class="nav-link" href="Javascript:valid(0)">LOGIN</a>
         </li>

         <li class="nav-item search">
         <a class="nav-link" href="Javascript:valid(0)"> <span><i class="ti-search"></i></span></a>
      </li>
             </ul>
     </li>


     <li class="nav-item dropdown @@INFO ">
         <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">INFO
         <span><i class="ti-angle-down"></i></span>
         </a>
         <ul class="dropdown-menu">
            <li>			
               <a class="dropdown-item @EVENTINFO" href="Javascript:valid(0)">AGENDA</a>
            </li>
            <li>			
               <a class="dropdown-item @BOOKINGMEETINGS " href="Javascript:valid(0)">INNOVATOR EXPO</a>
            </li>
            <li>			
               <a class="dropdown-item @GUIDE TO EVOLVE " href="Javascript:valid(0)">INNOVATOR EXPO</a>
            </li>
                  <li>			
                     <a class="dropdown-item @MEDIADAY" href="Javascript:valid(0)">INVESTORS</a>
                  </li>
                  <li>			
                        <a class="dropdown-item @SLUSHTAINABILITY" href="Javascript:valid(0)">ENTERPRISES</a>
                     </li>
					 
					  <li>			
                     <a class="dropdown-item @FAQ" href="Javascript:valid(0)">DOMAIN EXPERTS</a>
                     </li>
					 
					  <li>			
                     <a class="dropdown-item @FAQ" href="Javascript:valid(0)">ECO-CONNECT</a>
                     </li>
                  <li>			
                     <a class="dropdown-item @FAQ" href="Javascript:valid(0)">PRESS KIT</a>
                     </li>
					  <li>			
                     <a class="dropdown-item @FAQ" href="Javascript:valid(0)">FAQS</a>
                     </li>
               </ul>
      </li---->
            
        


        

          </ul>
         
       </div>
       </li>
      
       </ul>
      
    </div>
    </div>
 </nav>
 <!---NAVGATION END--->

      
      `;


   }

}



customElements.define('header-component', HeaderComponent);