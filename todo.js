/* eslint-disable no-undef */
const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }

    let td = new Date();
    let todayDate = td.toISOString().split("T")[0];
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      return all.filter((task) => Date.parse(task.dueDate)<Date.parse(todayDate));
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      return all.filter((task) => task.dueDate === todayDate);
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      return all.filter((task) => Date.parse(task.dueDate)>Date.parse(todayDate));
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      let output = list.map((task) => {
        let taskSymbol = task.completed ? 'x' : ' ';
        if (task.dueDate===todayDate) {
            return `[${taskSymbol}] ${task.title}`;
        } else {
            return `[${taskSymbol}] ${task.title} ${task.dueDate}`;
        }
      });
      return output.join("\n");
      // return OUTPUT_STRING
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  module.exports=todoList;