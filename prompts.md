# Prompts

Aquí van **todos los prompts que lanzaste** para hacer el ejercicio, en el orden en que los
lanzaste, con el modelo y la herramienta de cada uno.

Esto no es papeleo. Lo que se revisa es **cómo pediste las cosas**, no solo lo que salió: un
resultado flojo con un prompt bueno y un resultado flojo con un prompt vago necesitan feedback
distinto, y sin este archivo no se distinguen.

## Cómo rellenarlo

- Un apartado `## Prompt N` por cada prompt.
- **Pega el prompt tal cual lo lanzaste**, dentro del bloque de código, aunque ocupe diez líneas
  y aunque tenga faltas. No lo reescribas para que quede bien: el que arreglaste mentalmente
  después no es el que lanzaste.
- Incluye también los que **no funcionaron**. Suelen ser los más útiles de leer.
- `Modelo` y `Herramienta` en todos. Si cambiaste de una a otra a mitad, se nota aquí.

Borra el ejemplo de abajo cuando escribas el primero.

---

## Prompt 1

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

lee las tareas que tengo asignadas

**Qué salió:** Solo mostro la tarea finalizada del ejercicio uno

## Prompt 2

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

Revisa tareas por hacer

**Qué salió:** Encuentra la tarea con la descripción vaga del ejercicio y propone leer s2/start (README y plantilla de prompts) para ver qué entregable se espera y empezamos con FLOW-2

## Prompt 3

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

git checkout -b alcance-fjm  

**Qué salió:** I've created the branch alcance-fjm from s2/start and switched to it.


## Prompt 4

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

resume el modelo de datos y que capabilities hay ya construidas  

 **Qué salió:** Lo que falta para FLOW-2

  Todo lo que pide la idea del producto ("saber en qué está trabajando cada uno, en tiempo real"):
  - equipos o espacios de trabajo y quién pertenece a cada uno;
  - tareas, con responsable y estado;
  - algún mecanismo de "estoy trabajando en X";
  - actualizaciones en tiempo real, como WebSockets o SSE.
                                                                                                                                                            Nada de esto existe en el modelo ni en la API.   

 ## Prompt 5

**Modelo:** Opus 5.5
**Herramienta:** Claude Code
                                                                                                                            haz las preguntas que necesites sobre el problema en una sola ronda, no bajes al modelo de datos ni los endpoints

**Qué salió:**

Usuarios y contexto
  1. ¿Quién lo usa? ¿Equipos de desarrollo, cualquier equipo remoto, agencias…? ¿De qué tamaño suelen ser (3, 10, 50 personas)?
  2. ¿Una persona puede estar en varios equipos a la vez?
  3. ¿Los equipos están repartidos en distintas zonas horarias? Esto cambia lo que significa "en tiempo real" frente a "asíncrono".
  4. ¿Hay alguien con un rol distinto (líder o manager que solo mira) o todos los miembros son iguales?

  El dolor
  5. ¿Qué pregunta concreta debería responder FlowSync en 5 segundos? Por ejemplo, "¿qué hace X ahora?", "¿quién está bloqueado?" o "¿qué se hizo ayer?".
  6. ¿Qué reunión quieres eliminar exactamente: la daily, la semanal, las de "¿cómo vas con esto?"…?
  7. ¿Qué tiene Jira que sea "rollo" y no quieras repetir? Por ejemplo, demasiados campos, flujos rígidos, que sea lento o que haya que actualizarlo a
  mano.

  Qué significa "en qué está trabajando"
  8. ¿Hablamos de tareas con un ciclo de vida (pendiente → en curso → hecha), de un estado libre tipo "ahora estoy con…", o de las dos cosas?
  9. ¿Una persona puede estar con varias cosas a la vez, o solo con una "actual"?
  10. ¿Es importante señalar los bloqueos ("estoy esperando a Y")?
  11. ¿Interesa el historial (qué hizo cada uno ayer o esta semana) o solo el momento actual?

  Tiempo real
  12. ¿"En tiempo real" significa que la pantalla se actualiza sola cuando alguien cambia algo, que llegan notificaciones, o ambas cosas?
  13. ¿Hace falta mostrar presencia (conectado, ausente, desconectado)?

  Relación con otras herramientas
  14. ¿FlowSync sustituye a Jira o convive con él? ¿Tiene que integrarse con algo (Jira, GitHub, Slack) o en el MVP funciona solo?

  Privacidad y equipos
  15. ¿Todos los miembros de un equipo ven todo lo que hacen los demás? ¿Hay algo privado?
  16. ¿Cómo entra alguien en un equipo: con una invitación por email, con un enlace o porque lo añade un administrador?

  Alcance y éxito
  17. Si el MVP solo pudiera hacer una cosa bien, ¿cuál sería?
  18. ¿Qué queda explícitamente fuera del MVP? Por ejemplo, comentarios, adjuntos, fechas límite o estimaciones.
  19. ¿Cómo sabrías que funciona? Por ejemplo, que se dejan de hacer dailies, que la gente lo abre cada día o que se actualiza el estado sin que nadie lo
  pida.
  20. ¿Tiene que funcionar en el móvil o basta con el escritorio?


 ## Prompt 6

