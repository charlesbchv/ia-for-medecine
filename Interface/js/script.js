// JavaScript for file upload and result display
const forbiddenExtensions = ['.py', '.ipynb', '.java', '.c'];
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const errorMessage = document.getElementById('errorMessage');

function loadFiles() {
    const resultsDisplay = document.getElementById('resultsDisplay');

    const uploadButton = document.querySelector('.upload-button')
    const uploadedResults = document.getElementById('uploadedResults');

    errorMessage.innerHTML = '';
    fileList.innerHTML = '';

    if (fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    const file = fileInput.files[0];

    const extension = `.${file.name.split('.').pop()}`;
    if (forbiddenExtensions.includes(extension)) {
        console.log('error')
        errorMessage.innerHTML = `Files of type ${extension} are forbidden.`;
        return;
    }

    uploadButton.setAttribute('disabled', true)

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

    }).catch(e => {
    
        console.log(e)
        resultsDisplay.innerHTML = `
            <div class="prediction-result">
                <p class="error">An error has occured. Please try again.</p>
            </div>
        `
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

    return `<div class="prediction-result ${type}">${state}</div>`
}

document.addEventListener('DOMContentLoaded', function() {
    NavScroll();

    fileInput.addEventListener('change', e => {
        const file = e.target.files[0]
        fileList.innerHTML = `<p class="file-list-item">File "${file.name}" has been uploaded.</p>`;
        errorMessage.innerHTML = '';
    })
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