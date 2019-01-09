$(document).ready(function() {

   $('#add').click(function() {
        
        var sEmail = $('#email').val();
        if (!validateEmail(sEmail))
       {

            alert('All fields should be filled and valid');

            e.preventDefault();
        
        }
                   
    
                   
    });

});
function validateEmail(sEmail) {

    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (filter.test(sEmail)) {

        return true;
    }
    else {
        return false;
    }
}



$(document).ready(function(){
    $("#ad").click(function(){
        $("#mydiv").hide();
        $("#myDIV1").show();
    });
//    $("#show").click(function(){
  //      $("p").show();
    });
var MyForm = {
  Init: function() {
    var self = this;
    
    // Attach events
    $('#add').click(function() {
        if (self.IsValid()) {
          self.AddRow();
            $("#myDIV1").hide();
        $("#mydiv").show();
        } else {
          alert('Please fill all the fields');
            
        }
        
    });
    
    $('#myTable').on('click', '.delete', function() {
      self.DeleteRow(this);
    });
    $('#myTable').on('click', '.edit', function() {
      self.EditRow(this);
        $("#mydiv").hide();
        $("#myDIV1").show();
    });
  },
  IsValid: function() {
    var isValid = true;
    $('input[type="text"]').each(function() {
      if ($(this).val() === '') {
        isValid = false;
      }
    });
    return isValid;
  },
  AddRow: function() {
    $('#myTable tbody').append('\
      <tr>\
        <\
        <td id="a">' +  '</td>\
        <td class="name">' + $('#name').val() + '</td>\
        <td class="company">' + $('#company').val() + '</td>\
        <td class="email">' + $('#email').val() + '</td>\
        <td class="phone">' + $('#phone').val() + '</td>\
        <td class="remarks">' + $('#remarks').val() + '</td>\
        <td class="actions">\
          <i class="fa fa-trash delete"></i>\
          <i class="fa fa-edit edit"></i>\
        </td>\
      </tr>\
    ');
    $('input[type="text"]').each(function() {
      $(this).val('');
    });
    
  },
  DeleteRow: function(deleteIcon) {
      $(deleteIcon).closest('tr').remove();
    
  },
  EditRow: function(editIcon) {
    var tr = $(editIcon).closest('tr'); //("#list tbody tr td:not(:first-child)").click(function()
    tr.find('td').nextAll().each(function(idx) {
      if (!$(this).hasClass('actions')) {
        var cellValue = $(this).html();
        $('form').find('input:eq(' + idx + ')').val(cellValue);
      }
    });
    tr.remove();
  } 
    
}
$(document).ready(function() {
  MyForm.Init();
});


    $(document).ready(function(){ 
  $('#del').click(function(){ 
    $("#myTable").find("tr:gt(0)").remove();
  });
});

$(document).ready(function(){
$("#clear").click(function(){
/* Single line Reset function executes on click of Reset Button */
$("#myDIV1")[0].reset();
});});

