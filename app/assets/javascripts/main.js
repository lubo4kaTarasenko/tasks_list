function bindTaskElem(){
  $(".task_text").click(function(){
    t = $(this)
    $textArea = t.parents("form").find(".h0")
    $textArea.toggleClass("h150")
  })


  $(".task_checkbox").click(function(){
    checkbox = $(this)
    $textField = checkbox.parents("form").find(".new_task")
    $textField.toggleClass("done_task")

  })

  $(":checkbox:checked").each(function(){
    checkbox = $(this)
    $textField = checkbox.parents("form").find(".new_task")
    $textField.toggleClass("done_task") 
  })
}

$(function(){
  bindTaskElem();
  $('#show_snake').click(function(){
    $('#snake_container').toggleClass('hidden'); 
    $('iframe').attr('src', '/snake/snake.html'); 
    $('iframe').focus();
  })
});
