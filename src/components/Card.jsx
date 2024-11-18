const Card = ({ title, subTitle, bodyText, display, changeBoolFun }) => {

    return (
        <div className="previewCard">
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
            <img src="https://placehold.co/600x400" width="100px" />
            
            <p>{bodyText}</p>
            <button onClick={display}>Diplay Something!</button>
            <button onClick={changeBoolFun}>Change Bool in Child...</button>

        </div>
    )
}

export default Card