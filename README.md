# A RESTful Todo-API

## Introductie

In deze demo maak je een API waarmee je een todo lijstje kan maken. Je gebruikt hiervoor Express, FileSystem, SQLlite, Middleware en we eindigen met het opzetten van ESLint.

## Overzicht

We doorlopen verschillende stappen:
- [Stap 1: Opzetten van je programmeeromgeving](#stap-1-opzetten-van-je-programmeeromgeving)
- [Stap 2: TodoFile verder uitwerken](#stap-2-todofile-verder-uitwerken)
- [Stap 3: Maak je API endpoints](#stap-3-maak-je-api-endpoints)

## Stap 1: Opzetten van je programmeeromgeving

We doorlopen volgende stappen:

- [Installeer Express JS](https://expressjs.com/)
- [Installeer JSON bodyparser middleware](https://www.npmjs.com/package/body-parser)
- [Installeer dotenv en maak een .env bestand aan](https://www.npmjs.com/package/dotenv)
- Maak een Express JS applicatie aan en gebruik de JSON bodyparser als middleware.
- Haal het poort nummer van je server (6001) uit het dotenv bestand en gebruik deze voor het lanceren van je Express applicatie.
- Maak een eigen logging systeem:
  - [Installeer Chalk](https://www.npmjs.com/package/chalk)
  - Lees de documentatie van Chalk, je kan met deze bibliotheek kleurtjes geven aan je fouten in de console.
  - Maak in een `/src/lib/` folder de file `Logger.js`. Dit is een ES6 module met daarin 6 verschillende functies:
      - `info()`: geeft blauwe tekst in de console
      - `stressedInfo()`: geeft tekst met een blauwe achtergrond in de console
      - `error()`: geeft rode tekst in de console
      - `stressedError()`: geeft tekst met een rode achtergrond in de coonsole
      - `warning()`: geeft oranje tekst in de console (lees de documentatie zodat je weet hoe je dit moet doen)
      - `stressedWarning()`: geeft tekst met een blauwe achtergrond in de coonsole (lees de documentatie zodat je weet hoe je dit moet doen)
      - `json()`: zorgt dat een JSON object wordt uitgeschreven in de console als tekst. De tekst zelf staat in een grijze kleur.
- We starten in deze stap met het opslaan van je `todo.json` bestand in een `data` folder vanaf je root.
  - Maak in je `/src/lib` folder een file `TodoFile.js`. Je maakt hier in een klasse met verschillende functies (zie volgende stappen). Voor nu volstaat:
    - `save()`: dit is een functie waarmee we een JSON bestand wegschrijven in je `data`folder. Voor het aanmaken, wijzigen en wegeschrijven van bestanden gebruik je de [File System module van Node.js](https://nodejs.org/api/fs.html).
- Maak in je Express applicatie een test-functie (bijv. `testToDos`) om een lege array weg te schrijven met daarin een object:
    ```json
    [{
      success: "success!"
    }]
    ```

## Stap 2: TodoFile verder uitwerken
Werk verder op het `TodoFile.js` die je maakte in stap 1:
- Schrijf een `get()` functie in TodoFile.js om je array op te halen
- Installeer [uuid](https://www.npmjs.com/package/uuid)
- Maak een nieuw todo item en bewaar via een `add(description)` functie. Een todo item heeft een beschrijving en een id:
  ```json
    {
      "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6",
      "description": "Mijn eerste todo item"
    }
  ```
- Gebruik voor het genereren van je id het pakket `uuid` en maak een v4 id.
- Maak een `update(id, description)` functie aan om een todo te wijzigen. Gebruik de id om je todo op te zoeken in je bestand.
- Maak een `delete(id)` functie aan om een todo te verwijderen. Gebruik de id om je todo op te ozken in je bestand.
- Zorg dat je overal error handling toevoegt met je de `Logger` die je maakt in stap 1 zodat je weet waar er zich een probleem voordoet.
- Test al je functies die je maakte met je test-functie die je maakte in Stap 1.

## Stap 3: Maak je API endpoints
- Maak in je `src`-folder een actions folder, met daarin een folder voor je todo-acties.
- Maak een `crudTodo.js` bestand, met daarin je CRUD (Create, Read, Update & Delete) bewerken die binnenkomen en buitengaan in je API. De `todo` parameter in onderstaande functies slaat op een instantie van je ToDoFile:
  - `getTodos(todo, request, response)`: voor het ophalen van je todos
  - `addTodo(todo, request, response)`: voor het toevoegen van een todo
  - `updateTodo(todo, request, response)`: voor het updaten van een todo
  - `deleteTodo(todo, request, response)`: voor het verwijderen van een todo
- Zorg dat je je fouten goed afhandelt en je, wanneer het fout loopt, de juiste http response code stuurt naar je client
- De data die binnenkomt via je API moet voldoen aan een aantal voorwaarden. Maak daarom een parseTodo functie in een afzonderlijk bestand waarmee je controleert of die data voldoet:
  - Er moet een `todo` aanwezig zijn
  - In een `todo` moet een description zitten.
- Maak een functie waarmee je de verschillende endpoints registreert in je Express app.
  - Maak in je actions folder een `registerTodoEndpoints.js` met daarin een functie die aan je Express app volgende endpoints toevoegt:
    - POST "/todos"
    - GET "/todos"
    - PUT "/todos"
    - DELETE "/todos"
- Spreek de `registerTodoEndpoints([Instantie Express App])` aan in het start bestand van je Express applicatie.
