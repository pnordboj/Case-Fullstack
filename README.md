# Case Fullstack

## Teknologi brukt i prosjektet

    **Hosting**: Cloudflare
    **Database host**: Supabase

### Backend

    **Database**: PostgreSQL
    **Server**: Node.js med Express.js
    **Testing**: Jest og Supertest
    **Auth**: JWT
    **ORM**: Supabase

### Frontend

    **Rammeverk**: React
    **State management**: Redux
    **GUI**: Material-UI
    **Routing**: React Router
    **Formhåndtering**: Formik og Yup

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

## Sikkerthet
