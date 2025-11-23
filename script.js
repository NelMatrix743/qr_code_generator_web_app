/**
 *  SOURCE CODE VERSION: 1.0.0
 *  PROGRAMMER: NELSON CHIDI (NELMATRIX)
 *  DATE-TIME WRITTEN: NOV 11, 2025; 3:51PM
 *  REPOSITORY: https://github.com/NelMatrix743/qr_code_generator_web_app.git
 */


let inputContent = document.getElementById("user-input");
let qrCodeImage = document.getElementById("qr-display");
let generateBtn = document.querySelector(".generate-btn");
let downloadBtn = document.querySelector(".download-btn");


let BASE_API_URL = "https://api.qrserver.com/v1/create-qr-code/"


async function generateQRCode(qrcode_size, qrcode_data){
    let FULL_API_URL = BASE_API_URL + "?size=" + qrcode_size + "&data=" + qrcode_data;
    console.log(FULL_API_URL);
    const response = await fetch(FULL_API_URL);
    return await response.blob();
}

async function downloadQRCode(qrcode_blob){
    try { 
        const fileHandle = await window.showSaveFilePicker({
            suggestedName: "qrcode.png",
            types: [
                {
                    description: "PNG Image",
                    accept: { "image/png": [".png"]}
                }
            ]
        });
        const writable = await fileHandle.createWritable();
        await writable.write(qrcode_blob);
        await writable.close();
    } catch (error){
        if(error.name !== "AbortError"){
            console.error(error);
            alert("Failed to download file.");
        }
    } 
}


// main entry point
let QR_CODE_SIZE = "200x200";
let QR_CODE_DATA = "";


// implment event listeners
generateBtn.addEventListener("click", async () => {
    QR_CODE_DATA = encodeURIComponent(inputContent.value);
    let qrCodeBlobResult = await generateQRCode(QR_CODE_SIZE, QR_CODE_DATA);
    qrCodeImage.src = URL.createObjectURL(qrCodeBlobResult);
});
