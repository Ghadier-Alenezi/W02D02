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
  arr.filter((item)=>{
      if(item.includes('and')){
        newArr.push(item);
      }
  })
  return newArr;
};
containsAnd(['panda', 'ran', 'and'])

//---//

// Q8.
const oddValues = (arr) => {
    const newArr = [];
    arr.filter((item)=>{
        if(item % 2 != 0){
            newArr.push(item);
        }
    })
    return newArr;
};

//---//

// Q9.
const addValues = (arr) => {
    const newArr = [];
    arr.reduce((acc,item, index) =>{
        
    }
    )
  };
  
  addValues([1,2,3,4]) // => 10  
  
  