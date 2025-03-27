# Trabajo Práctico N° 1 – Laboratorio de Computación 4  

## Descripción  
Este proyecto es una aplicación web desarrollada únicamente con HTML y JavaScript que permite el inicio de sesión de usuarios, la visualización de una lista de usuarios y la gestión de su estado (bloqueado o desbloqueado).  

## Funcionalidades  
1. **Formulario de Login (`login.html`)**  
   - Permite ingresar usuario y contraseña.  
   - Al presionar "Ingresar", se envía una petición a:  
     ```
     http://181.111.166.250:8081/tp/login.php
     ```
   - La respuesta será un JSON indicando si el login es válido o no:  
     ```json
     {"respuesta":"OK","mje":"Ingreso Válido. Usuario mjmartinez"}
     ```
   - Si el login es exitoso, redirige a `lista.html`.  
   - Si el login falla, muestra el mensaje de error en pantalla.  

2. **Lista de Usuarios (`lista.html`)**  
   - Realiza una petición a:  
     ```
     http://181.111.166.250:8081/tp/lista.php?action=BUSCAR
     ```
   - Muestra los usuarios en una grilla con los siguientes datos:  
     - ID  
     - Usuario  
     - Estado (Bloqueado/No Bloqueado)  
     - Apellido  
     - Nombre  
   - Permite buscar usuarios ingresando un texto en una caja de búsqueda.  

3. **Gestión de Usuarios**  
   - Cada usuario tiene opciones para **bloquear** o **desbloquear**.  
   - Al presionar estos botones, se envía una petición con el ID del usuario:  
     - Para bloquear:  
       ```
       http://181.111.166.250:8081/tp/lista.php?action=BLOQUEAR&idUser=XXXX&estado=Y
       ```
     - Para desbloquear:  
       ```
       http://181.111.166.250:8081/tp/lista.php?action=BLOQUEAR&idUser=XXXX&estado=N
       ```

4. **Estilos (CSS)**  
   - Los usuarios bloqueados se muestran con fondo **#fd9f8b**.  
   - Los usuarios no bloqueados se muestran con fondo **#cef8c6**.  

## Requisitos  
- Navegador con soporte para JavaScript.  
- Conexión a internet para realizar las peticiones a las URLs indicadas.  

## Uso  
1. Abrir `login.html` en el navegador.  
2. Ingresar usuario y contraseña y presionar "Ingresar".  
3. Si el login es válido, acceder a la lista de usuarios en `lista.html`.  
4. Buscar, bloquear o desbloquear usuarios según sea necesario.   
