//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class crewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(scores){
     this.scores.push(scores);
    }
    average(){
        let sum = 0;
        this.scores.forEach(score=>{
            sum += score
        })
        return Math.round((sum/this.scores.length)*10)/10;
    }
    status(){
        if (this.average() >= 90){
            console.log(`${this.name} earned and average test score of ${this.average()} and has a status of  `)
        }
    }
}
let bBear = new crewCandidate('Bubba Bear', 135, [88, 85, 90]);
let mMaltese = new crewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gGator = new crewCandidate('Glad Gator', 225, [75,78,62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(mMaltese.average());


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.