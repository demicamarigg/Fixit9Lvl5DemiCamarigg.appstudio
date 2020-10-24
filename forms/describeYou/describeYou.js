
rdoCharacteristics.onclick=function(){
  let userChoice = $("input[name=rdoCharacteristics]:checked").prop("value")
  lblMessage.value = `I would agree that you are a ${userChoice} person too.`
}

btnNextPage.onclick=function(){
  ChangeForm(favExercises)
}
