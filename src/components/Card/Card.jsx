import "./Card.css"

export default function Card({props}) {    

    let dateParts = props.createdAt.split("T")[0].split("-");
    let finalDate = `${dateParts[2]} de ${dateParts[1]} de ${dateParts[0]}`
    
    return (

        <section className="card">
            <img className="img" src={props.banner} alt="ney" />
            <div className="header">
                <h2 className="title">{props.title}</h2>
                <p className="text"> {props.text} </p>
            </div>
            <a href="#">
                <button className="more">Leia mais...</button>
            </a>
            <div className="card-options">
                <button className="card-like">
                    <i className='bx bx-like'></i>
                </button>
                    <span> {props.likes.length} </span>
                <button className="card-comment">
                    <i className='bx bx-message-rounded-dots'></i>
                </button>
                <span> {props.comments.length} </span>
                <span> {finalDate} </span>
            </div>
        </section>
    )
}