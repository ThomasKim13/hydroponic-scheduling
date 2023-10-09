/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define([], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory();
  } else { // Browser
    var messages = factory();
    for (var key in messages) {
      root.Blockly.Msg[key] = messages[key];
    }
  }
}(this, function() {
// This file was automatically generated.  Do not modify.

'use strict';

var Blockly = Blockly || { Msg: Object.create(null) };

Blockly.Msg["ADD_COMMENT"] = "Palikti komentarą";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Negalima ištrinti kintamojo '%1', nes jis yra dalis funkcijos '%2'";
Blockly.Msg["CHANGE_VALUE_TITLE"] = "Keisti reikšmę:";
Blockly.Msg["CLEAN_UP"] = "Išvalyti blokus";
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Suskleistuose blokuose yra įspėjimų.";
Blockly.Msg["COLLAPSE_ALL"] = "Suskleisti blokus";
Blockly.Msg["COLLAPSE_BLOCK"] = "Suskleisti bloką";
Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "1 spalva";
Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "2 spalva";
Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";  // untranslated
Blockly.Msg["COLOUR_BLEND_RATIO"] = "santykis";
Blockly.Msg["COLOUR_BLEND_TITLE"] = "sumaišyk";
Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Sumaišo dvi spalvas su pateiktu santykiu (0.0 - 1.0).";
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://lt.wikipedia.org/wiki/Spalva";
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Pasirinkti spalvą iš paletės.";
Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
Blockly.Msg["COLOUR_RANDOM_TITLE"] = "atsitiktinė spalva";
Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Pasirinkti spalvą atsitiktinai.";
Blockly.Msg["COLOUR_RGB_BLUE"] = "mėlyna";
Blockly.Msg["COLOUR_RGB_GREEN"] = "žalia";
Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";  // untranslated
Blockly.Msg["COLOUR_RGB_RED"] = "raudona";
Blockly.Msg["COLOUR_RGB_TITLE"] = "spalva su";
Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Spalvą galima sudaryti iš raudonos, žalios ir mėlynos dedamųjų. Kiekvienos intensyvumas nuo 0 iki 100.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";  // untranslated
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "nutraukti kartojimą";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "šį kartą praleisti likusius veiksmus ir tęsti kartojimą";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Nutraukia (artimiausią) vykstantį kartojimą.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Praleidžia žemiau išvardintus kartojimo veiksmus (ir tęsia darbą nuo kartojimo pradinio veiksmo).";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Atsargiai: šis blokas gali būt naudojamas tik kartojimo bloko viduje.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";  // untranslated
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "kartok su kiekvienu %1 iš sąrašo %2";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "Kartok veiksmus, kol kintamasis \"%1\" paeiliui gauna kiekvieną sąrašo reikšmę.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";  // untranslated
Blockly.Msg["CONTROLS_FOR_TITLE"] = "kartok, kai %1 kinta nuo %2 iki %3 po %4";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Imama kintamoji '%1' reikšmė nuo pradinio skaičiaus iki pabaigos skaičiaus, skaičiuojant nustatytais intervalais ir atliekant nustatytus blokus.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Pridėti sąlygą „jei“ blokui.";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Pridėti veiksmų vykdymo variantą/\"šaką\", kai netenkinama nė viena sąlyga.";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";  // untranslated
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Galite pridėt/pašalinti/pertvarkyti  sąlygų \"šakas\".";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "kitu atveju";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "arba jei";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "jei";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Jeigu sąlyga tenkinama, tai atlik veiksmus.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "Jei sąlyga tenkinama, atlikti jai priklausančius veiksmus, o jei ne -- atlikti kitus nurodytus veiksmus.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "Jei pirma sąlyga tenkinama, atlikti jai priklausančius veiksmus, O jei ne, tikrinti antrą sąlygą -- ir jei ši tenkinama, atlikti jos veiksmus.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "Jei pirma sąlyga tenkinama, atlikti jai priklausančius veiksmus, O jei ne, tikrinti antrą sąlygą -- ir jei ši tenkinama, atlikti jos veiksmus. Kitais atvejais -- atlikti paskutinio bloko veiksmus.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://en.wikipedia.org/wiki/For_loop";  // untranslated
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "daryti";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "pakartokite %1 kartus";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Leidžia atlikti išvardintus veiksmus kelis kartus.";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";  // untranslated
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "kartok, kol pasieksi";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "kartok kol";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "Kartoja veiksmus, kol bus pasiekta nurodyta sąlyga.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "Kartoja veiksmus, kol sąlyga tenkinama.";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "Ištrinti visus %1 blokus?";
Blockly.Msg["DELETE_BLOCK"] = "Ištrinti bloką";
Blockly.Msg["DELETE_VARIABLE"] = "Ištrinti „%1“ kintamąjį";
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Ištrinti %1 '%2' panaudojimus?";
Blockly.Msg["DELETE_X_BLOCKS"] = "Ištrinti %1 blokus";
Blockly.Msg["DIALOG_CANCEL"] = "Atšaukti";
Blockly.Msg["DIALOG_OK"] = "Gerai";
Blockly.Msg["DISABLE_BLOCK"] = "Išjungti bloką";
Blockly.Msg["DUPLICATE_BLOCK"] = "Kopijuoti";
Blockly.Msg["DUPLICATE_COMMENT"] = "Dubliuoti Komentarą";
Blockly.Msg["ENABLE_BLOCK"] = "Įjungti bloką";
Blockly.Msg["EXPAND_ALL"] = "Išskleisti blokus";
Blockly.Msg["EXPAND_BLOCK"] = "Išskleisti bloką";
Blockly.Msg["EXTERNAL_INPUTS"] = "Išdėstyti stulpeliu, kai daug parametrų";
Blockly.Msg["HELP"] = "Pagalba";
Blockly.Msg["INLINE_INPUTS"] = "Išdėstyti vienoje eilutėje";
Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";  // untranslated
Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "tuščias sąrašas";
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Grąžina sąrašą, ilgio 0, neturintį duomenų";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "sąrašas";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Pridėti, pašalinti arba paskirstyti skyrius, kad pertvarkyti šį teksto bloką.";
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "sukurti sąrašą su";
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Pridėti elementą į sąrašą.";
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Sukurti sąrašą iš bet kokio skaičiaus elementų.";
Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "pirmas";
Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "# nuo galo";
Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "#";
Blockly.Msg["LISTS_GET_INDEX_GET"] = "paimk";
Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "paimk ir ištrink";
Blockly.Msg["LISTS_GET_INDEX_LAST"] = "paskutinis";
Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "atsitiktinis";
Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "pašalinti";
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Grąžina pirmąjį sąrašo elementą.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Gražina objektą į nurodyta poziciją sąraše.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Grąžina paskutinį elementą iš sąrašo.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Grąžina atsitiktinį elementą iš sąrašo.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Pašalina ir grąžina pirmąjį sąrašo objektą.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Pašalina ir grąžina objektą nurodytoje sąrašo pozicijoje.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Pašalina ir grąžina paskutinį sąrašo objektą.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Pašalina ir grąžina atsitiktinį sąrašo objektą.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Pašalina pirmą objektą sąraše.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Pašalina objektą iš nurodytos vietos sąraše.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Pašalina paskutinį objektą sąraše.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Pašalina atsitiktinį objektą sąraše.";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "iki # nuo galo";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "iki #";
Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "iki galo";
Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "sąrašo dalis nuo pradžios";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "sąrašo dalis nuo # nuo galo";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "sąrašo dalis nuo #";
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";  // untranslated
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Sukuria nurodytos sąrašo dalies kopiją.";
Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 yra paskutinis objektas.";
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 yra pirmasis objektas.";
Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "rask pirmą reikšmę";
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";  // untranslated
Blockly.Msg["LISTS_INDEX_OF_LAST"] = "rask paskutinę reikšmę";
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Grąžina pirmos/paskutinės reikšmės eilės nr. sąraše. Grąžina %1, jei reikšmės neranda.";
Blockly.Msg["LISTS_INLIST"] = "sąraše";
Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";  // untranslated
Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 yra tuščias";
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Grąžina „true“, jeigu sąrašas tuščias.";
Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";  // untranslated
Blockly.Msg["LISTS_LENGTH_TITLE"] = "ilgis %1";
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Grąžina sąrašo ilgį.";
Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";  // untranslated
Blockly.Msg["LISTS_REPEAT_TITLE"] = "sukurk sąrašą, kuriame %1 bus %2 kartus";
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Creates a list consisting of the given value repeated the specified number of times.";  // untranslated
Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";  // untranslated
Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "atvirkštinis %1";
Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Apverskite sąrašo kopiją.";
Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";  // untranslated
Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "kaip";
Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "įterpk į vietą";
Blockly.Msg["LISTS_SET_INDEX_SET"] = "priskirk elementui";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Įterpia objektą į sąrašo pradžią.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Įterpią objektą į nurodytą poziciją sąraše.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Pridėkite objektą prie sąrašo pabaigos.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Įterpia objektą į atsitiktinę sąrašo vietą.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Nustato pirmąjį sąrašo objektą.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Nustato objektą nurodytoje sąrašo vietoje.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Nustato paskutinį sąrašo objektą.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Sąraše nustato atsitiktinį objektą.";
Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";  // untranslated
Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "didėjančia tvarka";
Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "mažėjančia tvarka";
Blockly.Msg["LISTS_SORT_TITLE"] = "rūšiuoti %1 %2 %3";
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Rūšiuoti sąrašo kopiją.";
Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "abecėlės, ignoruoti raidžių dydį";
Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "skaitmeninis";
Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "abėcėlės";
Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";  // untranslated
Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "sudaryti sąrašą iš teksto";
Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "sukurti tekstą iš sąrašo";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Join a list of texts into one text, separated by a delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Split text into a list of texts, breaking at each delimiter.";  // untranslated
Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "su dalikliu";
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "klaidinga";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";  // untranslated
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Reikšmė gali būti \"teisinga\"/\"Taip\" arba \"klaidinga\"/\"Ne\".";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "tiesa";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";  // untranslated
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Tenkinama, jei abu reiškiniai lygūs.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Grįžti tiesa, jei pirmoji įvestis didesnė nei antroji įvestis.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Grįžti tiesa, jei pirma įvestis didesnė arba lygi antrajai įvesčiai.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Grįžti tiesa, jei pirma įvestis mažesnė nei antra įvestis.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Grįžti tiesa, jei pirma įvestis mažesnė arba lygi antrajai įvesčiai.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Grįžti tiesa, jeigu abi įvestys ne lygios tarpusavyje.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";  // untranslated
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "ne %1";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Grįžti tiesa, jei įvestis klaidinga. Grįžti klaidinga, jei įvestis teisinga.";
Blockly.Msg["LOGIC_NULL"] = "nieko";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";  // untranslated
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Reikšmė nebuvo nurodyta...";
Blockly.Msg["LOGIC_OPERATION_AND"] = "ir";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";  // untranslated
Blockly.Msg["LOGIC_OPERATION_OR"] = "arba";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Bus teisinga, kai abi sąlygos bus tenkinamos.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Grįžti tiesa, jei bent viena įvestis teisinga.";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "sąlyga";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://en.wikipedia.org/wiki/%3F:";  // untranslated
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "jei ne";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "jei taip";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Jeigu sąlygą tenkinama, grąžina pirmą reikšmę, o jei ne - antrąją.";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://en.wikipedia.org/wiki/Arithmetic";  // untranslated
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Grąžina dviejų skaičių sumą.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Grąžina dviejų skaičių dalmenį.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Grąžina dviejų skaičių skirtumą.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Grąžina dviejų skaičių sandaugą.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Grąžina pirmą skaičių pakeltą laipsniu pagal antrą skaičių.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://en.wikipedia.org/wiki/Atan2";  // untranslated
Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 of X:%1 Y:%2";  // untranslated
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Return the arctangent of point (X, Y) in degrees from -180 to 180.";  // untranslated
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";  // untranslated
Blockly.Msg["MATH_CHANGE_TITLE"] = "padidink %1 (emptypage) %2";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Prideda skaičių prie kintamojo '%1'. Kai skaičius neigiamas - gaunasi atimtis.";
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://en.wikipedia.org/wiki/Mathematical_constant";  // untranslated
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Grįžti viena iš pagrindinių konstantų: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (begalybė).";
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://en.wikipedia.org/wiki/Clamping_(graphics)";  // untranslated
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "apribok %1 tarp %2 ir %3";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Apriboti skaičių, kad būtų tarp nustatytų ribų (imtinai).";
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";  // untranslated
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "yra dalus iš";
Blockly.Msg["MATH_IS_EVEN"] = "yra lyginis";
Blockly.Msg["MATH_IS_NEGATIVE"] = "yra neigiamas";
Blockly.Msg["MATH_IS_ODD"] = "yra nelyginis";
Blockly.Msg["MATH_IS_POSITIVE"] = "yra teigiamas";
Blockly.Msg["MATH_IS_PRIME"] = "yra pirminis";
Blockly.Msg["MATH_IS_TOOLTIP"] = "Patikrina skaičiaus savybę: (ne)lyginis/pirminis/sveikasis/teigiamas/neigiamas/dalus iš x.";
Blockly.Msg["MATH_IS_WHOLE"] = "yra sveikasis";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";  // untranslated
Blockly.Msg["MATH_MODULO_TITLE"] = "dalybos liekana %1 ÷ %2";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Grįžti likučiu nuo dviejų skaičių dalybos.";
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";  // untranslated
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://lt.wikipedia.org/wiki/Skaičius";
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Skaičius.";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";  // untranslated
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "vidurkis";
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "didžiausia reikšmė sąraše";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "mediana sąrašui";
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "mažiausia reikšmė sąraše";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "statistinė moda sąrašui";
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "atsitiktinis elementas iš sąrašo";
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "standartinis nuokrypis sąraše";
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "suma";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Grįžti vidurkiu (aritmetinis vidurkis) iš skaitinių reikšmių sąraše.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Grįžti didžiausiu skaičiumi sąraše.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Grąžinti sąrašo medianą.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Grįžti mažiausiu skaičiumi sąraše.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Grąžinti sąrašą dažniausių elementų sąraše.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Grąžinti atsitiktinį elementą iš sąrašo.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Grįžti standartine pakraipa iš sąrašo.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "didžiausia reikšmė";
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "atsitiktinė trupmena";
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Atsitiktinė trupmena nuo 0 (imtinai) iki 1 (neimtinai).";
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";  // untranslated
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "atsitiktinis sveikas sk. nuo %1 iki %2";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Grįžti atsitiktinį sveikąjį skaičių tarp dviejų nustatytų ribų, imtinai.";
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://lt.wikipedia.org/wiki/Apvalinimas";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "apvalink";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "apvalink žemyn";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "apvalink aukštyn";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Suapvalinti skaičių į žemesnę ar aukštesnę reikšmę.";
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://en.wikipedia.org/wiki/Square_root";  // untranslated
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "modulis";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "kvadratinė šaknis";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Skaičiaus modulis - reikšmė be ženklo (panaikina minusą).";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Grąžinti skaičių laipsniu e.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Grąžinti skaičiaus natūrinį logaritmą.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Grįžti 10 pagrindinių logaritmų iš skaičiaus.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Grąžina skaičiui priešingą skaičių.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Grąžinti skaičių laipsniu 10.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Grįžti kvadratinę šaknį iš skaičiaus.";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";  // untranslated
Blockly.Msg["MATH_TRIG_ACOS"] = "acos";  // untranslated
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";  // untranslated
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";  // untranslated
Blockly.Msg["MATH_TRIG_COS"] = "cos";
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://lt.wikipedia.org/wiki/Trigonometrinės_funkcijos";
Blockly.Msg["MATH_TRIG_SIN"] = "sin";
Blockly.Msg["MATH_TRIG_TAN"] = "tan";
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Grąžinti skaičiaus arkkosinusą.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Grąžinti skaičiaus arksinusą.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Grąžinti skaičiaus arktangentą.";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Grąžinti laipsnio kosinusą (ne radiano).";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Grąžinti laipsnio sinusą (ne radiano).";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Grąžinti laipsnio tangentą (ne radiano).";
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Sukurti spalvos kintamąjį...";
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Sukurti skaičiaus kintamąjį...";
Blockly.Msg["NEW_STRING_VARIABLE"] = "Create string variable...";  // untranslated
Blockly.Msg["NEW_VARIABLE"] = "Sukurti kintamąjį";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "Naujo kintamojo pavadinimas:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "Naujas kintamojo tipas:";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";  // untranslated
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "leisti vidinius veiksmus";
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "pagal:";
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Vykdyti sukurtą komandą \"%1\".";
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Įvykdyti komandą \"%1\" ir naudoti jos suskaičiuotą (atiduotą) reikšmę.";
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "su:";
Blockly.Msg["PROCEDURES_CREATE_DO"] = "Sukurti \"%1\"";
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Apibūdinkite šią funkciją...";
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "daryk kažką";
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "komanda:";
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Sukuria procedūrą - komandą, kuri nepateikia jokio rezultato (tik atlieka veiksmus).";
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://en.wikipedia.org/wiki/Subroutine";  // untranslated
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "duok";
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Sukuria funkciją - komandą, kuri ne tik atlieka veiksmus bet ir pateikia (grąžina/duoda) rezultatą.";
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Ši komanda turi du vienodus gaunamų duomenų pavadinimus.";
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Highlight function definition";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "https://c2.com/cgi/wiki?GuardClause";  // untranslated
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "Jeigu pirma reikšmė yra teisinga (sąlyga tenkinama), grąžina antrą reikšmę.";
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Perspėjimas: šis blokas gali būti naudojamas tik aprašant funkciją.";
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "parametro pavadinimas:";
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Pridėti funkcijos parametrą (gaunamų duomenų pavadinimą).";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "gaunami duomenys (parametrai)";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Tvarkyti komandos gaunamus duomenis (parametrus).";
Blockly.Msg["REDO"] = "Atkurti";
Blockly.Msg["REMOVE_COMMENT"] = "Pašalinti komentarą";
Blockly.Msg["RENAME_VARIABLE"] = "Pervardyti kintamajį...";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Pervadinti visus '%1' kintamuosius į:";
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_APPEND_TITLE"] = "prie %1 pridėk tekstą %2";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Pridėti tekstą prie kintamojo '%1'.";
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";  // untranslated
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = " mažosiom raidėm";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = " Pavadinimo Raidėmis";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = " DIDŽIOSIOM RAIDĖM";
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Kitu atvėju, grąžina teksto kopiją.";
Blockly.Msg["TEXT_CHARAT_FIRST"] = "gauti pirmą raidę";
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "raidė nuo galo #";
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "gauti raidę #";
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";  // untranslated
Blockly.Msg["TEXT_CHARAT_LAST"] = "gauti paskutinę raidę";
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "gauti atsitiktinę raidę";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_CHARAT_TITLE"] = "tekste %1 %2";
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Grąžina raidę į tam tikrą poziciją.";
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";  // untranslated
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "skaičius %1 iš %2";
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Suskaičiuoti, kiek kartų šis tekstas kartojasi kitame tekste.";
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Pridėti teksto elementą.";
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "sujunk";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Pridėti, pašalinti arba paskirstyti skyrius, kad pertvarkyti šį teksto bloką.";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "iki raidės nuo galo #";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "iki raidės #";
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "iki pabaigos";
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "tekste";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "dalis nuo pradžios";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "dalis nuo raidės #";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "dalis nuo raidės #";
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";  // untranslated
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Grąžina tam tikrą teksto dalį.";
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";  // untranslated
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "rask,kur pirmą kartą paminėta";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "rask,kur paskutinį kartą paminėta";
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "tekste %1 %2 %3";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Grąžina pirmą/paskutinę pirmo teksto reikšmę antrame tekste. Grąžina %1, jei tekstas nerastas.";
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";  // untranslated
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 yra tuščias";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Grįžti tiesa, jei numatytas tekstas tuščias.";
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";  // untranslated
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "sukurti tekstą su";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Sukurti teksto fragmentą sujungiant bet kokį skaičių fragmentų.";
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";  // untranslated
Blockly.Msg["TEXT_LENGTH_TITLE"] = "teksto %1 ilgis";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Suranda teksto simbolių kiekį (įskaitant ir tarpus)";
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";  // untranslated
Blockly.Msg["TEXT_PRINT_TITLE"] = "spausdinti %1";
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Spausdinti nurodytą tekstą, skaičių ar kitą reikšmę.";
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";  // untranslated
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Prašyti vartotoją įvesti skaičių.";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Prašyti vartotoją įvesti tekstą.";
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "paprašyk įvesti skaičių :";
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "paprašyk įvesti tekstą :";
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";  // untranslated
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "pakeisti %1 į %2 šiame %3";
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Pašalinti visas teksto dalis kitame tekste.";
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";  // untranslated
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "atbulai %1";
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Apversti teksto simbolių tvarką.";
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://en.wikipedia.org/wiki/String_(computer_science)";  // untranslated
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "Tekstas (arba žodis, ar raidė)";
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";  // untranslated
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "išvalyk tarpus šonuose";
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "išvalyk tarpus pradžioje";
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "išvalyk tarpus pabaigoje";
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Grąžina teksto kopiją, pašalinus tarpus iš vieno ar abiejų kraštų.";
Blockly.Msg["TODAY"] = "Šiandien";
Blockly.Msg["UNDO"] = "Anuliuoti";
Blockly.Msg["UNNAMED_KEY"] = "bevardis";
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "elementas";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Sukurk \"priskirk %1\"";
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";  // untranslated
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Grąžina šio kintamojo reikšmę.";
Blockly.Msg["VARIABLES_SET"] = "priskirk %1 = %2";
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Sukurti 'kintamasis %1'";
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";  // untranslated
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Nustato, kad šis kintamasis būtų lygus įvesties vertei.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "Kintamasis, pavadinimu '%1', jau egzistuoja.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "Kintamasis, pavadinimu '%1', jau egzistuoja kaip kitas tipas: '%2'.";
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly darbalaukis";
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Kažką pasakykite...";
Blockly.Msg["CONTROLS_FOREACH_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_FOR_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_IF_ELSEIF_TITLE_ELSEIF"] = Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"];
Blockly.Msg["CONTROLS_IF_ELSE_TITLE_ELSE"] = Blockly.Msg["CONTROLS_IF_MSG_ELSE"];
Blockly.Msg["CONTROLS_IF_IF_TITLE_IF"] = Blockly.Msg["CONTROLS_IF_MSG_IF"];
Blockly.Msg["CONTROLS_IF_MSG_THEN"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["CONTROLS_WHILEUNTIL_INPUT_DO"] = Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"];
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TITLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["LISTS_GET_INDEX_HELPURL"] = Blockly.Msg["LISTS_INDEX_OF_HELPURL"];
Blockly.Msg["LISTS_GET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_GET_SUBLIST_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_INDEX_OF_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["LISTS_SET_INDEX_INPUT_IN_LIST"] = Blockly.Msg["LISTS_INLIST"];
Blockly.Msg["MATH_CHANGE_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["PROCEDURES_DEFRETURN_COMMENT"] = Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"];
Blockly.Msg["PROCEDURES_DEFRETURN_DO"] = Blockly.Msg["PROCEDURES_DEFNORETURN_DO"];
Blockly.Msg["PROCEDURES_DEFRETURN_PROCEDURE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"];
Blockly.Msg["PROCEDURES_DEFRETURN_TITLE"] = Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"];
Blockly.Msg["TEXT_APPEND_VARIABLE"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TITLE_ITEM"] = Blockly.Msg["VARIABLES_DEFAULT_NAME"];

Blockly.Msg["MATH_HUE"] = "230";
Blockly.Msg["LOOPS_HUE"] = "120";
Blockly.Msg["LISTS_HUE"] = "260";
Blockly.Msg["LOGIC_HUE"] = "210";
Blockly.Msg["VARIABLES_HUE"] = "330";
Blockly.Msg["TEXTS_HUE"] = "160";
Blockly.Msg["PROCEDURES_HUE"] = "290";
Blockly.Msg["COLOUR_HUE"] = "20";
Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
return Blockly.Msg;
}));
