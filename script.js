function generateLink(id) {
    const amount = get_money();
    if(!amount){
        alert('金額輸入錯誤！');
        return;
    }
    const pay_zg = document.getElementById('pay_zg').value;
    const account = document.getElementById('account').value;
    const url = `https://ssl.smse.com.tw/ezpos/mtmk_utf.asp?Rvg2c=1&Dcvc=16761&Od_sob=Servicebuyout&Amount=${amount}&Email=${account}&Pay_zg=${pay_zg}&Data_id=${id}`;
    window.open(url, '_blank');
};

function recordPayment() {
    const account = document.getElementById("account").value;
    if(!account) {
        alert('請輸入信箱！');
        return;
    }
    
    const amount = get_money();
    if(!amount) {
        alert('金額輸入錯誤！');
        return;
    }

    const pay_zg = document.getElementById('pay_zg').value;
    const uniqueId = generateUniqueId();
    
    const amountSelect = document.getElementById('amount');
    const remark = getSelectedText(amountSelect);
    
    const url = `https://ssl.smse.com.tw/ezpos/mtmk_utf.asp?Rvg2c=1&Dcvc=16761&Od_sob=Servicebuyout&Amount=${amount}&Email=${account}&Pay_zg=${pay_zg}&Data_id=${uniqueId}&Remark=${encodeURIComponent(remark)}`;
    window.open(url, '_blank');
}

function get_money(){
    let amount = parseInt(document.getElementById("amount").value);
    let count = parseInt(document.getElementById("Count").value);
    let money = amount * count;
    return money;
}

function generateUniqueId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${timestamp}${random}`;
}

function getSelectedText(selectElement) {
    return selectElement.options[selectElement.selectedIndex].text;
}