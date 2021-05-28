"use strict";

// activate and deactivate tabs 
// function activateTab(...element) {
//     for (let i = 0; i < element.length; i++) {
//         element[i].classList.add("active")
//     }
// }
// function deactivateTab(...element) {
//     for (let i = 0; i < element.length; i++) {

//         element[i].classList.remove("active")
//     }
// }

// async function getPatients() {
//     var records = await fetch('patient/get', {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then((record) => record.json())
//     addToPatients(records)
// }

// function addToPatients(records) {
//     var row = document.querySelector(".recordRow")
//     for (let i = 0; i < records.length; i++) {
//         var col = document.createElement("div");
//         col.setAttribute("class", "col-md-4 mb-4 patientCol")
//         row.appendChild(col)
//         console.log(records[i])
//         for(let i =0; i< 16;i++){
//             var textNode = document
//             var h4 = document.createElement("h4");
//             col.appendChild(h4)
//         }
        
//     }

// }
// function patientDetail(record){
//   var col = document.querySelector(".patientCol");
 
// }
// getPatients()
var pills_1 = document.getElementById("ex3-pills-1");
var pills_2 = document.getElementById("ex3-pills-2");
var pills_3 = document.getElementById("ex3-pills-3");
var pills_4 = document.getElementById("ex3-pills-4");

var tab_1 = document.getElementById("ex3-tab-1");
var tab_2 = document.getElementById("ex3-tab-2");
var tab_3 = document.getElementById("ex3-tab-3");
var tab_4 = document.getElementById("ex3-tab-4");

//handling patients information

var loader = document.querySelector(".loader");

// dynamic function to get the value of radio buses
function getRadioValue(radio) {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            let val = radio[i].value
            return (val)
        }

    }
}

var patientForm = document.getElementById("patient_form");

patientForm.addEventListener("submit", async (e) => {
    // prevernt the the default action fo reloading the page after form submission
    e.preventDefault();
    //initialize the loader
    loader.classList.remove("d-none")
    // get users inputs
    var sexObj = document.getElementsByName("sex");
    var maritalStatusObj = document.getElementsByName("maritalStatus")
    var sex = getRadioValue(sexObj);
    var maritalStatus = getRadioValue(maritalStatusObj);
    var fname = document.getElementById("validationDefault01").value;
    var dob = document.getElementById("validationDefault02").value;
    var idNumber = document.getElementById("validationDefault03").value;
    var occupation = document.getElementById("validationDefault04").value;
    var age = document.getElementById("validationDefault05").value;
    var phoneNumber = document.getElementById("validationDefault06").value;
    var education = document.getElementById("validationDefault07").value;
    var houseNo = document.getElementById("validationDefault09").value;
    var streetName = document.getElementById("validationDefault10").value;
    var district = document.getElementById("validationDefault11").value;
    var city = document.getElementById("validationDefault12").value;
    var province = document.getElementById("validationDefault13").value;
    // send a request to the server with the users information
    let submitedForm = await fetch('/patient/create',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname,
                dob,
                idNumber,
                occupation,
                age,
                maritalStatus,
                phoneNumber,
                education,
                houseNo,
                streetName,
                district,
                city,
                province,
                sex
            })
        }
    ).then(res => res.json())
    id.value = submitedForm.id;
    if (submitedForm.status === "ok") {
        // if request is success, load toastr alert
        toastr.success('Record Created!', 'Successful');
        patientForm.reset()
        // remove loader.
        loader.classList.add("d-none")
    } else {
        toastr.error('Error ocurred while creating record!', 'Error');
        loader.classList.add("d-none")
    }

})

// handling clinical information
var clinicalForm = document.getElementById("clinical-form");
clinicalForm.addEventListener("submit", async (e) => {
    // prevernt the the default action fo reloading the page after form submission
    e.preventDefault();
    //initialize the loader
    loader.classList.remove("d-none")
    // get users inputs
    var anyTravelObj = document.getElementsByName("anyTravel");
    var anyExposureObj = document.getElementsByName("anyExposure");
    var anyTravel = getRadioValue(anyTravelObj);
    var anyExposure = getRadioValue(anyExposureObj);
    console.log(`${anyTravel},${anyExposure}`)
    var date = document.getElementById("validationDefault14").value;
    var to = document.getElementById("validationDefault15").value;
    var country = document.getElementById("validationDefault16").value;
    var city = document.getElementById("validationDefault17").value;
    var ID = id.value
    var submitedForm = await fetch('/exposure/create',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ID,
                anyExposure,
                anyTravel,
                date,
                to,
                country,
                city
            })
        }
    ).then(res => res.json());
    console.log(submitedForm)
    if (submitedForm.status === "ok") {
        // if request is success, load toastr alert
        toastr.success('Record Created!', 'Successful');
        clinicalForm.reset()
        // remove loader.
        loader.classList.add("d-none");
    } else {
        loader.classList.add("d-none")
        toastr.error('Error ocurred while creating record!', 'Error');
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
    var ID = id.value
    // send api request to the server.
    var submitedForm = await fetch('/symptoms', {
        method: "POST",
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
        syptomForm.reset()
        // remove loader.
        loader.classList.add("d-none");
    } else {
        loader.classList.add("d-none")
        toastr.error('Error ocurred while creating record!', 'Error');
    }
})
