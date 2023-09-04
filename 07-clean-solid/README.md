# Principios SOLID y Clean Code

# Seccion 2: Clean Code y Deuda técnica 

# ¿Qué es la deuda técnica?
 - Es la falta de calidad en el código, que genera uma deuda que repercutirá en costos futuros.
   - Costos económicos
     . Tiempo en realizar mantenimientos.
     . Tiempo en refactorizar código.
     . Tiempo en comprender el código.
     . Tiempo adicional en la transferencia del código.
     ![Alt text]( `Esquema de deuda tácnica de Martin Fowler -> image.png` )

¿Cómo se paga la deuda técnica?
 - Con la Refactorización
   ( `Refactorización.png` - `Refactorización 2.png` )

# Clean Code 
 - "Código Limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda." -> `Clenan Code 1.png`
 - "Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito". -> `Clenan Code 2.png`
 - "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga". -> `Clenan Code 3.png`

# Nombres de variables
 - Escritas en ingles y deben de ser pronunciables, evitar en lo mayor posible que lleven guines bajos "_" con ciertas convenciones, esto ya depende del lenguaje pero en la mayoría es así.
 - `lowerCamelCase (contarElementos) ` -> ejemplo:
    - La sintaxis de contar palabras en notación lower Camel Case sería contarPalabras.
    - La sintaxis de aumentar nivel dificultad en notación lower Camel Case sería aumentarNivelDificultad.
 - ( `nombres pronunciables y expresivos.png`)

# Nombres de clases e interfaces
 - ( `nombrado de clases e interfaces.png`)

# Nombres de arreglos - arrays
- ( `nombres arreglos - arrays.png`)

# Nombres para booleanos - booleans
 - El valor inicial debe de indicar a lo que dice el nombre de la variable 
 - ( `Boolenaos - booleans.png` )

# Nombres de números 
 - ( `números.png` )

# Nombres para funciones
 - El nombre de la función debe de expresar lo que hace especificamente pero también debe de tratar de apstenerse de toda la implementación que hace la función
 - ( `nombres de funciones.png` )

# Clases
 - El nombre es lo más importante de la clase.
 - Formados por un sustantivo o frases de sustantivo.
 - No deben de ser muy genéricos.
 - Usar UpperCamelCase
 - ( `nombres de clases.png` )

# Funciones
 - Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica".
 - ( `funciones.png` )
 - No hay un limite de parametros que le podemos mandar a las funciones pero lo recomendable es que se limite a 3 o 1.
 - ( `funciones 2.png` )
 -  En caso de que necesitemos pasar muchos parametros a nuestras funciones una forma de mejorar esto es usando las interfaces.
 - ( `funciones con interfaces.png` )
# Otras recomendaciones para las funciones 
 - Simplicidad es fundamental.
 - Funciones de tamaña reducido.
 - Funciones de una sola línea sin causar complejidad.
 - Menos de 20 líenas. 
 - Evita el uso del "else".
 - Proriza el uso de la condicional ternaria.

# Principio DRY
 - "Si quieres ser un programador productivo esfuérzate en escribir código legible".
   - Simplemente es evitar tener duplicidad de código.
   - Simplifica las pruebas.
   - Ayuda a centralizar procesos.
   - Aplicar el principio DRY, usualmente lleva a refactorizar.}
   - ( `principio DRY.png` )

# --------------------------------------------------------------------------------------------------------------------------------------------

# comentarios 
 - Cuando necesites usar comentarios a tu código es proque no es lo suficientemente auto explicativo.
 - ( `Comentarios.png` ) 
 - "No comentes el código mal escrito, reescríbelo".
 - Lo que se debería de comentar dando un ejemplo, es porque resolviste algo de cierta manera, sabiendo de que existen otras posibles soluciones, eso si debe de ser explicado. 
 - ( `Comentarios 2.png` ) 

# Uniformidad en el proyecto
- ( `Uniformidad 1.png` ) 
- ( `Uniformidad 2.png` ) 

# --------------------------------------------------------------------------------------------------------------------------------------------

