// enum : stores constants ; duplicate value does not allow here in enum data type

//enum types : number , string , hetregenous

//numeric enum
enum RequestType {
  //readData,
  readData = 1,
  saveData,
  deleteData,
}

//console.log(RequestType);

//string enum

enum RequestType2 {
  readData = "Read_Data",
  deleteData = "Delete_Data",
}
//console.log(RequestType2);
//console.log(RequestType2.readData);

//hetergenous enum

enum RequestType3 {
  readData = "Read_Data",
  deleteData = "Delete_Data",
  id = 101,
}
console.log(RequestType3);
