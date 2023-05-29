import './player.score.styles.css';

interface PlayerScoreProps {
    player: 'X' |'O' | 0,
    score: number
}

const PlayerScore: React.FC<PlayerScoreProps> = ({ player, score }) => {
    return (
        <div className='player-score'>
            <h1 className={`player-name player-${player}`}> {player === 0 ? 'Tie' : `PLAYER ${player}`}</h1>
            <div className='scoreBox'>
                <span>{score}</span>
            </div>
        </div>
    )
}

export default PlayerScore;