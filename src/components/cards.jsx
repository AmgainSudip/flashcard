const Cards = (props) => {
    return (
        <div className= {`flashcard ${props.difficulty}`} onClick={props.onClick}>
            <p className="content">
                {props.flipped ? props.answer : props.question}
            </p>

            {!props.flipped && props.image && (
                <img src={props.image} alt="" />
            )}
        </div>
    );
};

export default Cards;