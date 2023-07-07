export default function HobbyLinks() {
    let hobbyLinks = ["http://www.busytoddler.com", "http://www.birds.cornell.edu", "http://www.laineygossip.com"]
    return(
        <div>
            <h3>SOME WEBSITES I LIKE TO FREQUENTLY PERUSE!!!</h3>
            <p><a href = {hobbyLinks[0]}>Great Parenting Ideas and Techniques</a></p>
            <p><a href = {hobbyLinks[1]}>Backyard Birding Master Site!</a></p>
            <p><a href = {hobbyLinks[2]}>Insightful Celebrity Gossip</a></p>

        </div>
    )
}