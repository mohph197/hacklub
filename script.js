function onDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="#5ffce7";
    // days[index].style.backgroundColor="#2d27fb60";
    daysContents[index].style.backgroundColor="#2d27fb60";
    // daysContents[index].style.height="100%";
    daysContents[index].style.borderColor="#5ffce7";
    daysNums[index].style.backgroundColor="#2d27fb60";
    daysNums[index].style.borderColor="#5ffce7";
}
function offDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="white";
    // days[index].style.backgroundColor="transparent";
    daysContents[index].style.backgroundColor="transparent";
    // daysContents[index].style.height="0%";
    daysContents[index].style.borderColor="white";
    daysNums[index].style.backgroundColor="transparent";
    daysNums[index].style.borderColor="white";
}
function onAbout()
{
    var articleTitle = document.querySelector("#about > .title");
    var articleContent = document.querySelector("#about > .content");
    var titleBorder = document.querySelector("#about > .title > .flexBorder");
    var contentBorder = document.querySelector("#about > .content > .flexBorder");
    articleTitle.style.color = "#5ffce7";
    // articleTitle[index].style.borderBottom = "2px solid #5ffce7";
    articleContent.style.backgroundColor = "#27a6fb60";
    articleContent.style.boxShadow = "5px 5px 10px #022546c0";
    // articleContent[index].style.borderBottom = "2px solid #5ffce7";
    articleContent.style.borderLeftColor = "#5ffce7";
    contentBorder.style.width = "100%";
    contentBorder.style.borderBottomColor = "#5ffce7";
    titleBorder.style.height = "20px";
    titleBorder.style.width = "100%";
    titleBorder.style.borderRightColor = "#5ffce7";
    titleBorder.style.borderBottomColor = "#5ffce7";
}
function offAbout()
{
    var articleTitle = document.querySelector("#about > .title");
    var articleContent = document.querySelector("#about > .content");
    var titleBorder = document.querySelector("#about > .title > .flexBorder");
    var contentBorder = document.querySelector("#about > .content > .flexBorder");
    articleTitle.style.color = "white";
    // articleTitle[index].style.borderBottom = "2px solid white";
    articleContent.style.backgroundColor = "transparent";
    articleContent.style.boxShadow = "none";
    // articleContent[index].style.borderBottom = "none";
    articleContent.style.borderLeftColor = "white";
    contentBorder.style.width = "0%";
    contentBorder.style.borderBottomColor = "transparent";
    titleBorder.style.height = "0px";
    titleBorder.style.width = "0%";
    titleBorder.style.borderRightColor = "transparent";
    titleBorder.style.borderBottomColor = "transparent";
}
function onFaq()
{
    var articleTitle = document.querySelector("#faq > .title");
    var articleContent = document.querySelector("#faq > .content");
    var titleBorder = document.querySelector("#faq > .title > .flexBorder");
    var contentBorder = document.querySelector("#faq > .content > .flexBorder");
    articleTitle.style.color = "#5ffce7";
    // articleTitle[index].style.borderBottom = "2px solid #5ffce7";
    articleContent.style.backgroundColor = "#e227fb60";
    articleContent.style.boxShadow = "5px 5px 10px #022546c0";
    // articleContent[index].style.borderBottom = "2px solid #5ffce7";
    articleContent.style.borderLeftColor = "#5ffce7";
    contentBorder.style.width = "100%";
    contentBorder.style.borderBottomColor = "#5ffce7";
    titleBorder.style.height = "20px";
    titleBorder.style.width = "100%";
    titleBorder.style.borderRightColor = "#5ffce7";
    titleBorder.style.borderBottomColor = "#5ffce7";
}
function offFaq()
{
    var articleTitle = document.querySelector("#faq > .title");
    var articleContent = document.querySelector("#faq > .content");
    var titleBorder = document.querySelector("#faq > .title > .flexBorder");
    var contentBorder = document.querySelector("#faq > .content > .flexBorder");
    articleTitle.style.color = "white";
    // articleTitle[index].style.borderBottom = "2px solid white";
    articleContent.style.backgroundColor = "transparent";
    articleContent.style.boxShadow = "none";
    // articleContent[index].style.borderBottom = "none";
    articleContent.style.borderLeftColor = "white";
    contentBorder.style.width = "0%";
    contentBorder.style.borderBottomColor = "transparent";
    titleBorder.style.height = "0px";
    titleBorder.style.width = "0%";
    titleBorder.style.borderRightColor = "transparent";
    titleBorder.style.borderBottomColor = "transparent";
}
var count = 0;
function nextOne()
{
    var workshop = document.getElementsByClassName("workshop");
    var workshopTrackers = document.getElementsByClassName("miniBar");
    if(count < 3)
    {
        count++;
        workshop[count - 1].style.width = "0px";
        workshop[count - 1].style.opacity = "0";
        workshopTrackers[count - 1].style.backgroundColor = "#ffffff1f";
        workshop[count].style.width = "400px";
        workshop[count].style.opacity = "1";
        workshopTrackers[count].style.backgroundColor = "#5ffcef";
    } else
    {
        count = 0;
        workshop[3].style.width = "0px";
        workshop[3].style.opacity = "0";
        workshopTrackers[3].style.backgroundColor = "#ffffff1f";
        workshop[count].style.width = "400px";
        workshop[count].style.opacity = "1";
        workshopTrackers[count].style.backgroundColor = "#5ffcef";
    }
        
    
}
function preOne()
{
    var workshop = document.getElementsByClassName("workshop");
    var workshopTrackers = document.getElementsByClassName("miniBar");
    if(count > 0)
    {
        workshop[count - 1].style.width = "400px";
        workshop[count - 1].style.opacity = "1";
        workshopTrackers[count - 1].style.backgroundColor = "#5ffcef";
        workshop[count].style.width = "0px";
        workshop[count].style.opacity = "0";
        workshopTrackers[count].style.backgroundColor = "#ffffff1f";
        count--;
    } else
    {
        workshop[3].style.width = "400px";
        workshop[3].style.opacity = "1";
        workshopTrackers[3].style.backgroundColor = "#5ffcef";
        workshop[count].style.width = "0px";
        workshop[count].style.opacity = "0";
        workshopTrackers[count].style.backgroundColor = "#ffffff1f";
        count=3;
    }
}