$('.request').on('click', function(){
    $.ajax({
        method: "GET",
        url: 'file',
        success: function (data) {
          $('.data').append(JSON.parse(data).key);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
      });
})

$('#send-post').on('click', function(){
    var dataInput = $('#data').val();
    $.ajax({
        method: "POST",
        url: 'file',
        data: {key: dataInput},
        // data: { name: "Hadas", task: "queen" },
        success: function (data) {
          console.log(`Data loaded`);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
          }
      })
})