let text =
  "Cześć Ola, Szczerze to pierwszy raz będę coś takiego pisać, a chciałem się z tobą podzielić paroma rzeczami. Dzisiaj jest nasza rocznica minęło okrągłe 365 dni od momentu jak cię pierwszy raz pocałowałem, i nawet nie wiesz ile dla mnie cały ten czas znaczy. Nasza znajomość zaczęła się tak naprawdę przez jedno głupie zdjęcie, i gdyby nie to, że je do mnie wysłałaś to pewnie byś tego dzisiaj nie zobaczyła. Każdy miesiąc z tobą był czymś wyjątkowym, nawet kiedy nie robiliśmy niczego konkretnego, to byliśmy razem. Cieszę się, że mogę leżeć obok Ciebie i nic nie robić, ale tak samo uwielbiam spędzać czas produktywnie razem z tobą. Każde wyjście do znajomych jest o wiele lepsze, gdy jesteś ze mną. Mega bawiłem się na domkach, bo byłaś obok mnie. Każda nasza randka jest dla mnie niezwykle ważna. Może wydaje ci się czasami że zachowuję się jak dziecko, ale to dlatego, że ufam ci i mogę pokazać ci tę swoją wewnętrzną dziecięcość, która jest tylko dla ciebie. Kocham cię za tak bardzo dużo rzeczy, twój charakter, poczucie humoru, to jak dużo wkładasz w ten związek, to jak bardzo przemyślane prezenty dla mnie robisz, to jak dużo na mój temat wiesz i pamiętasz, kocham twoje niebieskie oczy, pachnące włosy, figurę, twój zapach, to jak się ubierasz, właściwie wszystko w tobie kocham. Jest jeszcze wiele innych rzeczy, które mógłbym wymienić, ale nie wiem, czy mi na to miejsca starczy. Cieszę się, że jestem z tobą i w każdym możliwym wszechświecie wybrałbym ciebie. Na zakończenie chcę życzyć nam szczęścia, zdrowia, pieniędzy, dużo sexu i oczywiście, kolejnego roku razem. The moon is beautiful isn't it?";

let typedText = "";
let textIndex = 0;
let interval;

function typeText() {
  if (textIndex < text.length) {
    typedText += text.charAt(textIndex);
    document.getElementById("typed-text").textContent = typedText;
    textIndex++;
    interval = setTimeout(typeText, 60);
  } else {
    clearTimeout(interval);
  }
}

function closePopup() {
  typedText = "";
  textIndex = 0;
  document.getElementById("typed-text").textContent = "";
  clearTimeout(interval);
}
typeText();