**Modelo:** Opus 5.5
**Herramienta:** Claude Code
                                                                                                                            LA información que tengo es 
                                                                                                                           - Qué duele hoy: la daily de sincronización y el "¿en qué estás?" constante por Slack/chat. Nadie ve el estado del equipo sin interrumpir a alguien.
- Quién cobra el valor: los pares, no un lead. No hay reporte hacia arriba y a un manager le daría igual. Duele a los dos devs que descubren tarde que iban a lo mismo, y al que interrumpe a otro para preguntar.
- Episodio concreto: dos personas del equipo tocaron el mismo módulo la misma semana porque una empezó sin que la otra lo supiera. Dos días perdidos.
- Qué reunión desaparece (respuesta honesta, no la vendas de más): la daily NO desaparece entera. Desaparece la ronda de "¿en qué estás?", que hoy se come la mitad de los 15 minutos. La parte de bloqueos sigue, y este MVP no la resuelve.
- Usuarios / equipo: equipos remotos pequeños, 3–10 personas. Roles planos: en el MVP todos ven y editan lo mismo, sin jerarquía de permisos.
- Primer usuario concreto: equipo de 6 personas de producto SaaS, en 3 husos horarios, que hoy usa un gestor de tareas pesado y una daily de 15 minutos por videollamada. Es un CASO DE ESTUDIO, no un cliente real.
- Fronteras: un espacio único compartido, sin entidad "equipo". Varios equipos separados, o gente en más de uno, queda FUERA del MVP: se anota como supuesto en el PRD, no se construye.
- "Tiempo real" = ver los cambios de estado de las tareas sin refrescar ni preguntar. NO es chat, NO es videollamada, NO es colaboración simultánea sobre el mismo documento.
- Es frescura, no presencia: el estado es de la TAREA, no de la persona. Nada de "quién está conectado ahora" ni indicadores de actividad; eso es vigilancia y lo rechazamos a propósito.
- Forma de la señal: resumen que espera, no aviso que interrumpe. El caso es "llego por la mañana o vuelvo de una reunión y veo qué se ha movido". Sin notificaciones push.
- Qué decisión cambia: no empezar algo que otra persona ya está tocando, y elegir lo siguiente sabiendo qué está libre. Si la única respuesta fuera "sentirse informado", el tiempo real no valdría lo que cuesta.
- De dónde sale el estado: lo teclea la persona que hace la tarea, en segundos. Derivarlo de señales externas (Git/PRs, CI, calendario) está FUERA del MVP: es otro producto, con integraciones y OAuth de terceros.
- Por qué se sostiene: no porque sea más agradable, sino porque son dos clics sobre una lista ya abierta, sin campos obligatorios, sin decidir sprint ni estimación. Y quien lo escribe cobra en el momento: esa misma lista es su cola de trabajo, la mira para decidir qué coge, y de paso deja de recibir interrupciones preguntándole cómo va. Si el beneficio fuera solo para los demás, no lo escribiría.
- Si la información se queda vieja: el producto pierde el sentido, y lo asumo. Es el riesgo #1 a validar, no un detalle. La mitigación es que actualizar cueste dos clics, no obligar a nadie.
- Es donde se hace el trabajo, no donde se cuenta: sustituye al gestor de tareas, no convive con él. FlowSync crea las tareas, no lee las de otro sitio. Convivir exigiría doble actualización, que es como muere esta categoría.
- Renuncia explícita a sprints, estimaciones, épicas, backlog priorizado e informes. Un equipo que necesite eso no es nuestro usuario.
- "Menos rollo que Jira" = crear una tarea y cambiarle el estado en segundos, sin flujos de configuración ni campos obligatorios. Lo mínimo para saber quién está en qué.
- Qué necesita una tarea en el MVP: título, responsable, estado y fecha de vencimiento. La fecha, para ver de un vistazo qué se ha pasado de plazo.
- Cómo se consume la lista: filtrando por estado, para centrarse en lo pendiente.
- Éxito para el usuario: dejar de hacer la ronda de "¿en qué estás?" de la daily porque el estado del equipo se ve de un vistazo.
- Criterio a una semana de uso real: que el equipo cancele esa ronda y nadie pida que vuelva. Si la siguen haciendo igual, no funcionó.
- Cuánto construir: una vertical fina y usable de punta a punta, no el andamiaje amplio de un producto. Prefiero una capability terminada a tres a medias.

