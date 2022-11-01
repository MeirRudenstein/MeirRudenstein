var time = ["Shacharit", "Morning+Seder", "Mincha+%26+Afternoon+Seder", "Night+Seder+%26+Arvit"];

function submitForm(id) {
    split_ID = id.split("_");
    console.log(split_ID);
    if (split_ID[1] == "i") {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScTZluOOu2J87HRLBj7FZ_zVqZpZQ8Az9YtEiUaEzlcI3tLjg/formResponse?&pageHistory=0,1&entry.1682337327=IN&entry.2096638216=Yes&entry.115186426=14&entry.275193204="+ time[split_ID[0]] +"&emailAddress=meirrudenstein%40gmail.com&entry.1319684264=Rudenstein");
    } else {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScTZluOOu2J87HRLBj7FZ_zVqZpZQ8Az9YtEiUaEzlcI3tLjg/formResponse?&pageHistory=0,1&entry.1682337327=OUT&entry.2096638216=Yes&entry.115186426=14&entry.275193204="+ time[split_ID[0]] +"&emailAddress=meirrudenstein%40gmail.com&entry.1319684264=Rudenstein");
    }
}


