$(function(){

  function buildData(message){

    let content = message.content ? `${ message.content }` : "";
    let img = message.image ? `<img src= ${ message.image }>` : "";

    let html = `<div class="message", data-message-id="${message.id}">
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

  let reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.message:last').data("message-id");
      $.ajax({
        url:"api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages){
        let insertHTML = '';
        messages.forEach(function(message){
          insertHTML = buildData(message);
          $('.messages').append(insertHTML);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        })
      })
      .fail(function(){
       alert('自動更新に失敗しました。');
      });
    }
  };

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

    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })

    .always(function(){
      $('.submit_btn').prop('disabled', false);
    })
  })
  
  setInterval(reloadMessages, 5000);
});