# Alcance del MVP de FlowSync

## 1. El terreno que ya existe

- Hay cuentas de usuario: registro, login, logout y consulta del propio perfil, con sesión por token.
- El frontend tiene tres pantallas: registro, login y perfil.
- No existe nada del producto en sí: ni tareas, ni estados, ni responsables, ni ningún espacio compartido, ni actualizaciones en tiempo real.
- Lo que se define abajo se apoya en las cuentas ya construidas y no las vuelve a especificar.

## 2. El interrogatorio: supuestos que la ficha no cubría

La ficha de hechos respondió casi todo. Estos huecos los decidió la IA y quedan marcados como supuestos:

- **Varias tareas en curso por persona:** se permiten, sin límite. El producto no impone una "tarea actual".
- **Entrada al espacio:** quien se registra entra en el único espacio. No hay invitaciones.
- **Estados:** tres fijos (pendiente, en curso, hecha), no configurables.
- **Móvil:** no se diseña para móvil; basta con que no se rompa en pantalla estrecha.
- **Choque "sin campos obligatorios" frente a "título, responsable, estado y fecha":** solo el título es obligatorio. El responsable es opcional, porque una tarea sin responsable es justo la que está libre para coger.
- **Choque "sin refrescar" frente a "resumen que espera":** la lista está al día cada vez que vuelves a ella, sin pulsar nada, pero no se mueve en directo mientras la miras. Al llegar por la mañana ya muestra el estado actual, y eso basta para decidir qué coger. Ni la actualización en directo ni "qué cambió desde tu última visita" entran (ver NO-alcance).
- **Responsable:** es quien pone la tarea en curso. Devolverla a pendiente la deja libre.
- **Choque con la fecha de vencimiento:** la ficha la pide, pero queda fuera (ver NO-alcance).

## 3. El alcance

### Problema

En un equipo remoto nadie ve en qué está cada uno sin interrumpir a alguien. El coste es doble: la ronda de "¿en qué estás?" se come la mitad de la daily, y dos personas pueden pasarse días trabajando en lo mismo sin saberlo.

### Usuarios

Equipos remotos pequeños, de 3 a 10 personas, con roles planos y repartidos en varios husos horarios. El caso de estudio es un equipo de producto SaaS de 6 personas en 3 husos horarios. El valor lo cobran los pares: quien descubre tarde que iba a lo mismo que otro y quien interrumpe para preguntar. No hay un manager al que reportar.

### Propuesta de valor

Una única lista compartida en la que se ve, sin preguntar ni recargar a mano, quién está con qué y qué está libre. Mantenerla cuesta dos clics, y quien la actualiza la usa como su propia cola de trabajo.

### Alcance

1. **Crear una tarea escribiendo solo el título.** Sin más campos obligatorios.
2. **Ponerla en curso, que te la asigna, y marcarla como hecha**, cada cosa en un clic. Devolverla a pendiente la deja libre.
3. **Una única lista de lo pendiente y lo que está en curso**, con quién está en cada tarea, al día cada vez que vuelves a ella. Las hechas desaparecen de la lista.

### NO-alcance

Cada exclusión lleva la hipótesis que no ayuda a validar. Las dos hipótesis del MVP son: **(H1)** la gente mantiene el estado al día si cuesta dos clics, y **(H2)** ver el estado del equipo evita empezar algo que otro ya está tocando.

- **Fecha de vencimiento.** La pide la ficha, pero "qué se ha pasado de plazo" es una pregunta de seguimiento, no de coordinación. No ayuda a H1 ni a H2, y añade un campo más que mantener, lo que va contra H1.
- **Actualización en directo de la lista.** Para decidir qué coger (H2) basta con que la lista esté al día al volver a ella. Con 3 husos horarios, el caso que se repite es "llego y miro", no "miro cómo se mueve". Que dos personas cojan la misma tarea en el mismo minuto, en un equipo de 6, es poco probable.
- **Asignar una tarea a otra persona.** Es un gesto de manager, y los roles son planos. Para H2 basta con saber quién la ha cogido.
- **Filtrar la lista.** Con 6 personas, lo único que estorba son las hechas, y esas ya desaparecen.
- **Ver qué cambió desde tu última visita.** Responde a "sentirse informado", que la ficha descarta como motivo. Para decidir qué coger (H2) basta con el estado actual.
- **Editar el título y borrar tareas.** No valida H1 ni H2. Una tarea creada por error se marca como hecha y desaparece de la lista.
- **Estado "bloqueada" y gestión de bloqueos.** La ficha dice que esa parte de la daily sigue y que el MVP no la resuelve.
- **Historial de quién hizo qué.** Es reporte hacia atrás. El valor está en el estado actual (H2), no en el pasado.
- **Presencia ("quién está conectado") e indicadores de actividad.** El estado es de la tarea, no de la persona. Es vigilancia y se rechaza a propósito.
- **Notificaciones push.** La señal es un resumen que espera, no un aviso que interrumpe. Interrumpir es justo el dolor que se quiere quitar.
- **Integración con Slack.** Convivir con otra herramienta reparte el estado en dos sitios. FlowSync es donde se hace el trabajo.
- **Estado derivado de Git, PRs, CI o calendario.** Es otro producto, con integraciones y OAuth de terceros. H1 se valida con el estado tecleado a mano.
- **Varios equipos o espacios, gente en más de uno, e invitaciones.** Con un único espacio de 3 a 10 personas se validan H1 y H2. Separar equipos solo añade fronteras, y con un solo espacio registrarse ya es entrar.
- **Roles y permisos avanzados.** Con roles planos todos ven y editan todo. Los permisos no validan ninguna hipótesis.
- **Comentarios en tareas.** Convierten la lista en un canal de conversación. La señal es el estado, no la discusión.
- **Sprints, estimaciones, épicas, backlog priorizado y estados configurables.** Es el "rollo de Jira" que el producto rechaza. Configurar flujos es el coste que el producto promete quitar, y un equipo que necesite todo esto no es nuestro usuario.
- **Analítica e informes.** No hay nadie arriba a quien reportar. Ninguna métrica de equipo valida H1 ni H2.

## Parte B: las tres líneas

1. **Los dos números:** la IA propuso 6 cosas dentro del alcance; tras el recorte quedaron 3.
2. **Tres cosas que dejé fuera, y por qué:**
   - _…_
   - _…_
   - _…_
3. **La exclusión de la que menos seguro estoy:** _…_
