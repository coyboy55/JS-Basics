
const stringSize = (text) => {
return text.length;
}
const replaceCharacterE = (text) => {
return text.replace('e',' ');
}
const concatString = (text1, text2) => {
return (text1+text2);
}
const showChar5 = (text) => {
return text.charAt(4);
}
const showChar9 = (text) => {
return text.substring(0, 9);
}
const toCapitals = (text) => {
return text.toUpperCase();
}
const toLowerCase = (text) => {
return text.toLowerCase();
}
const removeSpaces = (text) => {
return text.trim();
}
const IsString = (text) => {
if (typeof(text)=="string"){
    return true;
}else {return false;}
}

const getExtension = (text) => {
return text.substring(text.length-3,text.length);
}
const countSpaces = (text) => {
    var s=0;
for (var i=0;i<=text.length;i++){
    if(text.charAt(i)==" "){s=s+1;}

}return s;
}
const InverseString = (text) => {
    var splitString = text.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

const power = (x, y) => {
return Math.pow(x,y);
}
const absoluteValue = (num) => {
    if(num<0){
return num+(-2*num);}else{return num;}
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
var area= Math.PI*radius*radius;
return Math.ceil(area);
}
const hypothenuse = (ab, ac) => {
 var hyp2=Math.pow(ab,2)+Math.pow(ac,2);
 return Math.sqrt(hyp2,2);
}
const BMI = (weight, height) => {
var bmi=weight/(height*height);
return parseFloat(bmi.toFixed(2));
}

const createLanguagesArray = () => {
var arr=["Html","CSS","Java","PHP"];
return arr;
}

const createNumbersArray = () => {
var arr=[0,1,2,3,4,5];
return arr;
}

const replaceElement = (languages) => {
 languages.splice(2,1,"Javascript");
 return languages;
}

const addElement = (languages) => {
 languages.push("Ruby");
 languages.push("Python");
 return languages;

}

const addNumberElement = (numbers) => {
numbers.splice(0,0,-1);
numbers.splice(0,0,-2);
return numbers;

}

const removeFirst = (languages) => {
languages.shift();
return languages;
}

const removeLast = (languages) => {
languages.pop();
return languages;
}

const convertStrToArr = (social_arr) => {
return social_arr.split(",");
}

const convertArrToStr = (languages) => {
return languages.join();
}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;
}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;
}