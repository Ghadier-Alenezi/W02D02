// HigherOrderAndCallBack Challenges //

// Q1.
const addOne = (arr) => {
  const newArr = [];
  arr.forEach((item, index) => {
    newArr.push(item + 1);
  });
  return newArr;
};
addOne([1, 2, 3]); // => [2,3,4]

//---//

// Q2.
const addExclamation = (arr) => {
  newArr = [];
  arr.forEach((item) => {
    newArr.push(item + "!");
  });
  return newArr;
};
addExclamation(["one", "two", "three"]); // => ["one!","two!","three!"]

//---//
// Q3.
const addOneByMap = (arr) => {
  newArr = arr.map((item) => {
    return item + 1;
  });
  return newArr;
};
addOneByMap([1, 2, 3]); // => [2,3,4]

//---//
// Q4.
const addQuestion = (arr) => {
  newArr = arr.map((item) => {
    return item + "?";
  });
  return newArr;
};
addQuestion(["one", "two", "three"]); // => ["one?","two?","three?"]

//---//

// Q5.
const forLoopTwoToThe = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    newArr.push(2 ** item);
  });
  return newArr;
};
forLoopTwoToThe([1, 2, 3]); // => [2,4,8]

//---//

// Q6.
const typeNum = (arr) => {
  const newArr = [];
  arr.filter((item) => {
    if (typeof item == "number") {
      newArr.push(item);
    }
  });
  return newArr;
};
typeNum([1, "bob", 3]); // => [1,3]

//---//

// Q7.
const containsAnd = (arr) => {
  const newArr = [];
  arr.filter((item) => {
    if (item.includes("and")) {
      newArr.push(item);
    }
  });
  return newArr;
};
containsAnd(["panda", "ran", "and"]); //=> ['panda', 'and']

//---//

// Q8.
const oddValues = (arr) => {
  const newArr = [];
  arr.filter((item) => {
    if (item % 2 != 0) {
      newArr.push(item);
    }
  });
  return newArr;
};
oddValues([1, 2, 3]); //=> [1,3]

//---//

// Q9.
const addValues = (arr) => {
  const newArr = arr.reduce((acc, item) => acc + item, 0);
  return newArr;
};

addValues([15, 10, 15, 5]); // => 45

//---//

// Q10.
const countNumberOfElements = (arr) => {
  const newArr = arr.reduce((index) => index + 1, 0);
  return newArr;
};

countNumberOfElements([15, 10, 15, 5]);

//---//
// Objects Challenges //

// Q1.
const checkValues = (obj, value) => {
  if (Object.values(obj).includes(value)) {
    return true;
  } else {
    return false;
  }
};

checkValues({ name: "ahmed", age: 15 }, 15); // => true
checkValues({ name: "ahmed", age: 15 }, 20); // => false

//---//

// Q2.
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  const arr1 = Object.keys(obj);
  return arr1;
};

getCourseKeys(courseInfo); // => ['name', 'duration', 'topics', 'finalExam']

//---//

// // Q3.
// {
//   GraceHopper: '222-303-5938',
//   AdaLovelace: '222-349-9842',
//   AlanTuring: '222-853-5933'
// }

/*
HR has asked you to change the data to make it easier 
to print so that it looks like this: 
*/
[
  "Grace Hopper: 222-303-5938",
  "Ada Lovelace: 222-349-9842",
  "Alan Turing: 222-853-5933",
];

const updateNumbers = (obj) => {
  // Solution code here...
  const newArr = [];
  for (const [key, value] of Object.entries({
    GraceHopper: "222-303-5938",
    AdaLovelace: "222-349-9842",
    AlanTuring: "222-853-5933",
  })) {
    newArr.push(`${key}: ${value}`);
  }
  return newArr;
};
updateNumbers();

//---//

// Q4.
const PassedOrFailed = function (studentGrades) {
  // TODO: Your code here
  for(const subj in studentGrades)
  {
    if(studentGrades[subj]['grade'] / studentGrades[subj]['total'] >= 0.50){
      return "The student have passed";
    }
    else
    {
      return "The student have failed";
    }
  }
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};
const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};
PassedOrFailed(studentOne); // =>  "The student have passed"
PassedOrFailed(studentTwo); // =>  "The student have failed"

//---//

// Q5.
const totalCharacters = (arr) => {
  //define new counter
  let characs = 0;
  arr.forEach((item) =>{
    characs= characs + item.length
  });
  return characs;
};

totalCharacters(["abc", "yz"]); // => 5

//---//

// Q6.
const houseSize = (arr) => {
// //   let sizes = [];

// //   return sizes;
};

houseSize(["Stark", 7, "Arryn", 3]); //[{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }]

//---//

// Q7.
const uniqueDogs = {
  max: { breed: "Labrador Retriever", color: "blond" },
  rex: { breed: "German Shepherd", color: "black and brown" },
  lucy: { breed: "Bulldog", color: "white" },
  lucifer: { breed: "Chihuahua", color: "brown" },
};

const createDog = function (name, dogBreed, furColor) {
  // TODO: Your code here
};

createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
createDog("rex", "Golden Retriever", "blond"); // => "The dog isn't unique enough :("