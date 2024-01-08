function next() {
    document.write(`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Inter&family=Long+Cang&family=Lora:ital@0;1&family=Poppins:wght@500&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Cardo&family=Cinzel:wght@400;500&family=Dancing+Script:wght@400;600&family=Great+Vibes&family=Inter&family=Long+Cang&family=Lora:ital@0;1&family=Poppins:wght@500&display=swap');
    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        height: 96vh;
    }

    .calc {
        background-color: rgb(196, 243, 244);
        height: 230px;
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
    }

    

    .weight {
        display: flex;
        margin: 5px;
        padding: 5px;
    }

    .height{
        display: flex;
        margin: 5px;
        padding: 5px;
    }

    #units{
        margin: 3px;
    }

    .title{
        color: rgb(115, 115, 243);
        font-size: 20px;
        margin-bottom: 20px;
        font-family: 'Cinzel', serif;
    }


    @media screen and (max-width :1300px){
        .calc{
            height: 320px;
            width: 390px;
            display: flex;
            flex-direction: column;
            
            
        }

        .title{
        color: rgb(115, 115, 243);
        font-size: 15px;
        margin-bottom: 15px;
        font-family: 'Cinzel', serif;
    }
        #units{
        margin: 3px;
        }

        #units1{
            margin: 3px;
        }

    
    .height{
        display: flex;
        margin: 2px;
        padding: 2px;
    }

    
    .weight{
        display: flex;
        margin: 2px;
        padding: 2px;
    }



}

    </style>

    <div class="main">
        <div class="calc">


            <div class="title">
                Hey Welcome to the BMI Calculator
            </div>

            <div class="weight">
                <label  for="weight">Enter your weight:- </label><br>
                <input type="number" id="weight"  name="weight" placeholder="here" oninvalid="alert('Invalid weight!')">

                <select name="weight" id="units" onchange="clearAnsText()">
                    <option value="kg">Kgs</option>
                    <option value="pounds">Lbs / Pounds</option>
                </select> <br>

            </div>

            <div class="height">
                <label  for="height">Enter your height:- </label><br>
                <input type="number" id = "height" name="height" placeholder="here" oninvalid="alert('Invalid height!')">

                <select name="height" id="units1" onchange="clearAnsText()">
                    <option value="inches">inches</option>
                    <option value="cms">cms</option>
                </select> <br>
            </div>

            <div class="btn2">
                <button type="submit" onclick="getSelectedOption()"> Submit </button>
                <button type ="reset" onclick = "reset()"> Reset </button>
            </div>

            <div class ="ans" id = "ans"></div>
            <div class ="suggest" id = "suggest"></div>
            
        </div>
    </div>

    `);
}


// Function to get the selected options from the dropdown as units and the values of the height and weight entered.

function getSelectedOption() {
    var w_val = document.getElementById("weight");
    var w_sel = w_val.value;
    console.log("selected weight-", w_sel);

    var h_val = document.getElementById("height");
    var h_sel = h_val.value;
    console.log("Selected Height-", h_sel);

    // Get the select element
    var unitsSelect = document.getElementById('units');
    var units2Select = document.getElementById("units1");

    // Get the selected option value
    var selectedOption = unitsSelect.options[unitsSelect.selectedIndex].value;
    var selectedOption2 = units2Select.options[units2Select.selectedIndex].value;

    // Declare the bmi variable outside the if-else blocks
    var bmi;

    // Display the selected option and input value
    console.log("Weight: " + selectedOption);
    console.log("Height: " + selectedOption2);

    if (selectedOption == "pounds" && selectedOption2 == "inches") {
        bmi = (703 * (w_sel / h_sel ** 2)).toFixed(2);
        console.log("Your Body Mass Index is :- ", bmi);
        const ans = document.getElementById("ans");
        var text_ans = document.createTextNode("Your BMI is " + bmi);
        ans.appendChild(text_ans);
    } else if (selectedOption == "kg" && selectedOption2 == "cms") {
        bmi = (w_sel / (h_sel / 100) ** 2).toFixed(2);
        console.log('Body mass index is :- ', bmi);
        const ans = document.getElementById("ans");
        var text_ans = document.createTextNode("Your BMI is " + bmi);
        ans.appendChild(text_ans);
    } else {
        console.log("errrr");
        const ans = document.getElementById("ans");
        var text_ans = document.createTextNode("Err");
        ans.appendChild(text_ans);
    }

    // Update the suggestion based on the bmi value
    var line_suggestion = document.getElementById("suggest");
    if (bmi < 16) {
        line_suggestion.innerText = "You are very underweight";
    } else if (16 < bmi && bmi < 18.5) {
        line_suggestion.innerText = "You are moderate";
    } else if (18.5 < bmi && bmi < 25) {
        line_suggestion.innerText = "You are Normal";
    } else if (25 < bmi && bmi < 30) {
        line_suggestion.innerText = "You are overweight";
    } else if (bmi > 30) {
        line_suggestion.innerText = "You are Obese";
    }
}


// Function to reset the values to its original
function reset(){
    var dropdown = document.getElementById("units")
    var dropdown1 = document.getElementById("units1")

    dropdown.selectedIndex = 0;
    dropdown1.selectedIndex = 0;
    

    var num_weight = document.getElementById("weight");
    var num_height = document.getElementById("height");

    num_weight.value = "";
    num_height.value = "";


    const ans = document.getElementById("ans");
    ans.innerText = "";

    const sugg_line = document.getElementById("suggest")
    sugg_line.innerText = "";
}

// Function to clear the text when the dropdown is changed
function clearAnsText() {
    const ans = document.getElementById("ans");
    ans.innerText = "";

    const sugg_line = document.getElementById("suggest")
    sugg_line.innerText = "";

}






