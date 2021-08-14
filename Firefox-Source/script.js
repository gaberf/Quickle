var search = document.getElementById("search-container");
var drive = document.getElementById("drive-container");
var accounts = document.getElementById("account-container");
var classroom = document.getElementById("classroom-container");
var youtube = document.getElementById("youtube-container");
var gmail = document.getElementById("gmail-container");

search.addEventListener("click", googleSearch);
drive.addEventListener("click", googleDrive);
accounts.addEventListener("click", googleAccount);
classroom.addEventListener("click", googleClassroom);
youtube.addEventListener("click", googleyouTube);
gmail.addEventListener("click", googleGmail);

function googleSearch() {
    window.open("https://www.google.com");
}

function googleDrive() {
    window.open("https://www.drive.google.com");
}

function googleAccount() {
    window.open("https://myaccount.google.com/");
}

function googleClassroom() {
    window.open("https://www.classroom.google.com");
}

function googleyouTube() {
    window.open("https://www.youtube.com");
}

function googleGmail() {
    window.open("https://www.gmail.com");
}