**Qué salió:**
● Con la ficha quedan resueltas casi todas las preguntas. Te resumo lo que cubre, lo que no cubre con el supuesto que propongo, y tres choques internos de la
  ficha que conviene decidir antes de escribir el alcance.

  Lo que la ficha deja resuelto

  - Usuarios (1–4): equipos remotos de 3 a 10 personas, roles planos y 3 husos horarios. Hay un único espacio compartido; los equipos separados y las personas en
    varios equipos quedan fuera.
  - El dolor (5–7): la ronda de "¿en qué estás?" y el trabajo duplicado. La parte de bloqueos de la daily sigue y el MVP no la resuelve.
  - La señal (8, 12, 13): el estado es de la tarea, no de la persona. Se ve sin refrescar y no hay presencia ni notificaciones push.
  - Herramientas (14): FlowSync sustituye al gestor de tareas, no convive con él, y no tiene integraciones.
  - Visibilidad (15): todo el mundo ve y edita todo.
  - Éxito (17, 19): que el equipo cancele la ronda de "¿en qué estás?" y nadie pida que vuelva.

  Lo que no cubre: supuestos que propongo

  Te propongo estos supuestos. Confírmalos o cámbialos:

  ┌─────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │  #  │                      Hueco                       │                                               Supuesto                                               │
  ├─────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 9   │ ¿Una persona puede tener varias tareas en curso? │ Sí, sin límite. El producto no impone una sola "tarea actual".                                       │
  ├─────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 11  │ ¿Hay historial?                                  │ No. Solo cuenta el estado actual, más lo que haya cambiado desde la última visita (ver el choque 2). │
  ├─────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 16  │ ¿Cómo entra alguien al espacio?                  │ Quien se registra entra en el único espacio. No hay invitaciones; el registro ya existe.             │
  ├─────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ 20  │ ¿Funciona en móvil?                              │ No hay que diseñar para móvil, aunque basta con que no se rompa en una pantalla estrecha.            │
  ├─────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ —   │ ¿Qué estados hay?                                │ Tres fijos: pendiente, en curso y hecha. No se pueden configurar.                                    │
  ├─────┼──────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ —   │ Bloqueos (10)                                    │ Fuera. No hay estado "bloqueada": la ficha dice que esa parte de la daily sigue.                     │
  └─────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┘

  Tres choques dentro de la ficha

  1. "Sin campos obligatorios" frente a "una tarea lleva título, responsable, estado y fecha". Propongo que el título sea lo único obligatorio. El responsable sería
     opcional, porque una tarea sin responsable es justo la que está "libre" para coger. La fecha también sería opcional. Si el responsable fuera obligatorio, la ficha
     no podría prometer "elegir lo siguiente sabiendo qué está libre".
  2. "Tiempo real, sin refrescar" frente a "resumen que espera: llego por la mañana y veo qué se ha movido". Son dos funcionalidades distintas:
     - la lista se actualiza sola mientras la tienes abierta;
     - al volver, ves qué cambió desde tu última visita.

     Con 3 husos horarios, el segundo caso (llegar por la mañana) es el que más se repite, y el primero no lo resuelve. Hay que elegir una de las dos o decir
     explícitamente que van las dos.
  3. La fecha de vencimiento no ayuda a validar ninguna de las dos hipótesis centrales: que la gente mantiene el estado actualizado y que se evita el trabajo
     duplicado. Es la primera candidata a recortar, aunque la ficha la pida.

  La lección también da por decidido que quedan fuera las notificaciones push, la integración con Slack, los roles y permisos avanzados, la analítica e informes, y los
  comentarios en tareas. No venía en lo que pegaste, así que lo incluyo en el NO-alcance salvo que me digas lo contrario.

  Para tu registro de prompts: hice 20 preguntas y la lección pedía cinco. Te lo dejo dicho por si lo anotas como hallazgo.

  Cuando decidas los tres choques, o me digas que los decida yo y los marque como supuestos, propongo el alcance en los cinco bloques en docs/prd/alcance-mvp-fjm.md.

