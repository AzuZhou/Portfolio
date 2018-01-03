document.addEventListener('DOMContentLoaded', function () {

    const projects = ["project-1", "project-2", "project-3"];

    let currentSlide;
    let currentProject;
    let newSlide;
    let newProject;
    let currentProjectDisplay;
    let newProjectDisplay;

    let change = function (currentProject, currentProjectDisplay, newProject, newProjectDisplay) {
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

            change(currentProject, currentProjectDisplay, newProject, newProjectDisplay);
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

            change(currentProject, currentProjectDisplay, newProject, newProjectDisplay);
        }

        if (currentSlide < 3) {
            next(currentSlide);
        }
    }

    let button1 = function () {
        document.getElementById("project-1").style.display = "block";
        document.getElementById("project-2").style.display = "none";
        document.getElementById("project-3").style.display = "none";
    }

    let button2 = function () {
        document.getElementById("project-1").style.display = "none";
        document.getElementById("project-2").style.display = "block";
        document.getElementById("project-3").style.display = "none";
    }

    let button3 = function () {
        document.getElementById("project-1").style.display = "none";
        document.getElementById("project-2").style.display = "none";
        document.getElementById("project-3").style.display = "block";
    }


    document.getElementsByClassName("prev")[0].onclick = prevSlide;
    document.getElementsByClassName("next")[0].onclick = nextSlide;
    document.getElementById("btn-project-1").onclick = button1;
    document.getElementById("btn-project-2").onclick = button2;
    document.getElementById("btn-project-3").onclick = button3;

})
