'use strict';
//podpinam pojemnik do wyświetlania informacji.
var output = document.getElementById('greeter-output');
//podpinam przyciski do wprowadzania danych.
var button = document.getElementById('greeter-button');
var buttonBlue = document.getElementById('blue-button');
//definiuje zmienne.
var stopnieC;
var stopnieF;
//uruchamiam funkcję po wciśnięciu przycisku.
button.addEventListener('click', function () {
    //do zmiennej stopnieC podpinam okienko w którym wyświetla się tekst zapytania.
    stopnieC = parseInt(window.prompt('Ile jest stopni Celcjusza?'));
    //obliczam stopnieF
    stopnieF = Math.round(stopnieC * 1.8 + 32);
    //Stawiamy warunek, jeśli stopnieC jest pustym stringiem 'tekst' lub jest NaN 'nie libczą', to wyświetl komunikat wpisz poprawnie liczbę.
    if (stopnieC === '' || isNaN(stopnieC)) {
        output.innerHTML = 'Podaj mi liczbę!';
        //Drugi warunek, jeśli stopnieC jest liczbą wykona się wyświetlenie stopni C, przeliczenie stopnie F i komentarz o stanie wody.
    } else {
        //zmienna
        var stanwody;
        //stopnieC są mniejsze od 0.
        if (stopnieC < 0) {
            stanwody = "Przy tej temperaturze woda jest zamrożona!";
        }
        //stopnieC są równe bądz większe od 0 i zarazem mniejsze od 100.
        else if (stopnieC >= 0 && stopnieC < 100) {
            stanwody = "Przy tej temperaturze woda jest w stanie ciekłym!";
        }
        //stopnieC są równe bądź większe od 100.
        else if (stopnieC >= 100) {
            stanwody = "Przy tej temperaturze woda jest w stanie wrzenia!";
        }
        //komunikat wyświetlający całość jeżeli kod jest poprawny.
        output.innerHTML = 'Jest ' + stopnieC + ' stopni C i ' + stopnieF + ' stopni F.<br>' + stanwody + '<br><br>';
    }
});

//Drugi przycisk analogicznie do pierwszego.

button = document.getElementById('blue-button');
buttonBlue.addEventListener('click', function () {
    stopnieF = parseInt(window.prompt('Ile jest stopni Faranhait?'));
    stopnieC = Math.round(stopnieF / 1.8 - 32);
    if (stopnieF === '' || isNaN(stopnieF)) {
        output.innerHTML = 'Wpisz liczbę!';
    } else {
        var ciekawostki;
        if (stopnieF < 32) {
            ciekawostki = 'Ciekawostka:<br>Najniższa temperatura na ziemi została odnotowana w 2010 roku na Antarktyce i wynosiła -93 stopnie C.'
        } else if (stopnieF >= 32 && stopnieF < 212) {
            ciekawostki = "Ciekawostka:<br>Na pustyni Lut w Iranie została odnotowana najwyższa temperatura na świecie, która wynosiła 71 stopnie C.";
        } else if (stopnieF >= 212) {
            ciekawostki = "Ciekawostka:<br>Podczas erupcji wulkanu temperatura sięga 1200 stopni C";
        }
        output.innerHTML = 'Jest ' + stopnieF + ' stopni F. i ' + stopnieC + ' stopni C.<br><br>' + ciekawostki + '<br><br>';
    }
});
