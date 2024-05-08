// Question 1 - Make this a deep copy
function question1(){
    const arr1 = [1,2,3,4];
    const arr2 = [...arr1];
    arr2.push(10);
    console.log('Array 2 is ' + arr2);
    console.log('Array 1 is ' + arr1);
}


// Question 2 - Make this copy also a deep copy
function question2(){
    const user1 = {
        name: 'Vasanth',
        channel: 'uncommon_geeks'
    }
    const user2 = Object.assign({},user1);
    user2.name = 'coolVasanth'
    console.log(user2);  
    console.log(user1);    
}


// Question 3 (nested object) - Make this copy also a deep copy
function question3(){
    const user1 = {
        name: 'Vasanth',
        channel: 'uncommon_geeks',
        location: {
            city: 'Bengaluru',
            state: 'karnataka'
        }
    }
    const user2 = JSON.parse(JSON.stringify(user1));
    user2.location.city = 'Mysuru'
    console.log(user2);  
    console.log(user1);    
}


// Question 4
function question4(){
    const testObject1 = {
        sampleDate: new Date(),
    };
    const testObject2 = JSON.parse(JSON.stringify(testObject1));
    console.log(testObject1);
    console.log(testObject2);    
}

// Question 5
function question5(){
    const testObject1 = {
        sampleFunction: console.log,
        sampleUndefined: undefined
    };
    const testObject2 = JSON.parse(JSON.stringify(testObject1));
    console.log(testObject1);
    console.log(testObject2);
}


// Question 6
function question6(){
    const testObject1 = {
        sampleFunction: question2,
        sampleInfinity: -Infinity,
        sampleNaN: NaN,
    };
    const testObject2 = testObject1;
    console.log(testObject1);
    console.log(testObject2);
}
