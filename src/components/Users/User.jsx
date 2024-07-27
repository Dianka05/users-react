export default function User({id, email, first_name, last_name, avatar, onClickInvite, isInvited}){
    console.log(email, first_name, last_name, avatar);
    return (
        <li className='element'>
            <div>
                <img className="avatar" src={avatar} alt="User" />
                <div>
                    <h3>{first_name} {last_name}</h3>
                    <p className="email">
                        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
                        </svg>
                        {email}
                    </p>
                </div>
            </div>
             {/* https://www.svgrepo.com/show/25409/minus-sign-of-a-line-in-horizontal-position.svg */}
            <img 
                onClick={() => onClickInvite(id)} 
                className="action" 
                style={{width: "20px", height: "20px"}}  
                src={isInvited ? 
                ("https://www.svgrepo.com/show/25409/minus-sign-of-a-line-in-horizontal-position.svg") : (
                    "https://www.svgrepo.com/show/2087/plus.svg"
                )} alt="" 
            />
            {/* <img style={{width: "20px"}} alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iZmlsbDojRkZGRkZGOyI+CiAgICA8cGF0aCBkPSJNIDY0IDYuMDUwNzgxMiBDIDQ5LjE1IDYuMDUwNzgxMiAzNC4zIDExLjcgMjMgMjMgQyAwLjQgNDUuNiAwLjQgODIuNCAyMyAxMDUgQyAzNC4zIDExNi4zIDQ5LjIgMTIyIDY0IDEyMiBDIDc4LjggMTIyIDkzLjcgMTE2LjMgMTA1IDEwNSBDIDEyNy42IDgyLjQgMTI3LjYgNDUuNiAxMDUgMjMgQyA5My43IDExLjcgNzguODUgNi4wNTA3ODEyIDY0IDYuMDUwNzgxMiB6IE0gNjQgMTIgQyA3Ny4zIDEyIDkwLjYwMDc4MSAxNy4wOTkyMTkgMTAwLjgwMDc4IDI3LjE5OTIxOSBDIDEyMS4wMDA3OCA0Ny40OTkyMTkgMTIxLjAwMDc4IDgwLjUwMDc4MSAxMDAuODAwNzggMTAwLjgwMDc4IEMgODAuNTAwNzgxIDEyMS4xMDA3OCA0Ny41MDA3ODEgMTIxLjEwMDc4IDI3LjMwMDc4MSAxMDAuODAwNzggQyA3LjAwMDc4MTMgODAuNTAwNzgxIDYuOTk5MjE4OCA0Ny40OTkyMTkgMjcuMTk5MjE5IDI3LjE5OTIxOSBDIDM3LjM5OTIxOSAxNy4wOTkyMTkgNTAuNyAxMiA2NCAxMiB6IE0gNjQgNDIgQyA2Mi4zIDQyIDYxIDQzLjMgNjEgNDUgTCA2MSA2MSBMIDQ1IDYxIEMgNDMuMyA2MSA0MiA2Mi4zIDQyIDY0IEMgNDIgNjUuNyA0My4zIDY3IDQ1IDY3IEwgNjEgNjcgTCA2MSA4MyBDIDYxIDg0LjcgNjIuMyA4NiA2NCA4NiBDIDY1LjcgODYgNjcgODQuNyA2NyA4MyBMIDY3IDY3IEwgODMgNjcgQyA4NC43IDY3IDg2IDY1LjcgODYgNjQgQyA4NiA2Mi4zIDg0LjcgNjEgODMgNjEgTCA2NyA2MSBMIDY3IDQ1IEMgNjcgNDMuMyA2NS43IDQyIDY0IDQyIHoiPjwvcGF0aD4KPC9zdmc+"/> */}
        </li>
    )
};
