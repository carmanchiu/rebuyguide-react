// Create review button
import CreateReviewButton from './CreateReviewButton';
// Star rating
import StarRating from './StarRating';

function CreateReview() {
    return (
        <form>
            <div>
                <p>Create Review template</p>
                <StarRating
                    name="half-rating"
                    readOnly={false}
                    defaultValue={0}
                 />
            </div>
            <CreateReviewButton>Submit</CreateReviewButton>
        </form>
    )
}
export default CreateReview;