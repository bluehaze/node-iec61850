const iec61850 = require("../lib/binding.js");
const assert = require("assert");

assert(iec61850, "The expected module is undefined");

const model = iec61850.IedModel_create("testmodel");

var lDevice1 = iec61850.LogicalDevice_create("SENSORS", model);
var lln0 = iec61850.LogicalNode_create("LLN0", lDevice1);
var ttmp1 = iec61850.LogicalNode_create("TTMP1", lDevice1);
iec61850.CDC_SAV_create("TmpSv",  iec61850.toModelNode(ttmp1), 0, false);
iec61850.CDC_ASG_create("TmpSp",  iec61850.toModelNode(ttmp1), 0, false);
var iedServer = iec61850.IedServer_create(model)
iec61850.IedServer_start(iedServer, 8102);

while (true) {

}

console.log("Tests passed- everything looks OK!");
