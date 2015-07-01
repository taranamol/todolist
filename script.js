
$(function() {
  
  //adding the id of new_to_do to a variable of new item
  var $newItemForm = $("#new_to_do"); 
  var $toDoList = $("#to_do_list");
  
  // this is a function
  var toDoTemplate = _.template($('#todo-template').html());

  var $toDoUl = $("#todo-list");

  var tasks = [
  {item_title: "Sprinkles", description: "cat", date: "2015-07-01"},
  {item_title: "Bagel", description: "dog", date: "2015-07-02"},
  {item_title: "Fluffy", description: "dinosaur", date: "2015-07-03"}
];

  _.each(tasks, function (task, index) {
  var $task = $(toDoTemplate(task));
  $task.attr('data-index', index);
  $toDoUl.append($task)
  });
  
    //listens to the click for the submit
    $newItemForm.on("submit", function(event) {
      event.preventDefault();

      console.log('form submitted!'); //printing that the submit button was clicked
      console.log($('#item_name').val() ); //to do list info
      console.log($('#description').val() );
      console.log($('#date').val() );
      
      //creates a new variable for the list
      var newTasks = [];
      //this adds the submitted item to the array
      newTasks.push({item_title: $('#item_name').val(), description: $('#description').val(), date: $('#date').val() });
      //print the array of newTasks to the html
        _.each(newTasks, function (task, index) {
        var $task = $(toDoTemplate(task));
        $task.attr('data-index', index);
        $toDoUl.append($task);
      });
      // var $newLI = $('<li class="item">' + $('#item_name').val() + ": " + $('#description').val() + ": " + $('#date').val() + '</li>');
      // //adding the new item name to the list
      // $('#to_do_list').append($newLI); 

    //this is for the to do list items that newly added in
    var $listItems = $("#todo-list .to_do"); 
      $listItems.click(function (event) {
      event.preventDefault();
      $(this).addClass("done");
      }) 

      //pushes new items into the array
      // listArray.push({item_name: $('#item_name').val(), description: $('#description').val(), date: $('#date').val() });

      console.log("item title: " + $("#item_name").val() + " description: " + $("#description").val() + " date: " + $("#date").val() );
      console.log(tasks);
    });

    //this is for the to do list items that are hardcoded
    var $listItems = $("#todo-list .to_do"); 
      $listItems.click(function (event) {
      event.preventDefault();
      $(this).addClass("done");
      })   

});

