// Initialize the datepicker with the dateFormat option specified:

$( ".selector" ).datepicker({
  dateFormat: "yy-mm-dd"
});

// Get or set the dateFormat option, after initialization:

// Getter
var dateFormat = $( ".selector" ).datepicker( "option", "dateFormat" );
 
// Setter
$( ".selector" ).datepicker( "option", "dateFormat", "dd-mm-yyyy" );