# ¿Qué es un patrón de diseño? 
 # Un patrón de diseño en JavaScript es una manera probada de resolver problemas habituales en la programación.
 # Te va a evitar buscar soluciones cuando la solución ya existe y esta comprobada.
 # Un patron de diseño es una técnica.
 # Los patrones de diseño pueden ser creacionales, de estructura o de comportamiento

# ---------------------------------------------------------------------------
# Singleton
  # Singleton es un patron creacional ya que nos esta dando una tecnica para crear objetos, podemos utilizarlo cuando nuestra persistencia de la información de un objeto nunca va a cambiar, es decir, puede ser un calendario, los días de la semana porque esto nunca va a cambiar -  solamente tiene un proposito hacer que solo exista si por si, una instancia y un objeto de una clase


  # ---------------------------------------------------------------------------
# Strategy (strategia)
  # Strategy es un patron de comportamiento, este patron nos va ayudar más que nada a poder tener comportamientos distintos en un objeto y poder agregarle nuevos comportamientos sin tener que modificar el contexto inicial - el contexto es el objeto central que va unificar las cosas - este es de los patrones de diseño más utilizados en todos los lenguajes de programación. Regularmente cuando necesitamos este patron de diseño es cuando hacemos calculos en ventas, hacemos comportamientos en el frontend que tenemos formularios que tienen ciertos comportamientos. Strategy nos va a venir a solucionar este tipo de cosas, que para cuando escalemos no tengamos problemas en andar modificando cosas que ya funcionan.