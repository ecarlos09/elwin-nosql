db = connect("localhost:27017/celebs");

function getCelebNamesOnly() {
    let celebItems = db.celebs.find().toArray();
    let celebNames = celebItems.map(celeb => {
        return celeb.name;
    })
    return celebNames;
}

function getCelebsByChildren() {

}

function getCelebsByAwardsWon() {

}

function getCelebsByBirthplace() {

}

function getCelebsByAwardsAndGroupedByBirthplace() {

}