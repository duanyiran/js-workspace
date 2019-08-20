const {isValid} = require('../main');

// it ('should add two numbers', () => {
//     expect(add(2, 3)).toBe(5);
// });

it('should numbers be valid',() =>{

//given
var firstNumber = 2;
var secondNumber = 3; 

//when
var result = isValid(firstNumber,secondNumber)
expect(result).toBe(true)
})

it('should GENERATED array',() =>{
//given
var firstNumber = 2;
var secondNumber = 3;

//when
var generatedArray = generateMultiplyArray(firstNumber,secondNumber);


//then
expect(generatedArray[0][0],'2*2=4');
expect(generatedArray[1][0],'2*3=6');
expect(generatedArray[1][1],'3*3=9');
})

var generatedArray = [];
var rows = []
generatedArray[0]=rows;

[
['2*2=4']
['2*3=6','3*3=9']   
]


// expect(result).toBe(
// 2*2=4
// 2*3=6  3*3=9
// 2*4=8  3*4=12  4*4=16
// )
// })