## Prompt 7

**Modelo:** Opus 5.5
**Herramienta:** Claude Code
                                                                                                                            - Fuera del MVP: notificaciones push, integración con Slack, roles/permisos avanzados, analítica/reporting, comentarios en tareas.

**Qué salió:** por error cerre la sesión de claude y volvi a abrirla y continue desde ahi


## Prompt 8

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

propon mejoras haciendo recortes de manera agresiva

**Qué salió:**
Recortes al alcance

1. Fusionar "coger o asignar" (2) con "cambiar estado" (3). Poner una tarea en curso te la asigna, y devolverla a pendiente la deja libre otra vez.
   - Asignar a otra persona es un gesto de manager, y aquí los roles son planos.
   - Para H2 basta con que quede claro quién la ha cogido.
   - La acción se queda en un clic en vez de dos, así que también ayuda a H1.
2. Quitar el filtro por estado (6). Las tareas hechas desaparecen de la lista, y queda solo lo pendiente y lo que está en curso.
   - Con 6 personas no hace falta filtrar: lo único que molesta son las hechas.
   - De paso deja de importar que no se puedan borrar tareas, porque una creada por error se marca como hecha y se va.
3. Cambiar "se actualiza sola" (5) por "está al día cada vez que vuelves a ella". La lista se recarga al abrir la pestaña o volver a ella, sin pulsar nada. Nada de cambios en directo mientras la miras.
   - Con 3 husos horarios, el caso que más se repite es "llego por la mañana y miro". Ahí lo que hace falta es el estado actual al decidir qué coger, no verlo moverse mientras miras.
   - Que dos personas cojan la misma tarea en el mismo minuto, en un equipo de 6, es poco probable.
   - Es el recorte que más ahorra y también el más discutible: la ficha promete "tiempo real". Es un buen candidato para tu línea 3 de la parte B, que pide justo dos cosas que se contradicen.

Con los tres recortes, el alcance queda así:

1. Crear una tarea escribiendo solo el título.
2. Ponerla en curso, lo que te la asigna, y marcarla como hecha. Volver a pendiente la deja libre.
3. Una única lista de lo pendiente y lo que está en curso, con quién está en cada tarea, al día cada vez que vuelves a ella.

Recortes al NO-alcance (para afinarlo, no para alargarlo)

