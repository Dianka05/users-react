export default function Success({count}) {
    return (
        <div className="success-block">
            <img src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png" alt="Success" />
            <h3>Success!</h3>
            <p>Successefully send {count} inventation</p>
            <a href="">
                <button className="send-invite-btn">Back</button>
            </a>
        </div>
    )
};
