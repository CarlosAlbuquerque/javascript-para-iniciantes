function temHabilidade(skills) {
    if (skills.indexOf("Javascript") !== -1) {
        return console.log("Tem a skill");
      } else {
        console.log("Não tem a skill");
      }   }
   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills); // true ou false