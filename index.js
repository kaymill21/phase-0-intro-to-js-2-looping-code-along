// Code your solutions in this file
// Code your solutions in this file;

function writeCards(names, event){
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push("Thank you, " + names[i]+ ", for the wonderful " + event + " gift!");
        console.log(messages[i])
      }
      return messages;
    }
function countDown( number) {
    for( ; number>= 0 ; number--){
        console.log(number);
    }
}
