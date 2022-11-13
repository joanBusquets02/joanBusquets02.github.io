function showHideSection(sectionNumber) {
    for(var i = 1; i <= 7; i++) {
        var section = document.getElementById("section" + i);

        if (i == sectionNumber) {
            if (section.style.display == 'block') {
                section.style.display = 'none';
            }
            else {
                section.style.display = 'block';
            }
        }
        else {
            section.style.display = 'none';
        }
    }
}

function calculateAge() {
    var today = new Date();
    var birthdate = new Date("2002-03-09");

    var elem = document.getElementById("age").innerText = Math.floor((today - birthdate) / (1000 * 3600 * 24 * 365));
}