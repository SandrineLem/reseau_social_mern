import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


const FollowHandler = ({ idToFollow }) => {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {

    }

    const handeUnfollow = () => {

    }

    useEffect(() => {
        

    }, [userData, idToFollow])

    return (
        <div>
        FOLLOW
        </div>
    );
};

export default FollowHandler;