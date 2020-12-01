//------------------------------------------------------------------------------------------------
// Det här är vår första grundläggande javascript-del som fokuserar på språket javascript
// utan att blanda in DOM eller HTML på något vis.
// 
// Uppgifter 1-1 ger dig ett antal uppgifter som har med området 1-1 att göra
// De kommer att blanda ihop följande delar som vi pratat om.
//
// 1) Datatyper
// 2) Deklaration
// 3) Operatorer
// 4) Villkorssatser
// 5) Iterationer (loopar)
// 6) Funktioner
//
//
// Läs gärna mer om JS på ex https://www.w3schools.com/Js/default.asp eller
// Eloquent Javascript
// men framförallt, programmera mycket :)
//
// Lös varje uppgift för sig.


//--------------------------------------------------------------------------------------------------
//   Uppgift A
//--------------------------------------------------------------------------------------------------
// Skapa ett program som beräknar summan av alla tal mellan 1 och 100
// Lagra svaret i variabeln svarA
//
//--------------------------------------------------------------------------------------------------
let svarA = 0;
function add(tal1){
	svarA = tal1 + svarA;
}
for(nummer = 1; nummer <= 100; nummer++){
	add(nummer);
}




console.log("Resultat av uppgift A: " + svarA);

//--------------------------------------------------------------------------------------------------
//   Uppgift B
//--------------------------------------------------------------------------------------------------
// Skapa en funktion som spegelvänder strängar (betrakta en sträng som en array av bokstäver)
// Du kan alltså använda svarB[2] för att komma åt tredje tecknet i strängen
// 
//
//--------------------------------------------------------------------------------------------------

let svarB = "Det här skall spegelvändas";
let omvänt ="";
function läggihop(bokstav){
	omvänt = bokstav + omvänt;
	return(omvänt);
}
for(bokstav = 0; bokstav <= 25; bokstav++){
	omvänd = läggihop(svarB[bokstav]);
}

// definiera din funktion här

// anropa den här

console.log("Resultat av uppgift B: " + omvänd);

//--------------------------------------------------------------------------------------------------
//   Uppgift C
//--------------------------------------------------------------------------------------------------
// Skapa en funktion som tar emot tre parametrar (numeriska värden) och som returnerar det
// största av dessa tre tal och lagra det i svarC
//
//--------------------------------------------------------------------------------------------------

let tal1 = 10, tal2 = 20, tal3 = -3;

// skapa funktionen här
function ströstatalet(tal1, tal2, tal3){
	if(tal1 > tal2 && tal1 > tal3){
		svarC = tal1;
	}
	else if (tal2 > tal1 && tal2 > tal3){
		svarC = tal2;
	}
	else if (tal3 > tal1 && tal3 > tal2){
		svarC = tal3;
	}
	return(svarC)
}

// anropa den här

ströstatalet(10, 20, -3)

console.log("Resultat av uppgift C: " + svarC);

//--------------------------------------------------------------------------------------------------
//   Uppgift D
//--------------------------------------------------------------------------------------------------
// 
//  Titta på funktionsbeskrivningen nedan och försök skriva koden som behövs för att den skall
//  fungera.
//
//--------------------------------------------------------------------------------------------------

let svarD;
let max = 200, min = 0;
let antalettal = 0;

function special713( min, max) {

    // kontrollera hur många tal mellan min och max 
    // som är jämnt delbara med 7 OCH 13
    // returnera antalet tal
    for(min = 0; min <= max; min++){
    	if(min % 7 == 0 && min % 13 == 0){
    		antalettal++;
    	}
    }
    return(antalettal);
}
svarD = special713(min, max)

console.log("Resultat av uppgift D: " + svarD);

//--------------------------------------------------------------------------------------------------
//   Uppgift E*
//--------------------------------------------------------------------------------------------------
// 
//  Skapa en funktion som kan räkna ut vilka primtal som finns upp till och med ett max-värde
// använda funktionsprototypen nedan
//
//--------------------------------------------------------------------------------------------------

let svarE;  // antalet primtal
let träffar;

function primtal(max) {
    let nuvarandePrimtal = [2];
    // kontrollera ifall max <=2, i så fall hoppa tillbaka
    // annars börjar du söka efter primtal tills du når max-värdet
    // skriv ut alla träffar du hittar
    // returnera antalet träffar 
    if(max <=2){
    	svarE = "för litet nummer";
    	return(svarE);
    }
    for(i = 3; i < 100; i+=2){
    	let isprime = true;
    	for(nummer = i-1; nummer > 1; nummer--){
    		if(i % nummer == 0){
    			isprime = false;
    		}
		}		
			if(isprime == true)
    	nuvarandePrimtal.push(i);
    }
    return(nuvarandePrimtal)
}
svarE = primtal(max);


console.log("Resultat av uppgift E: " + svarE);

//TACK MARCUS
//TACK MARCUS
//TACK MARCUS
