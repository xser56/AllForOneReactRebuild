

const grabSayHello = async (name) => 
{
    const response = await fetch("https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/SayHello/SayHelloTo?name=${name}t");
    const data = await response.text()
    console.log(data)
    return data;
}

const grabAddTwo = async (num1, num2) =>
{
    const response = await fetch("https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/AddingTwoNumbers/addNumbers/${num1}/${num2}")
    const data = await response.text
    return data;
}


export{grabSayHello, grabAddTwo}