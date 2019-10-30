// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function topNCompetitors(numCompetitors, topNCompetitors, competitors, numReviews, reviews) {
    const count = {};
    competitors.forEach(competitor => {
        reviews.forEach(review => {
            if (review.includes(competitor)) {
                count[competitor] = count[competitor] + 1 || 1;
            }
        });
    });

    const topN = [];

    topNCompetitors = Math.min(topNCompetitors, numCompetitors);
    while (topNCompetitors--) {
        let maxMentions = -1;
        let topCompetitor = "";
        Object.keys(count).forEach(key => {
            if (count[key] > maxMentions) {
                maxMentions = count[key];
                topCompetitor = key;
            }
        });
        delete count[topCompetitor];
        topN.push(topCompetitor);

    }

    return topN.sort();
}
    // FUNCTION SIGNATURE ENDS