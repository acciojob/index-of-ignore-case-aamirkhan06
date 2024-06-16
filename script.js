function indexOfIgnoreCase(s1, s2) {
  // write your code here
   const s1= s1.toLowerCase();
  const s2 = s2.toLowerCase();
  // Use indexOf to find the first occurrence of lowerSubStr in lowerStr
  return s1.indexOf(s2);
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");

if (s1 && s2) { // Check if 's' is not null or empty
  alert(indexOfIgnoreCase(s1, s2));
} else {
  alert("No input provided");
}
