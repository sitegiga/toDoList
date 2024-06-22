document.querySelector('#push').onclick = function() {
    let newTaskInput = document.querySelector('#newTask input');
    let tasksContainer = document.querySelector('#tasks');
  
    if (newTaskInput.value.length == 0) {
      alert("Please Enter a task");
    } else {
      // Create a new task element
      let taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span id="taskName">${newTaskInput.value}</span>
        <button class="delete"><img src="delete-back-2-line.png"></button>
      `;
  
      // Append the new task to the tasks container
      tasksContainer.appendChild(taskElement);
  
      // Add delete functionality
      taskElement.querySelector('.delete').onclick = function() {
        this.parentNode.remove();
      };
  
      // Add toggle completed functionality
      taskElement.onclick = function() {
        this.classList.toggle('completed');
      };
  
      // Clear the input field
      newTaskInput.value = "";
    }
  }
  
// ****************************** myWrittenCode *****************************************

  /*document.querySelector('#push'). onclick = function()
{
        if(document.querySelector('#newTask input').value.length == 0 )
            {
                alert("Please Enter a task")
            }
        else
            {
                document.querySelector('#tasks').innerHTML +=
                
                <div class = "task">
                      <span id = "taskName">
                      ${document.querySelector('#newTask input').value}
                      </span>
                     <button class="delete">
                     <img src="delete-back-2-line.png" >
                     </button>
                     </div>
                ;

                let currentTask = document.getElementsByClassName("delete")
                
                for (let i = 0; i < currentTask.length; i++) {
                  currentTask[i].onclick = function(){
                    this.parentNode.remove();
                  }
                    
                }   
            
                let tasks = document.querySelectorAll('.task')
                for (let i = 0 ; i < tasks.length ; i++)
                    {
                        tasks[i].onclick = function(){
                            this.classList.toggle('completed')
                        }
                    }

                document.querySelector('#newTask input').value = "";
            }
} */