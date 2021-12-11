1. Instalar Node.js
2. Crear React App
3. Backend
   1. Crear Base de Datos de la API `php-auth-api`
   2. Crear tabla de `users` con jwt para mayor seguridad
   3. Crear script de `php` para canalizar la informacion a traves de llamadas `url`
      1. To register a user `http://localhost:8888/php-login-registration-api/register.php`
         1. 
      2. To log in a user ``http://localhost:8888/php-login-registration-api/login.php`
      3. Get User Info by giving token `http://localhost:8888/php-login-registration-api/user-info.php`






- React Front End
  - Javascript
    - Libreria Axios para conectar a APIs `urls` `http://localhost:8888/php-login-registration-api/register.php`
      - Activamos codigo de PHP con input data
        - Guardamos en Base de Datos SQL
- La info del Back End retroalimenta el Front End
  - Muestra notas para cada usuario...
  - Te posibilita introducir nuevas notas

# Api de Notas

## Campos de la Tabla `notas`

1. usuario
2. texto
3. fecha creacion
4. fecha ultima modificacion

## Funcionalidades

1. Crear.php
2. Editar.php
3. Borrar.php

## Front End

- Welcome `user`
- These are your notes:
  - ;ladjskfkl `edit` `delete`
  - fecha creacion, fecha ultima modificacion

# Base Datos

## Codigo Crear Tabla Users

```sql
CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Codigo Crear Tabla Notas

```sql
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notas` varchar(140) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_created` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```
