$(document).ready(function() {
    $('.forgot').click(function() {
        //lấy phần tử "#reset-box"
        var resetBox = $(this).attr('href');
 
        $(resetBox).fadeIn(300);
 
        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over">');
        $('#over').fadeIn(300);
 
        return false;
 });
 
 // khi click đóng hộp thoại
 $(document).on('click', ".fa.fa-window-close-o, #over", function() {
       $('#over, .resetPassword').fadeOut(300 , function() {
           $('#over').remove();
       });
      return false;
 });
});
