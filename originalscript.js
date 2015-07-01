
$(function() {
  
  //adding the id of new_to_do to a variable of new item
  var $newItemForm = $("#new_to_do"); 
  var $toDoList = $("#to_do_list");
  var listArray = [];
  // this is an exmaple of what it would do in the actual interface:
  var liArray = [{item_title: "itemname1", description: "this is description1"}, {item_title: "itemname2", description: "this is description2"}, 
                  {item_title: "itemname3", description: "this is description3"}];    

  //preloades the first three items & description within the above array
  $(liArray).each(function() {
    var $newLI = $('<li class="item">' + this.item_title + ": " + this.description + '</li>'); 
      $('#to_do_list').append($newLI);
  });
  
    //listens to the click for the submit
    $newItemForm.on("submit", function(event) {
      event.preventDefault();
      console.log('form submitted!'); //printing that the submit button was clicked
      console.log($('#item_name').val() ); //to do list info
      console.log($('#description').val() );
      //creates a new variable for the list
      var $newLI = $('<li class="item">' + $('#item_name').val() + ": " + $('#description').val() + '</li>');
      //adding the new item name to the list
      $('#to_do_list').append($newLI); 

      //this is for the new items that are added in
      $listItems = $("#to_do_list .item"); 
      $listItems.click(function (event) {
      event.preventDefault();
      $(this).addClass("done");
      }) 

      //pushes new items into the array
      listArray.push({item_name: $('#item_name').val(), description: $('#description').val() });
      console.log("item_name: " + $("#item_name").val() + "description: " + $("#description").val() );
      console.log(listArray);
    });

    //this is for the to do list items that are hardcoded
    var $listItems = $("#to_do_list .item"); 
      $listItems.click(function (event) {
      event.preventDefault();
      $(this).addClass("done");
      })       

});