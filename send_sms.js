let phoneNumber = document.querySelector(".phoneNumber"),
message = document.querySelector(".message"),
btnSend = document.querySelector(".btnSend"),
showMessage = document.querySelector(".showMessage");

btnSend.addEventListener("click", ()=>{

  //SMS section
          const myHeaders = new Headers();
          myHeaders.append("Authorization", "App 2e5ca41f7502aa64495b3fa0273fbd1f-c9ce5c34-e6b1-43dc-a64f-3e3f7ddbca97");
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Accept", "application/json");

          const newJSON = JSON.stringify({
            "messages": [{
            "destinations": [{"to": phoneNumber.value}],
            "from": "Syntax Flow",
            "text": message.value  
            }]
          });

          const requestTypes = {
            method: "POST",
            headers: myHeaders,
            body: newJSON,
            redirect: "follow"
          };

          showMessage.innerHTML = "SMS message sent";
          phoneNumber.value = "";
          message.value = "";

          fetch("https://e158qq.api.infobip.com/sms/2/text/advanced", requestTypes)
          .catch((error) => console.error());

});