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