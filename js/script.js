var frasesAmor = ["&quot;El Amor es gravedad, porque hace que unas personas se sientan atraídas por otras.&quot;</br>-<u>Albert Einstan</u>-", "&quot;El amor consiste en que la persona que ama no va a amar la belleza simple; se va a concentrar en buscar lo bello de quien ama.&quot;</br>-<u>Platon</u>-", "&quot;El Amor no es bello, por que no pose la belleza, por lo mismo que la decea&quot;</br>-<u>Socrates</u>-", "&quot;Lo mejor en una sociedad inteligente es institucionalizar el amor libre&quot</br>-<u>Crates</u>-", "&quot;Qué es el amor sino la aceptación del otro, lo que sea que el otro sea&quot;.</br>-<u>Anais Nin</u>-", "&quot;El amor no consiste en mirarse el uno al otro, sino en mirar hacia afuera en la misma dirección.&quot</br>-<u>Antoine de Saint-Exupéry</u>-", "&quot;El amor se compone de una sola alma que habita en dos cuerpos.&quot;</br>-<u>Aristoteles</u>-", "&quotEl amor es aceptar que el otro sea feliz, aunque no sea contigo.&quot;</br>-<u></u>-"];

var frasesExtrañar = ["&quot;El afán de querer olvidarte es mi mayor ímpetu para recordarte.&quot</br>-<u>Gabriel García Márquez</u>-", "&quot;La mujer perdona las infidelidades, pero no las olvida. El hombre olvida las infidelidades, pero no las perdona.&quot;</br>-<u>Severo Catalin</u>-", "&quot;Siempre supe que no me iba a casar. Ni siquiera contigo. Es sólo que, a veces, se me olvida.&quot;</br>-<u></u>-", "&quot;Puedo perdonar, pero no olvidar, es sólo otro forma de decir, No puedo perdonar.&quot;</br>-<u>Henry Ward Beecher</u>-", "&quot;Cuando era joven leía casi siempre para aprender; hoy, a veces, leo para olvidar.&quot;</br>-<u>Giovanni Papini</u>-", "&quot;La vida sería imposible si todo se recordase. El secreto está en saber elegir lo que debe olvidarse.&quot;</br>-<u>Roger Martin du Gard</u>-", "&quot;No es bueno dejar heridas abiertas. El tiempo lo cura todo, pero antes es conveniente reconciliarse con lo que uno ha dejado atrás.&quot;</br>-<u>María Dueñas</u>-", "&quot;-¿Me olvidarás?</br>-Todos los días de mi vida.&quot;</br>-<u>Kevin Costner</u>-"];

var frasesAnsiedad = ["&quot;La ansiedad no agota las angustias del mañana, solo agota la fuerza del hoy.&quot;</br>-<u>Bernardo Stamateas</u>-",
    "&quot;Si sabes que nada puedes hacer contra tu destino, ¿por qué te produce ansiedad la incertidumbre del mañana? Si no eres tonto, goza del momento presente.&quot;</br>-<u>Omar Khayyam</u>-",
    "&quot;Miedo, ansiedad y neurosis: eso es lo que llevas en la maleta cuando eres un actor.&quot;</br>-<u>Laura Linney</u>-",
    "&quot;Si eres pobre, no añadas a tus miserias la ansiedad de los préstamos y las deudas.&quot;</br>-<u>Jacques Amyot</u>-",
    "&quot;Ningún asunto humano merece mucha ansiedad.&quot;</br>-<u>Platón</u>-",
    "&quot;La acción es el mejor antídoto para la ansiedad y que la información es el único remedio para combatir la incertidumbre.&quot;</br>-<u>John Verdon</u>-",
    "&quot;No hay peor tormenta que la que se arma uno solito en la cabeza.&quot;</br>-<u></u>-",
    "&quot;Deja de preocuparte por las cosas que no puedes controlar.&quot;</br>-<u></u>-"];

var frasesMotivacion = "*Inserta frase vende humo aqui*"

var frasesFilosofia = ["&quot;Si el cerebro del ser humano fuera tan sencillo que lo pudiéramos entender, entonces seríamos tan estúpidos que tampoco lo entenderíamos&quot;</br>-<u></u>-",
    "&quot;Pocas veces pensamos en lo que tenemos; pero siempre en lo que nos falta.&quot;</br>-<u>Arthur Schopenhauer</u>-",
    "&quotEl secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace &quot;</br>-<u>León Tolstói</u>-",
    "&quot;La medida del amor es amar sin medida&quot;</br>-<u>San Agustín</u>-",
    "&quot;Cuanto más conozco a la gente, más quiero a mi perro.&quot;</br>-<u>Diógenes el Cínico</u >-",
    "&quot;La vida es muy simple, pero insistimos en hacerla complicada.&quot;</br>-<u>Confucio</u>-",
    "&quot;La religión es excelente para mantener callada a la gente común&quot;</br>-<u>Frank Zappa</u>-",
    "No creo en la muerte porque uno no está presente para saber que, en efecto, ha ocurrido.&quot</br>-<u>Andy Warhol</u>-"];


var frasesMatematicas = ["&quot;Hasta el siglo XVI, las multiplicaciones se consideraban tan difíciles que sólo se enseñaban en las universidades.&quot;",
    "&quot;Robert Recorde inventó, hace más de 400 años, las dos rayas = para indicar la igualdad, porque -dos cosas no pueden ser más iguales que dos rectas paralelas-.&quot;",
    "&quot;Los números negativos empezaron a usarse en la India en el siglo VII para indicar las deudas.&quot",
    "&quot;La geometría tiene origen en el antiguo Egipto y Babilonia, ya que necesitaban realizar mediciones en la tierra para construir y desarrollar otras ciencias.&quot",
    "&quot;Si no hubiéramos sido capaces de inventar las matemáticas no tendríamos el nivel de progreso que tenemos ahora.&quot",
    "m&quot;El teorema de Pitágoras es estudiado en todo el mundo y tiene más de 370 demostraciones.&quot",
    "&quot;¿Cómo calcularías el volumen de una pizza? PI x (Z x Z) x A.&quot",
    "&quot;El escritor de Alicia en el país de las maravillas, Lewis Carroll, era matemático.&quot"];


function mostrarAmor() {
    var aleatorio = Math.floor((Math.random() * 8));
    document.getElementById("frase-txt").innerHTML = frasesAmor[aleatorio];
}
function mostrarExtrañar() {
    var aleatorio = Math.floor((Math.random() * 8));
    document.getElementById("frase-txt").innerHTML = frasesExtrañar[aleatorio];
}
function mostrarAnsiedad() {
    var aleatorio = Math.floor((Math.random() * 8));
    document.getElementById("frase-txt").innerHTML = frasesAnsiedad[aleatorio];
}
function mostrarMotivacion() {
    document.getElementById("frase-txt").innerHTML = frasesMotivacion;
}
function mostrarFilosofia() {
    var aleatorio = Math.floor((Math.random() * 8));
    document.getElementById("frase-txt").innerHTML = frasesFilosofia[aleatorio];
}
function mostrarMatematicas() {
    var aleatorio = Math.floor((Math.random() * 8));
    document.getElementById("frase-txt").innerHTML = frasesMatematicas[aleatorio];
}





/*function iniciar() {

var frases = ["frase0","frase1","frase2","frase3","frase4","frase5",
"frase6","frase7"];

var aleatorio = Math.floor((Math.random() * 8));
console.log(frases[aleatorio]);

document.getElementById("frase-txt").innerHTML = frases[aleatorio];
}
window.addEventListener("load", iniciar);*/