# Acrónimo - STUPID - es una concatenación de un montón de antipatrones
 - En pocas palabras es todo lo que no deberíamos de hacer
  # CodeSmells - STUPID
   - ( `Acrónimo STUPID.png` ) 
   # Patrón Singleton
   - ( `Patron Singleton.png` ) 
   # Acoplamiento y cohesión.
    - Lo ideal es tener bajo acoplamiento y buena cohesión.
    - Desventajas -> ( `Alto acoplamiento -  Desventajas.png` ) 
    - Solciones - Lo que nosotros queremos es diseñar componentes, clases o modulos que sean auto contenidos, auto suficientes e independientes. Con un pbjetivo y un propósito bien definido.
  # Cohesión
   - Lo ideal es tener bajo acoplamiento y buena cohesión.
     - La cohesión se refiere a lo que hace la clase ( o módulo ) pude hacer.
     - La baja cohesión  significaría que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
     - Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos  relacionados con la intención de la clase.
  # Acoplamiento
   - Se refiere al cuál relacionadas o dependientes son 2 clases o módulos entre sí.
   ( `Acoplamiento.png` ) 
  # Código no probale - código dificilmente testeable
   - Código con alto acoplamiento
   - Código con muchas dependencias no inyectadas.
   - Dependencias con el contexto global (Tipo Singleton)
   Nota: Debemos de tener en mente las pruebas desde la creación del código.
  # Code Smells adicionales
  ( `Code Smells adicionales.png` ) 
    # Duplicidad de código
     - No aplicar el principio DRY
     - La duplicidad real es la que tenemos que evitar a toda costa, y la duplicidad accidental cuando hay un cambio en una función o modulo pero solo hay que modificar un lugar.
     ( `Duplicidad de código.png` ) 

  
  # --------------------------------------------------------------------------------------------------------------------------------------------
  # Principios SOLID
    - Estos son principios y no reglas, recordemos que una regla es algo que debemos de cumplir porque si no lo hacemos algo va a salir mal, y los principios son recomendaciones para que nosostros escribamos un mejor código.
    - Los principios de SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.
    - Los pirncipios SOLID son recomendaciones que nos pueden ayudar a hacer mejor las cosas.

    # Los 5 principios S.O.L.I.D. de diseño de software son:

      `S` – Single Responsibility Principle (SRP) - Responsabilidad única.

      `O` – Open/Closed Principle (OCP) - Abierto y cerrado.

      `L` – Liskov Substitution Principle (LSP) - Sustitución de Liskov.

      `I` – Interface Segregation Principle (ISP) - Segregación de interfaz.

      `D` – Dependency Inversion Principle (DIP) - Inversión de dependencias.

    # `(SRP)` – Single Responsibility Principle -  Responsabilidad Única
      - "Nunca debería haber más de un motivo por el cual cambiar una clase o un módulo".
      - "Una clase debe de tener una única responsabilidad".
      - "Tener una única responsabilidad no es sinonimo de hacer una única cosa".
      - "El principio de responsabilidad única no se basa en crear clases con un solo método, sino en diseñar componentes que solo esten expuestos a una fuente de cambio".
      # SRP - Detectar violaciones 
       - Nombres de clases y módulos demasiado genéricos.
       - Cambios en el código suelen afectar la clase o módulo.
       - La clase involucra múltiples capas.
       - Número elevado de importaciones.
       - Cantidad elevada de métodos públicos.
       - Excesivo número de líneas de código.

    # `(OCP)` - Open/Closed Principle - Abierto y cerrado.
      - Establce que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.
      - La forma más sencilla de demostrar este principio es considerar un método que hace una cosa.  
       - ( `Ejemplo - principio de aberto y cerrado.png` )
       - ( `Ejemplo - principio de abierto y cerrado 2.png` )
      - El principio de abierto-cerrado también se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.
      # OPC - Detectar violaciones 
       - Cambios normalmente afectan nuestra clase o módulo.
       - Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)

    # `(LSP)` - Liskov Substitution Principle - Sustitución de Liskov.
     - "Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo".
     - "Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema". En otras palabras si una clase A es Extendida por una clase B deberíamos de ser capaces de sustituir cualquier instancia de A por cualquier objeto de B sin que el sistema deje de funcionar o se presenten comportamientos inesperados. 


    # `(ISP)` - Interface Segregation Principle - Segregación de interfaz.
     - "Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no usan.".

     # ISP - Detectar violaciones 
      - Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov.

   # `(DIP)` - Dependency Inversion Principle - Inversión de dependencias.
     - "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones".
     - En otras palabras: 
      - Los módulos de alto nivel no deberían depender de módulos de bajo nivel.
      - Ambos deberían depender de abstracciones.
      - Las abstracciones no deberían depender de detalles.
      - Los detalles deberían depender de abstracciones.
    - Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.
    - Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI(Interfaz de usuario), la persistencia, la comunicación con API externas, etc.
     - ( `principio de inversión de dependencias.png` )

    # Depender de abstracciones
     - ( `depender de abstracciones.png` )
     - ( `depender de abstracciones 2.png` )
    # Inyección de dependencias
     - Dependencia en programación, significa que un módulo o componente requiere de otro para poder realizar su trabajo.
     - En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias.
     - ( `Ejemplo inyección de dependencias.png` )
     - ( `Ejemplo inversión de dependencias.png` )