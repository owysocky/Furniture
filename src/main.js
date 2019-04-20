import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Furniture} from "./furniture"

$(document).ready(function() {

    let furniture = new Furniture();
    let all = "all";
    furniture.myPromise(all);

  $('#radio').click(function() {

    let pickedType = $("input:radio[name=type]:checked").val();


    furniture.myPromise(pickedType);


  });

});
