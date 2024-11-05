const iec61850 = require("../lib/binding.js");
const assert = require("assert");

assert(iec61850, "The expected module is undefined");

let con = iec61850.IedConnection_create()
let error = iec61850.IedConnection_connect(con, "localhost", 8102)
if (error == iec61850.IED_ERROR_OK) {
    // Accessing to SAV values
    theVal = "testmodelSENSORS/TTMP1.TmpSv.instMag.f"
    theValType = iec61850.IEC61850_FC_MX
    temperatureValue = iec61850.IedConnection_readFloatValue(con, theVal, theValType)
    assert(temperatureValue[1]==0)
    newValue= temperatureValue[0]+10
    err = iec61850.IedConnection_writeFloatValue(con, theVal, theValType, newValue)
    assert(err==21)
    // Accessing to ASG values
    theVal = "testmodelSENSORS/TTMP1.TmpSp.setMag.f"
    theValType = iec61850.IEC61850_FC_SP
    temperatureSetpoint = iec61850.IedConnection_readFloatValue(con, theVal, theValType)
    console.log(temperatureSetpoint)
    assert(temperatureValue[1]==0)
    newValue= temperatureValue[0]+10
    err = iec61850.IedConnection_writeFloatValue(con, theVal, theValType, newValue)
    //assert(err==0)
    temperatureSetpoint = iec61850.IedConnection_readFloatValue(con, theVal, theValType)
    console.log(temperatureSetpoint)
    //assert(temperatureSetpoint[0]==newValue)
    iec61850.IedConnection_close(con)
}
else {
    console.log("Connection error")
    iec61850.IedConnection_destroy(con)
}

console.log("client ok")
