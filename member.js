function skillsMember() {
  var member = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    skills: ["JavaScript", "HTML", "CSS"],
    calculateNumbers: function(var1, var2) {
      return var1 + var2;
    }
  };
  console.log(member.calculateNumbers(1, 2));
  console.log(member.skills[0]);
}