// JavaScript for file upload and result display

function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const resultsDisplay = document.getElementById('resultsDisplay');

    if (fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    const file = fileInput.files[0];
    // sendFile(file)

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const content = e.target.result;

        // Process the file content and display the results (dummy data used for demonstration)
        const currencyValue = "70";
        const percentageValue = 70;

        resultsDisplay.innerHTML = `
            <div class="currency-result">${currencyValue}</div>
            <div class="percentage-result">
                <div class="circle">
                    <div class="inside-circle">${percentageValue}%</div>
                </div>
            </div>
        `;

        // Update the circular progress bar
        const circle = document.querySelector('.circle');
        const fill = (percentageValue / 100) * 360;
        circle.style.background = `conic-gradient(#4caf50 0% ${fill}%, #ddd ${fill}% 100%)`;
    };

    reader.readAsText(file);


}


// function sendFile(content) {
//     const formData = new FormData()

//     formData.append('file', content)

//     fetch("http://127.0.0.1:5000/files", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: formData
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
// }

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
