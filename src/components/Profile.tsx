// import React from 'react';
import Review from "./Review.tsx";
import CreateReviewButton from "./CreateReviewButton";

function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <p>Rendering from profile component!</p>
            <CreateReviewButton />
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
                <Review />
            </div>
        </div>
    );
}

export default Profile;