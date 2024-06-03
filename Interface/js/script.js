// JavaScript for file upload and result display

function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.querySelector('.upload-button')
    const uploadedResults = document.getElementById('uploadedResults');
    const resultsDisplay = document.getElementById('resultsDisplay');

    if (fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    uploadButton.setAttribute('disabled', true)

    const file = fileInput.files[0];

    // Get prediction
    const formData = new FormData();

    formData.append('file', file);

    fetch("http://127.0.0.1:5000/files", {
        method: 'POST',
        body: formData
    }).then(
        response => response.json()
    ).then(data => {
        console.log(data);
        
        resultsDisplay.innerHTML = GetState(data.results)
        
        // const percentageValue = 100;
        // <div class="percentage-result">
        //     <div class="circle">
        //         <div class="inside-circle">${percentageValue}%</div>
        //     </div>
        // </div>

        // Update the circular progress bar
        // const circle = document.querySelector('.circle');
        // const fill = (percentageValue / 100) * 360;
        // circle.style.background = `conic-gradient(#4caf50 0% ${fill}%, #ddd ${fill}% 100%)`;

    }).catch(e => {

        console.log("error")
        resultsDisplay.innerHTML = `
            <div class="currency-result">
                <p class="error">An error has occured. Please try again.</p>
            </div>
        `;

    }).finally(() => {

        uploadedResults.style.display = "block";
        uploadButton.removeAttribute('disabled');
    })
}


function GetState(value) {
    let state, type;


    switch (value) {
        case(0) : {
            state = "Inter-ictal";
            type = "yellow"
            break;
        }
        case(1): {
            state = "Pre-ictal";
            type = "orange"
            break;
        }
        case(2): {
            state = "ictal";
            type = "red"
            break;
        }
    }

    return `<div class="currency-result ${type}">${state}</div>`
}


document.addEventListener('DOMContentLoaded', function() {
    NavScroll();
});

function NavScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.top = '-80px'; // Adjust the value based on your header height
        } else {
            // Scrolling up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
}
