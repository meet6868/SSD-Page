
function displayLastModified() {
    const lastModified = new Date(document.lastModified);
    
    const formattedDate = lastModified.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const lastUpdatedElement = document.getElementById("lastUpdated");
    if (lastUpdatedElement) {
        lastUpdatedElement.innerHTML += formattedDate;
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    
    const txtElement = document.getElementById('txt');
    if (txtElement) {
        txtElement.innerHTML = today.toLocaleString();
    }
    
    setTimeout(startTime, 1000);
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

document.addEventListener('DOMContentLoaded', function() {
    displayLastModified();
    startTime();
});


document.addEventListener('DOMContentLoaded', function() {
    
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});