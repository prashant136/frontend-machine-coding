import React, { useState, useEffect } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";
import "./style.css";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    const handleLike = async () => {
        setError(null);
        setIsFetching(true);

        try {
            const response = await fetch(
                "https://www.greatfrontend.com/api/questions/like-button",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ action: liked ? "unlike" : "like" })
                }
            );
            // console.log(await response.json());

            if (response.status >= 200 && response.status < 300) {
                setLiked(!liked);
            } else {
                const res = await response.json();
                setError(res.message);
            }
        } catch (error) {
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <div>
            <button
                className={`likeBtn ${liked ? "liked" : ""} `}
                onClick={handleLike}
                disabled={isFetching} // disable button during isFetching is true. prevent rapid api calls
            >
                {isFetching ? <SpinnerIcon /> : <HeartIcon />}
                {liked ? "Liked" : "Like"}
            </button>
            {error && <span className='error'>{error}</span>}
        </div>
    );
}

/***
 *
 * Requiremnts -----
 * - In the button's default state, when it is clicked, it goes into the loading state and a request is made to the provided back end API which has a 50% chance to succeeding/failing.
 *     - If the request was successful, the button changes to the "Liked" state.
 *     - Otherwise it returns to the "Default" /"Hovered" state depending on whether the cursor is still over the button.
 *       The error message from the back end API should be shown below the button.
 *
 * - If the user clicks on the "Liked"-state button, the reverse flow happens.
 *
 *
 * Submission API ----
 *  URL: "https://www.greatfrontend.com/api/questions/like-button"
 *  HTTP Method: "post"
 *  Content Type: "json"
 *
 *
 * Parameters -----
 *  The following fields are accepted in the request body:
 *  "action": A string of either "like" or "unlike" depending on the desired action.
 *
 *
 * Response -----
 *  The API has a 50% chance of succeeding (HTTP 200) or failing (HTTP 500) so as to make it easy for you to test the request failure cases.
 *  It returns a JSON payload of the following shape depending on the outcome.
 * Success:  { messsage: 'success'}
 * Failure:  { message: "Unknown error during attempted {{action}}. Please try again later.! }
 *
 */
