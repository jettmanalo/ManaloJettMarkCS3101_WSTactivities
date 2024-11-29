function toggleSkills() {
    const skillsHeader = document.getElementById('skills-header');
    const skillsText = document.getElementById('skills-text');
    const skillsList = document.getElementById('skills-list');
    const button = document.getElementById('toggle-skills');

    if (skillsList.style.display === "none" || skillsList.style.display === "") {
        skillsList.style.display = "flex";
        skillsHeader.style.display = "none";
        skillsText.style.display = "none";
        button.textContent = "Back";
    } else {
        skillsList.style.display = "none";
        skillsHeader.style.display = "block";
        skillsText.style.display = "block";
        button.textContent = "Learn More";
    }
}

function toggleEducation() {
    const educationHeader = document.getElementById('education-header');
    const educationText = document.getElementById('education-text');
    const educationList = document.getElementById('education-list');
    const button = document.getElementById('toggle-education');

    if (educationList.style.display === "none" || educationList.style.display === "") {
        educationList.style.display = "block";
        educationHeader.style.display = "none";
        educationText.style.display = "none";
        button.textContent = "Back";
    } else {
        educationList.style.display = "none";
        educationHeader.style.display = "block";
        educationText.style.display = "block";
        button.textContent = "Learn More";
    }
}
