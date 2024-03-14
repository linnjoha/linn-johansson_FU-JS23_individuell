# React + TypeScript + Vite

About project

Skapa en webapp utifrån figmaskiss. https://www.figma.com/file/UeUGVefSdgio0sRxPFccJI/AirBean-v.1.1?type=design&node-id=0-1&mode=design&t=mcP2XDteRDdm9Uxw-0

https://github.com/FU-JS23/airbean?tab=readme-ov-file

Plan och upplägg

-Började med struktur och design. Utgick från skissen, där appen hade en bredd på 375px. Alltså mobilanpassad storlek, men den är till viss del responsiv, dock inte optimalt i alla format.

Struktur

- appen är en spa där vi landar på vår landingpage, vid onclick så routas användaren vidare till menu, den innehåller två components : header och footer.

- header består av två components, nav och cart, som bägge fungerar som varsin overlay vid onclick.

-footer är en component som består av en bild.

- cart hanterar både gäst och inloggad profil beställning. Går vi till status page för orders så visas eta och ordernummer. Om ingen order finns så returneras ett annat kontent. (feature)

-profile page visar först en overlay där man kan antingen logga in, eller lite längre ner signa sin profil. Efter lyckat att signa upp, så går det bra att logga in med samma namn och lösenord. Sedan stängs overlay ner och namn, email och ev orderhistorik visas som är kopplat till profilen.
Läggs en beställning när aktiva profilen är inloggad så kommer den synas i orderhistoriken.

egna reflektioner.

- i skiss så syns inte cartsymbolen varken i aboutpage eller på profilepage, jag har avsiktligt låtit carten vara kvar så att man som användare ska komma åt sin cart från alla sidor.

- när man loggar in första gången så renderas email ut, dock inte de nästföljande gångerna man loggar in. Alternativet hade ju varit att spara signup datan på annat vis, men jag tyckte ändå att det blev en snyggast lösning att bara spara på det här viset för detta syftet.

- Jag använde mig av global state för att få till användarprofilen. Det var väldigt omständigt att få ordning på orderhistoriken som skulle laddas in. Tillslut fick jag till det genom att hämta token direkt från sessionstorage istället för mitt global state(som också hämtar från sessionstorage), men det var lång väg dit och det hade säkert blivit smidigare och snyggare på annat vis, men det var som att det datan hämtades för sent från global state och inte kunde renderas direkt. (försökte mig gråhårig och flyttade rader, men hittade en alternativ lösning som funkar).
