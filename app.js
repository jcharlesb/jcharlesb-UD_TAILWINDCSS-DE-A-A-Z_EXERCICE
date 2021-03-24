const responsiveMenu = document.querySelector( '.toggle-menu' );
const toggleIcon = document.querySelector( '.toggle-icon' );
const link1 = document.querySelector( '.link1' );
const link2 = document.querySelector( '.link2' );
const link3 = document.querySelector( '.link3' );
const link4 = document.querySelector( '.link4' );

toggleIcon.addEventListener( 'click', () => {
	responsiveMenu.classList.toggle( 'hidden' );
} );

link1.addEventListener( 'click', () => {
	responsiveMenu.classList.toggle( 'hidden' );
} );

link2.addEventListener( 'click', () => {
	responsiveMenu.classList.toggle( 'hidden' );
} );

link3.addEventListener( 'click', () => {
	responsiveMenu.classList.toggle( 'hidden' );
} );

link4.addEventListener( 'click', () => {
	responsiveMenu.classList.toggle( 'hidden' );
} );
