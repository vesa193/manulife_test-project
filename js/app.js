$(document).ready(function() {
	$(document).foundation();

	$('form.multi-form a.next').click(function() {
	  $('fieldset.active').removeClass('active')
	  .next('fieldset').addClass('active');
	});

	$('form.multi-form a.prev').click(function() {
	  $('fieldset.active').removeClass('active')
	  .prev('fieldset').addClass('active');
	}) 

	function cancelModal() {
		let $cancel = $('.cancel');
		let $modal = $('.modal');
		let $overlay = $('.reveal-overlay');

		$cancel.click(function(){
			$modal.css('display', 'none');
			$overlay.css('display', 'none');
		});  
	}; 	
	cancelModal();
});


