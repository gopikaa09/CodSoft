
const calulate=()=>{
    const answerField = document.form1.answer;
    const input = answerField.value;
    const result = eval(input); 
    answerField.value = result;
    console.log(result);
}