function validateEmail() {
    // Get the email input element
    var emailInput = document.getElementById("exampleInputEmail1");

    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("emailValidationMessage");

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove("is-invalid")
        emailInput.classList.add("is-valid")
        validationMessageDiv.innerHTML = "";
        return true;
    } else {
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        validationMessageDiv.innerHTML = "Invalid email address";
        return false;
    }
}

function validateGen() {
    var genInput = document.getElementById("selectgender");
    if (genInput === "") {
        genInput.classList.remove("is-valid")
        genInput.classList.add("is-invalid")
        return false;
    }
    else {

        genInput.classList.add("is-valid")
        genInput.classList.remove("is-invalid")
        return true;
    }
}


function validateEdu() {
    var eduInput = document.getElementById("select");
    if (eduInput === "") {
        eduInput.classList.remove("is-valid")
        eduInput.classList.add("is-invalid")
        return false;
    }
    else {

        eduInput.classList.add("is-valid")
        eduInput.classList.remove("is-invalid")
        return true;
    }
}


function validatePassword() {
    // Get the password input element
    var passwordInput = document.getElementById("password");

    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("passwordValidationMessage");

    // Regular expression for password validation
    var passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    // Check if the password is valid
    if (passwordRegex.test(passwordInput.value)) {

        passwordInput.classList.remove("is-invalid")
        passwordInput.classList.add("is-valid")
        validationMessageDiv.innerHTML = "";
        return true;
    } else {
        passwordInput.classList.add("is-invalid")
        passwordInput.classList.remove("is-valid")
        validationMessageDiv.innerHTML = "Invalid";
        return false;
    }
}



function validatePAN() {
    // Get the PAN input element
    var panInput = document.getElementById("panNumber");

    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("panValidationMessage");

    // Regular expression for PAN validation
    var panRegex = /^[A-Z]{5}[0-9]{4}[A-Za-z]$/;

    // Check if the PAN is valid
    if (panRegex.test(panInput.value)) {

        panInput.classList.remove("is-invalid")
        panInput.classList.add("is-valid")
        validationMessageDiv.innerHTML = "";
        return true;
    } else {

        panInput.classList.add("is-invalid")
        panInput.classList.remove("is-valid")
        validationMessageDiv.innerHTML = "Invalid PAN Number";
        return false;
    }
}


function validatePhoneNumber() {
    // Get the phone number input element
    var phoneNumberInput = document.getElementById("phone_no");

    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("phoneValidationMessage");

    // Regular expression for phone number validation (does not start with 0)
    var phoneRegex = /^[6-9]\d{9}$/;

    // Check if the phone number is valid
    if (phoneRegex.test(phoneNumberInput.value)) {

        phoneNumberInput.classList.remove("is-invalid")
        phoneNumberInput.classList.add("is-valid")
        validationMessageDiv.innerHTML = "";
        return true;
    } else {

        phoneNumberInput.classList.add("is-invalid")
        phoneNumberInput.classList.remove("is-valid")
        validationMessageDiv.innerHTML = "Phone number must have exactly 10 digits";
        return false;
    }
}


function validateFileSize() {
    // Get the file input element
    var fileInput = document.getElementById("exampleFormControlFile1");

    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("fileSizeValidationMessage");

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        var fileSize = fileInput.files[0].size;
        var fileSizeInMB = fileSize / (1024 * 1024);

        if (fileSizeInMB <= 2) {

            fileInput.classList.remove("is-invalid")
            fileInput.classList.add("is-valid")
            validationMessageDiv.innerHTML = "";
            return true;
        } else {

            fileInput.classList.add("is-invalid")
            fileInput.classList.remove("is-valid")
            validationMessageDiv.innerHTML = "File size should be less than 2MB.";
            fileInput.value = "";
            return false;
        }
    }
}



