let phoneNumber = document.querySelector(".phoneNumber"),
message = document.querySelector(".message"),
btnSend = document.querySelector(".btnSend"),
showMessage = document.querySelector(".showMessage");

btnSend.addEventListener("click", ()=>{

  //SMS section
          const myHeaders = new Headers();
          myHeaders.append("Authorization", "2a26d5cc26b167238c7e8791396bc046-0548d00e-2c39-4bb2-befa-bfe8c6572db3");
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
