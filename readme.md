GOBIERNO DE LA CIUDAD DE BUENOS AIRES\
Ministerio de Educación\
_Dirección de Formación Técnico Superior_\
Instituto de Formación Técnico Superior N° 18\
_Mansilla 3643 - C1425BBW - Capital Federal_

---

### Testing en CYPRESS
---


Si bien cypress es una herramienta de testing para web.\
Tiene muchas opciones para el tipo de pruebas :
- End to end (E2E) : Este tipo de prueba es una de los conceptos de las cuales fue originalmente diseñado para poder correr en cualquier navegador, principalmente se realiza pensando en la interfaz del usuario.
- Componentes: Este tipo de pruebas son consideradas desde el punto de la creación de las props de cada tipo de framework

### PRUEBAS QUE SE VAN A REALIZAR PARA ESTE MODELO
---


* Prueba de Integración:
Para este caso se propone la integración de dos componentes necesarios para este login y creación de usuario, las cuales se utilizaran dos pruebas unitarias, una de creación de usuarios como primera etapa y la segunda etapa de login
* Prueba Unitaria de Creación de Usuario
* Prueba utilizando Stub, el cual la podemos determinar desde la carpeta fixture.
* Prueba Unitaria de Login
	Prueba que utiliza stub de usuario, creado en la carpeta de stubs, bajo un 
	Archivo del tipo json (usuarios.json)
* Smoke Testing / Prueba E2E
Para esta prueba se ha determinado como prueba de que todos los sectores que se ha diseñado por medio del equipo de UX/UI (el cual estamos presuponiendo de que lo realiza otra área, en este caso es un login y sign up básico, por lo cual nos manejamos para la estructura básica de header, main y sectors, estos son los elementos de la página )
* TDD
Para este tipo de prueba se tiene en consideración que el proyecto se requiere determinar cómo debería ser el módulo debería ser el login, y cómo debería funcionar, como objeto básico usamos la técnica de TDD, para poder tener una interfaz fácil de entender para el usuario final.


# PRIMEROS PASOS
---

Instalar los modulos necesarios : 
- npm i 

correr el siguiente comando para correr el software en cuestion junto a cypress :
- npm run all