function validateName() {
    // Get the name input element
    var nameInput = document.getElementById("validationDefault01");

    // Get the div element for displaying the validation message
    var validationMessageDiv = document.getElementById("nameValidationMessage");

    // Regular expression for name validation (does not contain special characters)
    var nameRegex = /^[a-zA-Z ]*$/;

    // Check if the name is valid
    if (nameRegex.test(nameInput.value)) {

        nameInput.classList.remove("is-invalid")
        nameInput.classList.add("is-valid")
        validationMessageDiv.innerHTML = "";
        return true;
    } else {

        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        validationMessageDiv.innerHTML = "Name should not contain numbers or special characters.";
        return false;
    }
}
function validateUserName() {
    var username = document.getElementById('validationCustomUsername').value;
    var usernameError = document.getElementById("usernameError");
    var uservalid = document.getElementById('validationCustomUsername');
    if (username === "") {
        usernameError.textContent = "Username cannot be empty";
        uservalid.classList.add("is-invalid")
        uservalid.classList.remove("is-valid")
        usernameError.style.color = "red";
    }
    else if (username.length < 8) {
        usernameError.textContent = "Minimum 8 Characters required";
        uservalid.classList.add("is-invalid")
        uservalid.classList.remove("is-valid")
        usernameError.style.color = "red";
    }
    else {
        var storedFormData;
        try {

            var allKeys = Object.keys(localStorage);
            var matchingKey = allKeys.find(key => {
                try {
                    storedFormData = JSON.parse(localStorage.getItem(key));
                    return storedFormData && storedFormData.username === username;
                } catch (error) {
                    console.error("Error parsing stored data:", error);
                    return false;
                }
            });

            if (matchingKey) {
                usernameError.textContent = 'Username already exists. Please choose a different one.';
                uservalid.classList.add("is-invalid")
                uservalid.classList.remove("is-valid")
            }
            else {
                uservalid.classList.remove("is-invalid")
                uservalid.classList.add("is-valid")
                usernameError.textContent = '';
            }
        } catch (error) {
            console.error("Error retrieving submission key:", error);
        }
    }
}


function validateForm(event) {
    console.log("Validating form...");
    event.preventDefault();
    var formElements = [
        "validationDefault01",
        "exampleInputEmail1",
        "phone_no",
        "dob",
        "selectgender",
        "validationCustom02",
        "select",
        "validationCustomUsername",
        "password",
        "panNumber",
        "exampleFormControlFile1"
    ];
    for (var i = 0; i < formElements.length; i++) {
        var element = document.getElementById(formElements[i]);
        if (!element) {
            console.error("Form element " + formElements[i] + " not found.");
            return;
        }
    }
    var picElement = document.getElementById("exampleFormControlFile1");
    var file = picElement.files[0];

    if (!file) {
        console.error("No file selected.");
        return;
    }
    var reader = new FileReader();
    reader.onload = function (event) {
        var imgData = event.target.result;

        var newUser = {
            name: document.getElementById("validationDefault01").value,
            email: document.getElementById("exampleInputEmail1").value,
            phoneNumber: document.getElementById("phone_no").value,
            dob: document.getElementById("dob").value,
            gender: document.getElementById("selectgender").value,
            occupation: document.getElementById("validationCustom02").value,
            education: document.getElementById("select").value,
            username: document.getElementById("validationCustomUsername").value,
            password: document.getElementById("password").value,
            pan: document.getElementById("panNumber").value,
            pic: imgData,
            picSize: file.size,
            picType: file.type,
            picName: file.name,
            age: calculateAge(document.getElementById("dob").value),
        };
        var username = document.getElementById("validationCustomUsername").value;
        localStorage.setItem(username, JSON.stringify(newUser));
        alert('The form is submitted successfully');
        //console.log("Form validated successfully!");
        window.location.reload();
    };

    reader.readAsDataURL(file);

};





function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (
        currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
        age--;
    }

    return age;
}

function validateDate() {
    var inputDate = new Date(document.getElementById('dob').value);
    var dateError = document.getElementById('dateError');
    var minDate = new Date('1950-01-01');
    var maxDate = new Date('2010-12-31');
    if (inputDate >= minDate && inputDate <= maxDate) {

        dateError.textContent = '';

    } else {
        dateError.textContent = 'Date is outside the allowed range.';

    }
}


