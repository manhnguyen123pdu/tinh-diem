function xem (){
    let toan =+document.querySelector('#toan').value;
    let van =+document.querySelector('#van').value;
    let anh =+document.querySelector('#anh').value;
    let KV =document.querySelector('#KV').value;
    let content =document.querySelector('#content');

    switch(KV){
        case 'KV1':
            DKV=0.75;
            break
        case 'KV2':
            DKV=0.5;
            break
        case 'KV2-NT':
            DKV=0.25;
            break
        case 'KV3':
            DKV=0;
            break
    }

    let tongdiem=toan+van+anh+DKV;
    content.innerHTML='Tổng điểm DH của bạn là :' + tongdiem
}