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