function searchData() {
    var searchTerm = document.getElementById('searchInput').value;
    document.getElementById("existingContent").style.display = "none";

    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '<h2 class="text-center mt-3 mb-3" style="font-weight: bold;">Results</h2>';

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var formData = JSON.parse(localStorage.getItem(key));

        if (matchesSearchCriteria(formData, searchTerm)) {
            appendResultBlock(resultContainer, key, formData);
        }
    }

    var refreshButton = document.createElement('button');
    refreshButton.textContent = 'Go Back';
    refreshButton.style.backgroundColor = "black";
    refreshButton.classList.add('btn', 'btn-secondary', 'mt-3', 'mb-3');
    refreshButton.onclick = function () {
        location.reload(true);
    };

    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('text-center', 'mt-3');
    buttonContainer.appendChild(refreshButton);

    resultContainer.appendChild(buttonContainer);
}

function matchesSearchCriteria(formData, searchTerm) {
    searchTerm = searchTerm.toLowerCase();

    if (/^[a-zA-Z]+$/.test(searchTerm) && formData.name.toLowerCase().includes(searchTerm)) {
        return true;
    }
    else if (/^\d+$/.test(searchTerm) && formData.age <= parseInt(searchTerm) / 365) {
        console.log("Searching by days:", searchTerm);
        return true;
    }
    else if (/^\d+kb$/i.test(searchTerm) || /^\d+\s*kb$/i.test(searchTerm)) {
        var maxSizeInKB = parseInt(searchTerm, 10) * 1000;
        if (formData.hasOwnProperty('picSize')) {
            var imageSizeInKB = (formData.picSize);
            console.log("imageSize", imageSizeInKB);


            if (imageSizeInKB < maxSizeInKB) {
                return true;
            }
        }

    }
    else if (/^\d+mb$/i.test(searchTerm) || /^\d+\s*mb$/i.test(searchTerm)) {
        var maxSizeInMB = parseInt(searchTerm, 10) * 1000 * 1000;
        if (formData.hasOwnProperty('picSize')) {
            var imageSizeInMB = (formData.picSize);
            console.log("imageSize", imageSizeInMB);

            if (imageSizeInMB < maxSizeInMB) {
                return true;
            }
        }

    }
    else {
        return false;
    }
}


function appendResultBlock(container, key, formData) {
    var resultBlock = document.createElement('div');
    resultBlock.classList.add('result-block', 'text-center', 'mt-3', 'mb-3');

    resultBlock.innerHTML += `<h2>${formData.name}</h2>`;
    resultBlock.innerHTML += `<p><strong>Email:</strong> ${formData.email}</p>`;
    resultBlock.innerHTML += `<p><strong>Phone number:</strong> ${formData.phoneNumber}</p>`;
    resultBlock.innerHTML += `<p><strong>Date Of Birth:</strong> ${formData.dob}</p>`;
    resultBlock.innerHTML += `<p><strong>Gender:</strong> ${formData.gender}</p>`;
    resultBlock.innerHTML += `<p><strong>Education:</strong> ${formData.education}</p>`;
    resultBlock.innerHTML += `<p><strong>User-Name:</strong> ${formData.username}</p>`;
    resultBlock.innerHTML += `<p><strong>Picture-Size:</strong> ${formData.picSize}</p>`;

    if (formData.pic) {
        resultBlock.innerHTML += `<div class="profile-photo-container">
                                      <img src="${formData.pic}" alt="${formData.name}'s Photo" class="profile-photo" width="200px">
                                    </div>`;
    }


    container.appendChild(resultBlock);

}


function searchLocalStorageByImageSize(formData, maxSizeInKB) {
    console.log("Searching by image size:", maxSizeInKB);

    if (formData.hasOwnProperty('picSize')) {
        var imageSizeInKB = (formData.picSize);
        console.log("imageSize", imageSizeInKB);


        if (imageSizeInKB < maxSizeInKB) {
            return true;
        }
    }
}


function searchLocalStorageByImageSizeMB(formData, maxSizeInMB) {
    console.log("Searching by image size:", maxSizeInMB);

    if (formData.hasOwnProperty('picSize')) {
        var imageSizeInMB = (formData.picSize);
        console.log("imageSize", imageSizeInMB);

        if (imageSizeInMB < maxSizeInMB) {
            return true;
        }
    }
}
