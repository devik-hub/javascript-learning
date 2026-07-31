var User = function(firstName, lastName, courseCount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

var hitesh = new User("Hitesh"," Choudhary", 0);



