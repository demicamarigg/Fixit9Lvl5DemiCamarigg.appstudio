
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
    console.log(s)
       switch(s) {
              case "Dessert Voting":
                // Go to the Dessert voting form
                ChangeForm(dessertVoting)
                break
              case "Describe Me":
                // Go to the Describe me form
                ChangeForm(describeYou)
                break
              case "Favorite Exercises":
                // Go to the fav exercises form
                ChangeForm(favExercises)
                break
       }  //switch
   } //else
}

