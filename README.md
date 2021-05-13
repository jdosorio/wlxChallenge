# WlxChallenge [Prueba Tecnica]

Proyecto desarrollado en base a requerimientos tecnicos de la compañia. Construida 100% con Angular y desplegada en Vercel en el link: [WlxChallenge](https://wlx-challenge.vercel.app/)

En el proyecto se trabajaron 4 screens

Home -> Contien el diseño principal de la prueba, esta se separo en componentes por cada section, ademas que se utilizo mixins para separar componentes del css y facilitar validaciones como el tamaño de la pantalla.

Register-> En esta se trabajo con Reactive Forms que provee angular y al momento del registro se guarda lo retornado por el servicion en localstorage. Esta contiene diferentes validaciones en sus campos.

Technologies -> Esta contiene el listado de tecnologias retornado del endpoint. Permite filtrar tipo (Backend o Frontend) asi como un filtro que busca por texto sobre el campo "tech". Para los filtros se creo un pipe.

Termsconditions -> Esta es una pagina informativa que contiene un texto dummy de terminos y condiciones.

Se busco aplicar diferentes conceptos tales como:

- Uso de Observables para la validacion del usuario BehaviorSubject<boolean>
- Uso de pipes para filtrar el listado de tecnologias
- Uso de guards para limitar el acceso a las rutas protegidas asi como un autologin para cuando el usuario ya ha ingresado con anterioridad.
- Uso de localstorage para almacenar datos como el token del usuario y los favoritos
- Creacion de Mocks service para el testing del componente Technologies
- Uso de interfaces para el tipado de las respuestas y objetos
- Creacion de validaciones personalizadas como el matchpassword
- Separacion por modules del proyecto, aplicando lazy loading, modulos compartidos, etc.
- Se aplico Ngrx en el componente Technologies para la carga y control de error en el servicio. Dicha configuracion se encuentra en la carpeta Store con su respectivo (Action, Reducer, Efects
- Se hizo de decorador @Input para el componente favoritos con el fin de aplicar diferentes opciones para compartir data entre componentes.
- Se utilizo inyeccion de dependencias para el contador del navbar asi como la validacion de carga de rutas para añadir una imagen de espera en la carga.
- Se agrego un splash screen para hacer mas vistosa la presentacion inicial
- Se hizo uso de angular animations para las transiciones.

## Run Project
 - Correr `npm install`
 - Correr `ng serve` ó `npm run start` y navegar hacia `http://localhost:4200/`

## Correr Pruebas Unitarias

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Correr end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Capturas de la solucion

![alt text](https://github.com/jdosorio/wlxChallenge/blob/main/src/assets/mysite.jpeg?raw=true)

## Pruebas de Responsive

[Link](http://www.responsinator.com/?url=https%3A%2F%2Fwlx-challenge.vercel.app%2F)
