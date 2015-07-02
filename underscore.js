$(function() {

  //adding the id of new_to_do to a variable of new item
  var $newItemForm = $("#new_to_do"); 
  
  // this is a function
  var toDoTemplate = _.template($('#todo-template').html());

  //element to hold list of todos
  var $toDoUl = $("#todo-list");

  //model of seed data 
  var tasks = [
  {item_title: "Sprinkles", description: "cat", date: "2015-07-01"},
  {item_title: "Bagel", description: "dog", date: "2015-07-02"},
  {item_title: "Fluffy", description: "dinosaur", date: "2015-07-03"}
  ];

  //append existing seed data to html
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
      // var newTasks = [];
      // //this adds the submitted item to the array
      // newTasks.push({item_title: $('#item_name').val(), description: $('#description').val(), date: $('#date').val() });
      
      // create new todo object from form data
      var toDoName = $('#item_name').val();
      var toDoDesc = $('#description').val();
      var toDoDate = $('#date').val();
      var toDoData = {item_title: toDoName, description: toDoDesc, date: toDoDate};
      
      //store our new todo data
      tasks.push(toDoData);
      console.log(tasks);
      var index = tasks.indexOf(toDoData);

      // append our new todo to the page
      var $task = $(toDoTemplate(toDoData));
      $task.attr('data-index', index);
      $toDoUl.append($task);    

      //this is for the to do list items that newly added in
      var $listItems = $("#todo-list .to_do"); 
      $listItems.click(function (event) {
      event.preventDefault();
      $(this).addClass("done");
       }) 

      console.log("item title: " + $("#item_name").val() + " description: " + $("#description").val() + " date: " + $("#date").val() );
      console.log(tasks);
      });

    // // add class to todo on click to mark it as done
    // $toDoUl.on('click', '.to_do-text', function() {
    // $(this).toggleClass('done');
    // });

});