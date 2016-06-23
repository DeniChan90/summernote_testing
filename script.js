// $('.summernote').click(function(e){
//   $('.summernote').each(function(){
//     $(this).summernote('destroy');
//   })
//   e.stopPropagation();
//   var height = $(this).height()
//   $(this).summernote({
//     focus   : true,
//     height  : height,
//      tabsize: 2
//   });
//   $('#save').show();
// });
//
// $('#save').click(function(){
//     var makrup = $('.summernote').summernote('code');
//     $('.summernote').each(function(){
//       $(this).summernote('destroy');
//     })
//     $('#save').hide();
// })

$('.summernote').summernote({
  airMode : true,
  popover: {
    codemirror: {
     theme: 'monokai',
     htmlMode:true,
     lineNumbers: true,
     mode: 'text/html'
    },
    air: [
      ['color', ['color']],
      ['font', ['bold', 'italic','underline', 'clear']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']],
      ['insert', ['link', 'picture']],
      ['fontsize',['fontsize']]
    ]
  },

  disableDragAndDrop: true,
  dialogsFade: true
});

//if($('.popover').css('display', 'block')) console.log('123');
