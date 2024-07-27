// import { Sceleton } from "./Sceleton";
import Sceleton from "./Sceleton";
import User from "./User";
import './users.css'
export default function Users({items, isLoading, onChangeSearchValue, searchValue, invites, onClickInvite, onClickSendInvites}) {
    return(
        <>
            <div className="search">
                <svg style={{width: '25px'}} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={searchValue} type="text" placeholder="Find users" onChange={onChangeSearchValue}/>
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Sceleton />
                    <Sceleton />
                    <Sceleton />
                    <Sceleton />
                    <Sceleton />
                </div>
            ) : (
                <ul className="users-list">
                   {items.filter(
                    obj => {
                        const fullName = (obj.first_name + obj.last_name).toLowerCase();
                        return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
                    }
                   ).map((obj) => {
                    return <User onClickInvite={onClickInvite} isInvited={invites.includes(obj.id)} key={obj.id} {...obj} />
                   })}
                </ul>
            )}

            {invites.length  > 0 && <button onClick={onClickSendInvites}  className="send-invite-btn">Send inventation</button>}
        </>
    )
};