- "Invitaciones" pasa a ser parte de "varios espacios".
- "Estados configurables" pasa a ser parte de "sprints, estimaciones…", que es el mismo rollo de Jira.
- "Diseño para móvil" sale del NO-alcance porque ya está en los supuestos.
- Si aceptas el recorte 3, hay que añadir "Actualización en directo de la lista", con el argumento de arriba.

Si me dices cuáles aceptas, los aplico al fichero. Para la parte B, la cifra de dentro del alcance tras tu recorte sale de lo que elijas.

## Prompt 9

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

acepto todos y cuentame de manera simplificada lo que tenemos hasta ahora y que podemos hacer

**Qué salió:**
Claude comenta el estado de los archivos y propone subir ya una PR
## Prompt 10

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

git add docs/prd prompts.md
git commit -m "alcance: MVP + prompts"
git push -u origin alcance-<tus-iniciales>

**Qué salió:** Hizo el commit y subió la rama `alcance-fjm` a mi fork. No abrió el PR sin preguntar, porque va contra el repo del curso, y avisó de que el remoto `upstream` es `LIDR-academy-temp` y no `LIDR-academy`, como dice el README.

## Prompt 11

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

hazlo contra el repositorio del curso

**Qué salió:** Comprobó que mi fork cuelga de `LIDR-academy-temp` (`LIDR-academy` no es accesible) y abrió el PR #20 contra `s2/start`. Después pasó el revisor adversarial, que dijo que todavía no se puede dar por entregado: faltan las líneas 2 y 3 de la parte B, `prompts.md` no permite comprobar el "6 → 3" y no se ve un recorte propio. También señaló incoherencias: un clic o dos, qué pasa al coger una tarea ajena, que "hecha" no se pueda deshacer y choques con la ficha sin declarar.

## Prompt 12

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

modifica prompts.md añadiendo lo que pongamos a partir de ahora.

**Qué salió:** Añadió este prompt y los dos anteriores, que faltaban, y a partir de aquí va registrando cada prompt nuevo.

## Prompt 13

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

punto el modelo usado en todos los promts es opus 5.5 corrigelo.vuelve a comentarme las incoherencias y lo más critico

**Qué salió:** Cambió el modelo a Opus 5.5 en todos los prompts y volvió a resumir lo crítico y las incoherencias del alcance que encontró el revisor adversarial.

## Prompt 14

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

he modificado manualmente el promt para añdir lo que faltaba, por otro lado vamos a recuperar y revisar los recortes

**Qué salió:** Recuperó los tres recortes con lo que gana y lo que pierde cada uno, y me preguntó cuál mantener.

## Prompt 15

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

(respuestas a las preguntas sobre los recortes) Recorte 1: Mantener + regla · Recorte 2: Mantener tal cual · Recorte 3: Mantener + definir

**Qué salió:** Aplicó las tres decisiones al alcance:
- una tarea en curso de otra persona no se puede coger;
- el filtro y el deshacer quedan fuera, y el choque con la ficha se declara en §2;
- "volver" queda definido como abrir la lista o volver a su pestaña, y la renuncia al "sin refrescar" se declara.

Además unificó H1 en "un clic".

## Prompt 16

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

no reescribas las exclusiones sin hipotesis. ampliame los 3 recortes

**Qué salió:** No tocó las exclusiones. Amplió cada recorte con qué era antes, qué queda, la hipótesis que lo sostiene, lo que se pierde, la contradicción de fondo y qué tendría que pasar para revertirlo.

## Prompt 17

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

aplica los cambios y haz commit

**Qué salió:** Añadió al NO-alcance, en las entradas de los tres recortes, lo que se pierde con cada uno y qué tendría que pasar para que entrara, e hizo el commit.

## Prompt 18

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

si dejalo vacio porque me quede sin tiempo. has push

**Qué salió:** Dejó vacías las líneas 2 y 3 de la parte B, porque se me acabó el tiempo, e hizo el push para actualizar el PR #20.
