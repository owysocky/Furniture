import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('#radio').click(function() {

    let pickedType = $("input:radio[name=type]:checked").val();

    $.get(`https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`).then(function(response)
    {
      let name = [];
      let colors = [];
      let cost = [];
      let description = [];
      let image = [];
      let type = [];
      let deliverable = [];
      let stock = [];

      for (let i = 0; i < response.body.data.length; i++){
        name.push(response.body.data[i].name);
        colors.push(response.body.data[i].colors);
        cost.push(response.body.data[i].cost);
        description.push(response.body.data[i].description);
        image.push(response.body.data[i].imageUrl);
        type.push(response.body.data[i].type);
        deliverable.push(response.body.data[i].deliverable);
        stock.push(response.body.data[i].stock);
      }


      for (let i = 0; i < name.length; i++){
        if(type[i] === pickedType){
          $('.list').prepend("<tr><td><img src='" + image[i]+ "'></td><td>" + name[i] + "</td><td>" + colors[i] + "</td><td>" + cost[i] + "</td><td>" + description[i] + "</td><td>" + type[i] + "</td><td>" + deliverable[i] + "</td><td>" + stock[i] + "</td></tr>");
        } else if (pickedType === "all") {
          $('.list').prepend("<tr><td><img src='" + image[i]+ "'></td><td>" + name[i] + "</td><td>" + colors[i] + "</td><td>" + cost[i] + "</td><td>" + description[i] + "</td><td>" + type[i] + "</td><td>" + deliverable[i] + "</td><td>" + stock[i] + "</td></tr>");
        }
      }
    }).fail(function(error)
    {
      $('.color').text(`There was an error processing your request: ${error.responseText}. Please try again.`);

    });

  });

});
