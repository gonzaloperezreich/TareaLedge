## App deployed link:
https://656e1a6094919204523913cb--taupe-crisp-a65a24.netlify.app

## Descripción:
El propósito inicial de este código era desarrollar un reproductor de video capaz de registrar las reproducciones que excedieran el 60% de la duración del video. Para lograrlo, se implementó Supabase como una base de datos externa para almacenar este valor.

Además, se incorporó una interfaz de registro y inicio de sesión de usuarios como una mejora adicional. Esta adición se inspiró en la idea de que, en una aplicación de este tipo, múltiples personas podrían acceder al mismo video. Registrar el número total de reproducciones del video a nivel global resultó ser una funcionalidad valiosa. En otras palabras, el contador que se muestra debajo del video es compartido por todos los usuarios, reflejando el total global de reproducciones.

## Ejecución:
Para hacer correr el código localmente debes ejecutar:

- npm install -g npm (para instalar las dependencias de manera global)
- npm run serve


## Ejecución con problemas
Personalmente tuve un par de problemas con npm así que dejo los pasos a seguir si no les compila con las instrucciones de ejecución (todo desde superUser):

- sudo npm install
- sudo npm install -g npm (para instalar las dependencias de manera global)
- export NODE_OPTIONS=--openssl-legacy-provider
- sudo npm cache clean -f 
- npm run serve   



