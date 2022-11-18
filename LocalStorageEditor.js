// Made by ModdedStuffGuy
var LocalStorageName = prompt("Enter the name of the localstorage you wanna edit or create");
var LocalStorageTXT = prompt("Please, enter a value or string\nNOTE: Single and Double quotes are NOT needed in strings.");
localStorage[LocalStorageName] = LocalStorageTXT;
