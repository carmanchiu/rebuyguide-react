// import React from 'react';
import Review from "./Review.tsx";
import CreateReviewButton from "./CreateReviewButton";

function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <p>Rendering from profile component!</p>
            <CreateReviewButton />
            <Review />
        </div>
    );
}

export default Profile;