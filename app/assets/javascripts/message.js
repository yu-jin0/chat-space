$(function(){
  
  function buildData(message){

    let content = message.content ? `${ message.content }` : "";
    let img = message.image ? `<img src= ${ message.image }>` : "";

    let html = `<div class="message">
                <div class="message__upper-info">
                <p class="message__upper-info__talker">
                ${message.user_name}
                </p>
                <p class="message__upper-info__date">
                ${message.date}
                </p>
                </div>
                <p class="message__text">
                </p>
                <p class="message__text__content">
                ${content}
                </p>
                <p>
                ${img}
                </p>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url:  url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildData(data);
      $('.messages').append(html)
      $("#new_message")[0].reset();
      $('.messages').scrollTop( $('.messages')[0].scrollHeight );
    })

    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })

    .always(function(data){
      $('.submit_btn').prop('disabled', false);
    })
  })
});