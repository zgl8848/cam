const setAttr = function (attr, val) {
    let obj = document.createAttribute(attr);
    obj.value = val;
    return obj;
}

class FmlCom {
    // 实现jquery里的append方法
    domAppend(body, id) {
        let obj = document.createElement("OBJECT");
        let objId = ''
        if (id) {
            objId = setAttr("id", id);
        } else {
            objId = setAttr("id", "ZJRCEP");

        }
        obj.setAttributeNode(objId);
        let objClassid = setAttr(
            "classid",
            "clsid:3556A474-8B23-496F-9E5D-38F7B74654F4"//你电脑安装的ocx控件的ID
        );

        obj.setAttributeNode(objClassid);

//         let codebase = setAttr("codebase", internetFml.internetFml + "/download/ocx") //如果电脑中没有ocx此属性会在IE浏览器下自动提示下载
//         obj.setAttributeNode(codebase);
let codebase = setAttr("TYPE", "application/x-itst-activex") /
        obj.setAttributeNode(codebase);

        let objWidth = setAttr("width", 0);
        obj.setAttributeNode(objWidth);
        let objHeight = setAttr("height", 0);
        obj.setAttributeNode(objHeight);
        let objhspace = setAttr("hspace", 0);
        obj.setAttributeNode(objhspace);
        let objvspace = setAttr("vspace", 0);
        obj.setAttributeNode(objvspace);
        body.appendChild(obj);
    }
}

const FmlCommon = new FmlCom()
export default FmlCommon


// 			let obj = document.getElementsByTagName("object");
//     let flag = false;
//     for (let i = 0; i < obj.length; i++) {
//       if (obj[i].getAttribute("id") == "ocx") return (flag = true);
//     }
//     if (!flag) {
//       let body = document.getElementsByClassName("video")[0];
//       let obj = document.createElement("OBJECT");
//               let objId = ''
// //               if (id) {
// //                   objId = setAttr("id", id);
// //               } else {
//                   objId = setAttr("id", "ocx");
//       
//               // }
// 			  console.log(objId)
//               obj.setAttributeNode(objId);
//               let objClassid = setAttr(
//                   "classid",
//                   "clsid:3556A474-8B23-496F-9E5D-38F7B74654F4"//你电脑安装的ocx控件的ID
//               );
//       
//               obj.setAttributeNode(objClassid);
// //       
// //       //         let codebase = setAttr("codebase", internetFml.internetFml + "/download/ocx") //如果电脑中没有ocx此属性会在IE浏览器下自动提示下载
// //       //         obj.setAttributeNode(codebase);
//       let codebase = setAttr("TYPE", "application/x-itst-activex");
//               obj.setAttributeNode(codebase);
//       
//               let objWidth = setAttr("style", "width:100%;height:100%;");
//               obj.setAttributeNode(objWidth);
// //               let objHeight = setAttr("height", 0);
// //               obj.setAttributeNode(objHeight);
// //               let objhspace = setAttr("hspace", 0);
// //               obj.setAttributeNode(objhspace);
// //               let objvspace = setAttr("vspace", 0);
// //               obj.setAttributeNode(objvspace);
//               body.appendChild(obj);