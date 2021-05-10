function myFunction(str) {
    return str.length;
   
   }
   
   function WordCount(str) {
      var total = 0;
      var words=0;
     for (var i = 0; i < str.length; i++){
       
      if (str[i] === " ") { // if a space is found in str
        total += 1; // add 1 to total   }
      }
    }
    total += 1; // add 1 to total to account for extra space since 1 space = 2 words
    return total;
  }
   
   
   function countVowel(str) { 
     var result=0;
     
       const count = str.match(/[aeiou]/gi).length;
       
       return count;
      }
      
      
      
      
      let mystr= 'hi there hagar';

      console.log(myFunction(mystr));
      console.log(WordCount(mystr));
      console.log(countVowel(mystr));