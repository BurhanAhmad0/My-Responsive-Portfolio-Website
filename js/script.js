function projectCard() {
    let projectTitle = ['Project 1', 'Project 2', 'Project 3'];
    let projectDescp = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur odit quam qui nostrum vel!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur odit quam qui nostrum vel!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur odit quam qui nostrum vel!'];

    let projectBox = document.querySelector('.projects');
    for (let index = 0; index < projectTitle.length; index++) {
        let projectBox_card = `<div class="card">
                            <div class="thumbnail">
                                <img src="img/cardCover.jpg" alt="">
                            </div>

                            <div class="cardText">
                                <h2>${projectTitle[index]}</h2>
                                <p>${projectDescp[index]}</p>
                            </div>
                        </div>`;

        projectBox.innerHTML = projectBox.innerHTML + projectBox_card;
    }
}

function reviewCard() {
    let clientName = ['Review 1', 'Review 2', 'Review 3'];
    let projectDescp = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur odit quam qui nostrum vel!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur odit quam qui nostrum vel!', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tenetur odit quam qui nostrum vel!'];

    let reviewBox = document.querySelector('.reviews');
    for (let index = 0; index < clientName.length; index++) {
        let reviewBox_card = `<div class="review-card">
                                    <div class="rev-stars">
                                        <strong class="fa fa-star"></strong>
                                        <strong class="fa fa-star"></strong>
                                        <strong class="fa fa-star"></strong>
                                        <strong class="fa fa-star"></strong>
                                        <strong class="fa fa-star"></strong>
                                    </div>
                                    
                                    <div class="descp">
                                        <p>${projectDescp[index]}</p>
                                    </div>
                                    <div class="client-info">
                                        <div class="photo">
                                            <img src="img/logo.png" width="50px" alt="">
                                        </div>
                                        <div class="name">
                                            <h3>${clientName[index]}</h3>
                                        </div>
                                    </div>
                                </div>`;

        reviewBox.innerHTML = reviewBox.innerHTML + reviewBox_card;
    }
}


function sideBarShow() {
    let sideBar = document.getElementById("sBar");
    sideBar.style.translate = "100%";
}

function sideBarHide() {
    let sideBar = document.getElementById("sBar");
    sideBar.style.translate = "-100%";
}

function main() {
    projectCard();

    reviewCard();
}

main();