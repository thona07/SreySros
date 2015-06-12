/**
 *	PROJECT			:		SreySros
 *	Developer		:		Glean Team
 *	Date			:		08-June-2015
 */
 
$( function() {
	var sreysros = {
		init: function() {
			//this.toggleMenu();
		},
		
		toggleMenu: function() {
			$('.navbar-toggle').click( function() {
				$('.collapse').slideToggle( 200 );
			});
		}
	}
	
	$( document ).ready( function() {
		sreysros.init();
	});
});