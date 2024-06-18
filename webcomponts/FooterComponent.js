class FooterComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      
      
	  <div class="w-100 footer-block">
		<marquee class="footerscroll" direction="left"> EVOLVE SV 2024 &nbsp &nbsp   EVOLVE SV 2024 &nbsp&nbsp EVOLVE SV 2024 &nbsp& EVOLVE SV 2024  </marquee>
	 </div>

      
      
      
      
      `;
	}
}

customElements.define('footer-component', FooterComponent);