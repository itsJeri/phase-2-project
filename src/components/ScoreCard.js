
function ScoreCard({ test }) {
    return (
        <tr>
        <td>{test.title}</td>
        <td>Play Button?</td>
        <td>{test.score}</td>
        <td>More Filler</td>
    </tr>
    )
}

export default ScoreCard;