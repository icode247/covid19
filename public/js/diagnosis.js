
function getRadioValue(radio) {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            let val = radio[i].value
            return (val)
        }

    }
}

var form = document.getElementById("bloodForm");
var loader = document.querySelector(".loader");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //initialize the loader
    loader.classList.remove("d-none")
    // get users inputs
    var ID = document.getElementById('id').value
    var whiteBloodCellCount = document.getElementById("whiteBloodCellCount").value
    var redBloodCellCount = document.getElementById('whiteBloodCellCount').value
    var absoluteNeutralCount = document.getElementById('absoluteNeutralCount').value
    var absoluteLymphocytesCount = document.getElementById('absoluteLymphocytesCount').value
    var platelateCount = document.getElementById('platelateCount').value
    var hermatocrite = document.getElementById('hermatocrite').value
    var carborndioxide = document.getElementById('carborndioxide').value
    var hemoglobin = document.getElementById('hemoglobin').value
    var response = await fetch('/test', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ID,
            whiteBloodCellCount,
            redBloodCellCount,
            absoluteNeutralCount,
            absoluteLymphocytesCount,
            platelateCount,
            hermatocrite,
            carborndioxide,
            hemoglobin
        })
    }).then(res => res.json())
    if (response.status === "ok") {
        // if request is success, load toastr alert
        toastr.success('Record Created!', 'Successful');
        form.reset()
        // remove loader.
        loader.classList.add("d-none")
    } else {
        toastr.error('Error ocurred while creating record!', 'Error');
        loader.classList.add("d-none")
    }
})

//handling syptoms 
var syptomForm = document.getElementById('form_data');
syptomForm.addEventListener('submit', async (e) => {
    // prevernt the the default action fo reloading the page after form submission
    e.preventDefault();
    //initialize the loader
    loader.classList.remove("d-none")
    // get users inputs
    var Fever = getRadioValue(document.getElementsByClassName("fever"));
    var Diarrhea = getRadioValue(document.getElementsByClassName("Diarrhea"));
    var Runny_nose = getRadioValue(document.getElementsByClassName("Runny-nose"));
    var Vomiting = getRadioValue(document.getElementsByClassName("Vomiting"));
    var Muscle_pain = getRadioValue(document.getElementsByClassName("Muscle-pain"));
    var shortness_of_breath = getRadioValue(document.getElementsByClassName("shortness-of-breath"));
    var Nausea = getRadioValue(document.getElementsByClassName("Nausea"));
    var Sore_throat = getRadioValue(document.getElementsByClassName("Sore-throat"));
    var Headeche = getRadioValue(document.getElementsByClassName("Headeche"));
    var Joint_pain = getRadioValue(document.getElementsByClassName("Joint-pain"));
    var Cough = getRadioValue(document.getElementsByClassName("Cough"));
    var ID = sympID.value
    console.log(Muscle_pain)
    // send api request to the server.
    var submitedForm = await fetch('/symptoms', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ID,
            Fever,
            Diarrhea,
            Runny_nose,
            Vomiting,
            Muscle_pain,
            shortness_of_breath,
            Nausea,
            Sore_throat,
            Headeche,
            Joint_pain,
            Cough
        })
    }).then((res) => res.json());
    console.log(submitedForm)
    if (submitedForm.status === "ok") {
        // if request is success, load toastr alert
        toastr.success('Record Created!', 'Successful');
        loader.classList.add("d-none");
    } else {
        loader.classList.add("d-none")
        toastr.error('Error ocurred while creating record!', 'Error');
    }
})
var upload = document.getElementById("upload");
var img = document.getElementById("img");

upload.addEventListener('click', () => {
    img.click()
})

// var chestForm = document.getElementById("chestForm");
// chestForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     var img = document.getElementById("img");
//     console.log(img)
//     var caseReports = document.getElementById("caseReports").value;
//     var recomendation = document.getElementById("recomendation").value;
//     var formData = new FormData();

//     formData.append('img', img.files[0])
  
//     console.log(formData)
//     var response = await fetch('/chest', {
//         method: "POST",
//         body: JSON.stringify({
//             formData
//         })
//     }).then(res => res.json());
//     console.log(response);
// })