var newName = prompt('Enter a letter');

var i;
var j;

for (i = 0; i < 10; i++) {
  for (j = 0; j < i; j++) {
    document.write(newName);
}
document.write ('<br>');
}
/* the 'i is in range between 0 to 10
for the 'j' range would be 0 to 'i'*/
