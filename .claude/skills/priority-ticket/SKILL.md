---
name: priority-ticket
description: Busca en Jira, a través del MCP de Atlassian, el ticket abierto de mayor prioridad asignado al usuario, muestra su detalle y propone un plan de implementación para FlowSync. Úsalo cuando el usuario pida "el ticket prioritario", "qué hago ahora", "siguiente ticket" o invoque /priority-ticket.
argument-hint: "[clave-de-proyecto]"
---

# Ticket prioritario

Encuentra el ticket de Jira más prioritario que esté pendiente, resúmelo y propón cómo abordarlo en este repo. **No modifiques Jira** (ni asignar, ni transicionar, ni comentar) sin que el usuario lo pida explícitamente.

## 1. Conectar con Jira

- Usa las herramientas del MCP `atlassian` (cárgalas con ToolSearch si están diferidas: `select:mcp__atlassian__getAccessibleAtlassianResources,mcp__atlassian__searchJiraIssuesUsingJql,mcp__atlassian__getJiraIssue`).
- Llama a `getAccessibleAtlassianResources` una sola vez y reutiliza el `cloudId` en todas las llamadas.
- Si el MCP no está autenticado, pide al usuario que ejecute `/mcp` y se conecte a `atlassian`.

## 2. Buscar el ticket

Proyecto: el argument `$ARGUMENTS` si se pasó; si no, todos los proyectos.

Busca solo tickets **asignados al usuario actual** con `searchJiraIssuesUsingJql` (`maxResults: 10`, `fields: ["summary", "status", "priority", "issuetype", "parent"]`):

`assignee = currentUser() AND statusCategory != Done ORDER BY priority DESC, updated DESC`

Si hay proyecto, antepón `project = <CLAVE> AND` a la consulta. El primer resultado es el de mayor prioridad. No recurras a tickets sin asignar ni de otras personas.

Reglas de desempate:
- Prefiere tareas/historias/bugs frente a Epics (un Epic no se implementa directamente; si gana un Epic, busca sus hijos con `parent = <CLAVE>`).
- Con igual prioridad, prefiere el que ya está "En curso" o "En revisión" frente a "Tareas por hacer".

Si no hay ningún ticket asignado, dilo y para (puedes sugerir que se asigne uno en Jira, pero no lo hagas tú).

## 3. Leer el detalle

Llama a `getJiraIssue` con la clave elegida y extrae: resumen, descripción, criterios de aceptación, prioridad, estado, epic padre y enlaces/subtareas.

## 4. Contrastar con el código

Antes de proponer nada, ten en cuenta las restricciones de `CLAUDE.md`:
- El trabajo de este ejercicio va en `frontend/`; **el backend no se modifica**.
- Lee los validadores del backend (`backend/app/validators/`) y las rutas (`backend/start/routes.ts`) para saber qué exige realmente la API; si el ticket contradice el contrato (p. ej. omite `passwordConfirmation`), señálalo.

## 5. Responder

Responde en español, breve:

- **Ticket**: `CLAVE` — resumen (tipo, prioridad, estado) con enlace `https://<sitio>.atlassian.net/browse/CLAVE`.
- **Qué pide**: 2–4 viñetas con los criterios de aceptación.
- **Discrepancias** con el backend, si las hay.
- **Plan**: pasos concretos con los archivos de `frontend/` que tocarías.
- Otros candidatos (las 2–3 siguientes claves) en una línea.

Termina preguntando si quiere que empieces a implementarlo o que te asignes/muevas el ticket en Jira.
