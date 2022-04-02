import {html} from '../../node_modules/lit-html/lit-html.js';
import { getUserId} from '../utils.js';
import * as theaterService from '../api/teatherAuth.js'

const profileTemplate = (data, email) => html`
<!--Profile Page-->
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${email}</h2>
            </div>
            <div class="board">
                <!--If there are event-->
    ${data.length > 0 ? data.map(theaterTemplate) : html`               
                 <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`}
            </div>
        </section>`;


const theaterTemplate = (data) => html`
               <div class="eventBoard">
                    <div class="event-info">
                        <img src=${data.imageUrl}>
                        <h2>${data.title}</h2>
                        <h6>J${data.date}</h6>
                        <a href="/details/${data._id}" class="details-button">Details</a>
                    </div>
                </div>`;

export const profileView = async (ctx) => {
    const userId = getUserId();
    console.log(ctx.user.email)
    const data = await theaterService.createdByCurrentUser(userId);
ctx.render(profileTemplate(data, ctx.user.email));
};