db = connect("localhost:27017/celebs");

function getAndPrettifyCelebs() {
    return db.celebs.find().pretty();
}

function getCelebNamesOnly() {
    let celebsArray = db.celebs.find().toArray();
    let celebNames = celebsArray.map(celeb => {
        return celeb.name;
    })
    return celebNames;
}

function getCelebsWithChildren() {
    let celebsWithChildren = db.celebs.find({
        children: {$ne: 0} 
    })
    return celebsWithChildren.pretty();
}

function countCelebsWithChildren() {
    return getCelebsWithChildren().toArray().length;
}

function getCelebsByAwardsWon() {

}

function getCelebsByBirthplace() {

}

function getCelebsByAwardsAndGroupedByBirthplace() {

}