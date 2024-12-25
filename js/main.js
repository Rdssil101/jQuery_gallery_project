$(document).ready(function() {
   console.log(document.querySelector('header button'));
   console.log($('#cancelButton'));

   document.querySelector('header button').addEventListener('click', function() {

      $('form').slideDown();
   });

      $('#cancelButton').click(function() {
         $('form').slideUp();
      });

      $('header button').click(function() {
       alert("Expand the Form!");
   });

   $('form').on('submit', function(even) {
      even.preventDefault();

      const addressNewImage = $('#address-new-image').val();
      const newItens = $('<li style="display: none"></li>');

      $(`<img src="${addressNewImage}"/>`).appendTo(newItens);
      $(`<div class="image-link">
         <a href="${addressNewImage}" target="_blank" title="View Full Image Size!">
            View Full Image Size!
         </a>
         </div>`).appendTo(newItens);

         $(newItens).appendTo('ul');
         $(newItens).fadeIn(3000);
         $('#address-new-image').val('');
   });
});








































