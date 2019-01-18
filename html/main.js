function getWebInfo(infoId){
    const infoContainer = document.querySelector(`#${infoId}`);
    if (!infoContainer) return false;

    infoContainer.innerText = '';

    const now = new Date();

    const info = [
        now.toISOString(),
        navigator.appVersion,
        document.baseURI
    ];

    info.map( item => createAndAppendInfo(item, infoContainer));

    axios.post('/webinfo', {
        data: info
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });
}

function createAndAppendInfo(info, infoContainer){
    const element = document.createElement('div');
    const text = document.createTextNode(info);

    element.appendChild(text);
    infoContainer.appendChild(element);
}

/*
goal is for hitting an end point and gathering information

document.addEventListener("DOMContentLoaded", function(event) { 
  //hit the end point
});

*/