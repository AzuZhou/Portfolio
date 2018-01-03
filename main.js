document.addEventListener('DOMContentLoaded', function () {

    const projects = ["project-1", "project-2", "project-3"];

    let currentSlide;
    let currentProject;
    let newSlide;
    let newProject;
    let currentProjectDisplay;
    let newProjectDisplay;

    let prevSlide = function () {

        for (let elem of projects) {
            if (document.getElementById(elem).style.display == "block") {
                currentSlide = projects.indexOf(elem) + 1;
                currentProject = "project-" + currentSlide;
                currentProjectDisplay = document.getElementById(currentProject).style.display;
            }
        }

        let prev = function (currentSlide) {
            newSlide = currentSlide - 1;
            newProject = "project-" + newSlide;
            newProjectDisplay = document.getElementById(newProject).style.display;

            if (currentProjectDisplay == "none") {
                document.getElementById(currentProject).style.display = "block";
            } else {
                document.getElementById(currentProject).style.display = "none";
            }

            if (newProjectDisplay == "block") {
                document.getElementById(newProject).style.display = "none"
            } else {
                document.getElementById(newProject).style.display = "block"
            }
        }

        if (currentSlide > 1) {
            prev(currentSlide);
        }
    }

    let nextSlide = function () {

        for (let elem of projects) {
            if (document.getElementById(elem).style.display == "block") {
                currentSlide = projects.indexOf(elem) + 1;
                currentProject = "project-" + currentSlide;
                currentProjectDisplay = document.getElementById(currentProject).style.display;
            }
        }

        let next = function () {
            newSlide = currentSlide + 1;
            newProject = "project-" + newSlide;
            newProjectDisplay = document.getElementById(newProject).style.display;


            if (currentProjectDisplay == "none") {
                document.getElementById(currentProject).style.display = "block";
            } else {
                document.getElementById(currentProject).style.display = "none";
            }

            if (newProjectDisplay == "block") {
                document.getElementById(newProject).style.display = "none"
            } else {
                document.getElementById(newProject).style.display = "block"
            }
        }

        if (currentSlide < 3) {
            next(currentSlide);
        }
    }

    document.getElementsByClassName("prev")[0].onclick = prevSlide;
    document.getElementsByClassName("next")[0].onclick = nextSlide;

})
