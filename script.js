const nextElement = document.getElementById('next');
const prevElement = document.getElementById('prev');
const stepElement = document.querySelectorAll('.step');
const progressBarFrontElement = document.querySelector(".progress-bar-front")

let currentChecked = 1;

nextElement.addEventListener('click', () => {
    currentChecked++;
    if (currentChecked > stepElement.length) {
        currentChecked = stepElement.length;
    }

    updateStepProgress();
});

prevElement.addEventListener('click', () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }

    updateStepProgress();
});

function updateStepProgress() {
    stepElement.forEach((step, index) => {
        if (index < currentChecked) {
            step.classList.add('checked');
            step.innerHTML = `<i class="fa-solid fa-check"></i>
            <small>${index === 0 ? "Start" : index === stepElement.length - 1 ? "Final" : "Step " + index}</small>`;
        } else {
            step.classList.remove('checked');
            step.innerHTML = `<i class="fa-solid fa-times"></i>`;
        }
    });

    const checkedNumber = document.querySelectorAll(".checked").length;

    progressBarFrontElement.style.width = ((checkedNumber - 1) / (stepElement.length - 1)) * 100 + "%";

    if (currentChecked === 1) {
        prevElement.disabled = true;
    }
    else if (currentChecked === stepElement.length) {
        nextElement.disabled = true;
    }
    else {
        prevElement.disabled = false;
        nextElement.disabled = false;
    }
}