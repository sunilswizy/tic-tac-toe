import './player.score.styles.css';

interface PlayerScoreProps {
    player: 1 | 2,
    score: number
}

const PlayerScore: React.FC<PlayerScoreProps> = ({ player, score }) => {
    return (
        <div className='player-score'>
            <h1 className={`player-name player-${player}`}>PLAYER {player}</h1>
            <div className='scoreBox'>
                <span>{score}</span>
            </div>
        </div>
    )
}

export default PlayerScore;