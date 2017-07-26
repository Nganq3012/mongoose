function aRose() {
    console.log('hihihi')
}

var anotherName = aRose;
var a = typeof(anotherName);

console.log(a)
anotherName();
setTimeout(aRose, 2000);

function multi123(num) {
    return 5 * 123;
}

function multi136(num) {
    return 5 * 123;
}
function changeNumber(num, trans) {
    return trans(num);
}
a=changeNumber(3,multi123);
console.log('dm',a)


function countDown(time) {
    for(var i=0;i<=time;i++) {
        print(i,time);
    }
}
function print(i,time) {
    setTimeout(function () {
        console.log(i);
    },(time-i)*1000)
}

countDown(5);
function createWebsiteCounter() {
    var numberOfVisitor = 0;

    function getNumberOfVisiter() {
        return numberOfVisitor;
    }

    function setNumberOfVisitor(num) {
        numberOfVisitor = num;
        return {
            getNumberOfVisiter: getNumberOfVisiter,
            setNumberOfVisitor: setNumberOfVisitor
        }
    }
}
var myWebsite=createWebsiteCounter();
myWebsite.setNumberOfVisitor(myWebsite.getNumberOfVisiter()+1)
console.log(myWebsite.getNumberOfVisiter())


