var mydate = [
    "2019-10-01",
    "2016-09-13",
    "2014-09-05",
    "2016-09-09",
    "2016-10-02"
];
mydate.sort(function(a, b) {
    var a1 = a.split('-'),
        b1 = b.split('-');
    return new Date(a1[0], a1[1], a1[2]) - new Date(b1[0], b1[1], b1[2]);
});
console.log(mydate);