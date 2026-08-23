function showInfo(type) {

    let message = "";

    if (type === "flood") {

        message =
            "FLOOD SAFETY\n\n" +
            "• Move to higher ground.\n" +
            "• Avoid walking or driving through flood water.\n" +
            "• Follow official evacuation instructions.\n" +
            "• Keep emergency supplies ready.";

    }

    else if (type === "earthquake") {

        message =
            "EARTHQUAKE SAFETY\n\n" +
            "• Drop, Cover and Hold On.\n" +
            "• Stay away from windows.\n" +
            "• Avoid damaged buildings.\n" +
            "• Follow official instructions.";

    }

    else if (type === "cyclone") {

        message =
            "CYCLONE SAFETY\n\n" +
            "• Monitor official warnings.\n" +
            "• Secure loose objects.\n" +
            "• Stay indoors when instructed.\n" +
            "• Evacuate when authorities instruct you to.";

    }

    else if (type === "fire") {

        message =
            "FIRE SAFETY\n\n" +
            "• Raise the alarm.\n" +
            "• Leave using a safe exit.\n" +
            "• Do not use elevators.\n" +
            "• Call emergency services.";

    }

    alert(message);
}


function submitReport(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const location =
        document.getElementById("location").value;

    const disaster =
        document.getElementById("disasterType").value;

    alert(
        "Disaster report submitted successfully!\n\n" +
        "Name: " + name +
        "\nLocation: " + location +
        "\nDisaster Type: " + disaster
    );

    document.querySelector("form").reset();
}
