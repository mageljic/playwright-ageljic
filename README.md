**Prije pokretanja potrebno je otvoriti terminal i upisati:**

node -v

i

npm -v

Instalacija je uspješna ukoliko se ispišu verzije.

**Preuzimanje projekta preko GitHuba:**

Otvoriti GitHub stranicu projekta.
Kliknuti na gumb Code.
Odabrati Download ZIP.
Raspakirati ZIP datoteku na računalo (npr. u "Dokumenti").
Otvoriti raspakirani direktorij u Visual Studio Codeu.

**Instaliranje potrebnih paketa:**

U terminalu, unutar direktorija projekta, pokrenuti:

npm install

Ova naredba instalira sve potrebne pakete navedene u package.json datoteci.

Nakon instalacije paketa potrebno je instalirati preglednike koje Playwright koristi:

npx playwright install

**Pokretanje testova:**

Za pokretanje određenog testa: npx playwright test primjer.spec.ts

Za pokretanje svih testova: npx playwright test tests/ 

Detaljan opis testova nalazi se u: **test_documentation**
