# Case Fullstack

## Teknologi brukt i prosjektet

### Backend

- **Database**: MYSQL
- **Server**: Node.js med Express.js
- **Auth**: JWT
- **ORM**: Sequelize

### Frontend

- **Rammeverk**: React
- **State management**: Redux
- **GUI**: Material-UI
- **Routing**: React Router
- **Formhåndtering**: Formik og Yup
- **Datovelger**: React Datepicker

## Endepunkter

- /rooms:
    * GET (Oversikt over alle rom)
    * POST (Opprett nytt rom)

- /rooms/:
    * GET (Oversikt over et spesifikt rom)
    * PUT (Oppdatere informasjonen til et rom)
    * DELETE (Slett et rom)

- /bookings:
    * GET (Hente reservasjoner)
    * POST (Opprett ny reservasjon)

- /bookings/:
    * GET (Hente informasjon på en spesifikk reservasjon)
    * PUT (Endringer til en reservasjon)
    * DELETE (Slett en reservasjon)

- /customers:
    * GET (Liste over alle kunder)
    * POST (Opprett ny kunde)

- /customers/:
    * GET (Hente informasjon om en spesifikk kunde)
    * PUT (Oppdater kundeinformasjon)
    * DELETE (Slett en kunde)

- /audit-logs:
    * GET (Liste over alle endringer i databasen)

# Spørsmål

## Hva mener du er viktig å tenke på når du skal lage et slikt system?

### Backend
Det er viktig å lage et system som kan enkelt skaleres og lett vedlikeholdes.
Personsikkert er også viktig, så det er viktig å ha en god autentiseringsløsning som krypteres og lagres sikkert i databasen.
Det er også viktig å ha en god struktur på prosjektet, slik at det er lett å finne frem i koden og forstå hva som skjer.

### Frontend
Komponentbasert utvikling er viktig for å kunne gjenbruke kode og gjøre det enklere å vedlikeholde koden.
Det er også viktig å ha en god state management, slik at det er enkelt å holde styr på dataene som blir hentet fra backend.
En god GUI er også viktig for å gi en god brukeropplevelse.

## Er det noen spesielle teknologier du mener vil være til hjelp når du skal lage et slikt system og hvorfor?

### Backend
Jeg mener at det er viktig å ha en god ORM for å enkelt kunne kommunisere med databasen. Jeg har brukt Sequelize i dette prosjektet, som gjør databasehåndteringen mye enklere.
En god sikkerthets løsning som JWT og BCrypt er viktig for å sikre passord med hash og autentisering med tokens.

### Frontend
Jeg mener at det er viktig å ha en god state management for å holde styr på dataene som blir hentet fra backend. 
Denne casen har brukt Redux, som gjør det enkelt å holde styr på data.

## Er det noen spesielle utfordringer som kan oppstå i en slik type løsning, og hvordan ville du angrepet dette.

### Backend
En utfordring er å håndtere store mengder data som skal hentes og brukes fra databasen. Dette kan løses ved å bruke paginering og indeksering i databasen.
En annen utfordring er å håndtere autentisering og autorisasjon på en sikker måte, uten å skape unødvendig kompleksitet i koden. Dette kan løses ved å planlegge en god autentiseringsløsning fra starten av.

### Frontend
En utfordring kan være å strukturere store mengder data og vise det frem på en strukturert måte for brukern, uten at det skal bli for mye å se på eller å forstå.
Dette kan løses ved å bruke paginering og filtrering for å gjøre det enklere for brukeren å finne frem i dataene.

