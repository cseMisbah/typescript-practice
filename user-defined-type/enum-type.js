// enum : stores constants ; duplicate value does not allow here in enum data type
//enum types : number , string , hetregenous
//numeric enum
var RequestType;
(function (RequestType) {
    //readData,
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
//console.log(RequestType);
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
//console.log(RequestType2);
//console.log(RequestType2.readData);
//hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["deleteData"] = "Delete_Data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
