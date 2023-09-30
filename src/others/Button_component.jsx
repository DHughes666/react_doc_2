

const Button = ({ handleClick, children }) => {
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

const PlayButton = ({ movieName }) => {
    const handlePlayClick = () => {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button handleClick={handlePlayClick}>
            Play {movieName}
        </Button>
    )
}

const UploadButton = () => {
    return (
        <Button handleClick={() => alert('Uploading')}>
            Upload Image
        </Button>
    )
}

const Toolbar2 = () => {
    return (
        <div>
            <PlayButton movieName='Let it Shine' />
            <UploadButton />
        </div>
    )
}

export default Toolbar2;