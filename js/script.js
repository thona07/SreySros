/**
 *	PROJECT			:		SreySros
 *	Developer		:		Glean Team
 *	Date			:		08-June-2015
 */
 
$( function() {
	var smartgirl = {
		init: function() {
			this.toggleMenu();
		},
		
		toggleMenu: function() {
			$('nav .navbar-header').click( function() {
				$('nav ul').slideToggle( 200 );
			});
		}
	}
	
	$( document ).ready( function() {
		smartgirl.init();
	});
});