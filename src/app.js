/* En este archivo se ecuentra toda la lógica de programación de 
la aplicación.*/


/* En la siguiente línea estamos llamando al formulario que se encuentra identificado en la
linea 35 del archivo html, ejecuta la funcion submit con el metodo saveTask*/

document.getElementById('formTask').addEventListener('submit', saveTask);


function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let task = { /*Creación del objeto tarea, con dos atributos, titulo y descripción */
    title,
    description
  };

  /*La propiedad local storage nos permite guardar  pares key/values en el navegador
  aún cuando navegador se cierre-
  El planteamiento básico del siguiente if else es is existen objetos task, meterlo a un 
  array si no existen acutalizar los datos desde localStorage y volverlas  almacenar*/

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];/*Creación de un arreglo donde almacenaremos los objetos de la clase Task*/
    tasks.push(task);/*inserta los objetos Taks en el arreglo*/
    localStorage.setItem('tasks', JSON.stringify(tasks));/*almacenamos los datos como String*/
  
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));/*obtengo las tareas
    las actualizo y las vuelvo a almacenar*/
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();/*llamamos el método reset*/
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {/*recorremos el arreglp tasks*/
    if(tasks[i].title == title) {
      tasks.splice(i, 1);/*el método splice contrario de push elimina datos, le decimos que eliminie
      un dato en la posición i y que elimine solo un dato.*/
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));/*de neuvo almacenamos el arreglo para volverlo
  a mostrar y ejecuta de nuevo la función get tasks*/
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));/*Obtengo las tareas dede el localStorage
  y las inserto en esta variable tasks y las convierte en formato Json*/
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';/*lo vaciamos en el caso de que hayan datos alamacenados*/
  
  for(let i = 0; i < tasks.length; i++) {/*recorremos el arreglo con este for*/
    let title = tasks[i].title;
    let description = tasks[i].description;

    /*Diseñamos un retazo de html para insertar diagramado dentro de nuestra app html*/
    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();/*invocación de este metodo*/
