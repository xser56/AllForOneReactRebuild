const grabSayHello = async (name) => 
{
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/SayHello/SayHelloTo?name=${name}`);
    const data = await response.text()
    console.log(data)
    return data;
}

const grabAddTwo = async (num1, num2) =>
{
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/AddingTwoNumbers/addNumbers/${num1}/${num2}`)
    const data = await response.text()
    console.log(`This is numbs: ${num1}, ${num2}`);
    return data;
}

const grabAskingQuestions = async (name, time) =>
{
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/AskingQuestions/SetReply/${name}/${time}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const grabGreaterOrLess = async (input, input2) =>
{
    const response = await fetch(`https://minichallengetwotofour-endpoints.azurewebsites.net/LessThenGreaterThen/lessThenGreaterThen/${input}/${input2}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const grabMadLib = async (Input, InputTwo, InputThree, InputFour, InputFive, InputSix, InputSeven, InputEight, InputNine, InputTen) => 
{
    const response = await fetch(`https://allforonealan.azurewebsites.net/MadLib/MadLib/${Input}/${InputTwo}/${InputThree}/${InputFour}/${InputFive}/${InputSix}/${InputSeven}/${InputEight}/${InputNine}/${InputTen}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const grabOddOrEven = async (num1) =>
{
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/OddOrEven/AddOddOrEven/${num1}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const grabReverseItAlpha =  async (input) =>
{
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/ReverseItAlphanumeric/AddReverseItAlphanumeric/${input}`);
    const data = await response.text();
    console.log(data)
    return data;
}

const grabReverseItNumb =  async (input) =>
    {
        const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/ReverseItNumbersOnly/AddReverseItNumbersOnly/${input}`);
        const data = await response.text();
        console.log(data)
        return data;
    }

const grabMagic8Ball = async (input) =>
{
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/Magic8Ball/shakeBall/${input}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const grabResturantPicker = async (picked) =>
{
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/RestaurantPicker/pickRestaurant/${picked}`);
    const data = await response.text();
    console.log(data);
    return data;
}


export {grabSayHello, grabAddTwo, grabAskingQuestions, grabGreaterOrLess, grabMadLib, grabOddOrEven, grabReverseItAlpha, grabReverseItNumb, grabMagic8Ball, grabResturantPicker} 