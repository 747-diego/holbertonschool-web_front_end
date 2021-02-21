function studentHogwarts() {
    var privateScore = 0;
    var name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {

        // PUBLIC METHODS
        setName(newName) {
            name = newName;
        },

        rewardStudent() {
            changeScoreBy(1);
        },

        penalizeStudent() {
            changeScoreBy(-1);
        },

        getScore() {
            return(name + ": " + privateScore);
        }
    }

    // harry, an instance of studentHogwarts:
    var harry = new studentHogwarts();
    harry.setName("Harry");
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    harry.rewardStudent();
    console.log(harry.getScore());

    // draco, an instance of studentHogwarts
    var draco = new studentHogwarts();
    draco.rewardStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    draco.penalizeStudent();
    console.log(draco.getScore());
}
