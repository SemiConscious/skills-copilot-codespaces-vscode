function skillsMember() {
    var member = {
        name: "John",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        printSkills: function () {
            for (var i = 0; i < this.skills.length; i++) {
                console.log(this.skills[i]);
            }
        }
    };
    return member;
}