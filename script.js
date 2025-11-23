/**
 *  SOURCE CODE VERSION: 1.0.0
 *  PROGRAMMER: NELSON CHIDI (NELMATRIX)
 *  DATE-TIME WRITTEN: NOV 11, 2025; 3:51PM
 *  REPOSITORY: https://github.com/NelMatrix743/qr_code_generator_web_app.git
 */


let inputContent = document.querySelector(".input-fld");
let generateBtn = document.querySelector(".generate-btn");
let downloadBtn = document.querySelector(".download-btn");
let qrCodeImage = document.querySelector("#qr-display");


let BASE_API_URL = "https://api.qrserver.com/v1/create-qr-code/"


async function generateQRCode(qrcode_size, qrcode_data){
    let FULL_API_URL = BASE_API_URL + "?size=" + qrcode_size + "&data=" + qrcode_data;
    const response = await fetch(FULL_API_URL);
    return await response.blob();
}
