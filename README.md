# A RESTful Todo-API

## Introductie

In deze demo maak je een API waarmee je een todo lijstje kan maken. Je gebruikt hiervoor Express, FileSystem, SQLlite, Middleware en we eindigen met het opzetten van ESLint.

## Overzicht

We doorlopen verschillende stappen:
- [Stap 1: Opzetten van je programmeeromgeving][]

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
      - info: geeft blauwe tekst in de console
      - stressedInfo: geeft tekst met een blauwe achtergrond in de console
      - error: geeft rode tekst in de console
      - stressedError: geeft tekst met een rode achtergrond in de coonsole
      - warning: geeft oranje tekst in de console (lees de documentatie zodat je weet hoe je dit moet doen)
      - stressedWarning: geeft tekst met een blauwe achtergrond in de coonsole (lees de documentatie zodat je weet hoe je dit moet doen)
      - json: zorgt dat een JSON object wordt uitgeschreven in de console als tekst. De tekst zelf staat in een grijze kleur.
- We starten in deze stap met het opslaan van je `todo.json` bestand in een `data` folder vanaf je root.
  - Maak in je `/src/lib` folder een file `TodoFile.js`. Je maakt hier in een klasse met verschillende functies (zie volgende stappen). Voor nu volstaat:
    - save(): dit is een functie waarmee we een JSON bestand wegschrijven in je `data`folder. Schrijf in je Express applicatie een functie (enkel voor demo) om een lege array weg te schrijven met daarin een object:
    ```json
    [{
      success: "success!"
    }]
    ```