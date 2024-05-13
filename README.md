# Lista-de-Tareas-Simple

Me ayude de este video: https://www.youtube.com/watch?v=UHSipe7pSac&t=925s

Desafío

Lista de Tareas Simple

Objetivo

Desarrollar una aplicación de lista de tareas simple que permita a los usuarios añadir y eliminar tareas, usando Laravel para el backend básico y Vue.js para una interfaz interactiva.

Requisitos

1. Backend (Laravel):

- Crear un proyecto básico de Laravel.

- Establecer una ruta que devuelva una vista.

 

2. Frontend (Vue.js)

- En la vista que devuelve Laravel, integrar Vue.js.

- Crear un componente Vue que maneje un array de tareas.

- Permitir al usuario ingresar nuevas tareas a través de un formulario y añadirlas al array.

- Mostrar todas las tareas en una lista y permitir que el usuario las elimine individualmente.

Pasos detallados

 

1. Configuración de Laravel:

- Instalar Laravel y crear un nuevo proyecto.

- Definir una ruta en `web.php` que devuelva una vista llamada `welcome.blade.php`.

 

2. Integración de Vue.js

- Añadir Vue a tu proyecto usando CDN en la vista `welcome.blade.php`.

- Definir un componente Vue en el mismo archivo o en un archivo separado, según prefieran manejar el código.

 

3. Logica de Vue

- En el componente Vue, crear un modelo de datos que tenga un array para las tareas y una variable para la nueva tarea.

- Implementar métodos para añadir nuevas tareas al array y para eliminar tareas específicas del mismo.

- Usar directivas de Vue como `v-model` para el binding de datos del formulario y `v-for` para renderizar la lista de tareas.

 

 

Entrega:
El código con la respectiva documentación tiene que estar disponible en Github.
